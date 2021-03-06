function createRange({ first, last, period = 'day' }) {
  if (!first || !last) return [];
  const range = [first];
  while (+range[range.length - 1] < +last) {
    const [currentLast] = range.slice(-1);
    const day = currentLast.plus({ [period]: 1 });
    range.push(day);
  }
  return range;
}

function getFirstDayOfWeek(fromDate) {
  // Luxon uses Monday as first day, so we adjust
  if (!fromDate?.isValid) return;
  if (fromDate.weekday === 7) {
    return fromDate;
  }
  const firstDayOfWeek = fromDate.startOf('week');
  return firstDayOfWeek.minus({ day: 1 });
}

function getFirstDisplayDay({ fromDate, period = 'month' }) {
  if (!fromDate?.isValid) return;
  const firstDayOfMonth = fromDate.startOf(period);
  return getFirstDayOfWeek(firstDayOfMonth);
}

function getLastDayOfWeek(fromDate) {
  // Luxon uses Monday as first day, so we adjust
  if (!fromDate?.isValid) return;
  // if it's already Saturday, return it
  if (fromDate.weekday === 6) {
    return fromDate;
  }
  // if it's between Monday and Friday, set it to Saturday
  if (fromDate.weekday < 6) {
    return fromDate.set({ weekday: 6 });
  }
  // if it's Sunday, add a day and then set it to Saturday
  return fromDate.plus({ day: 1 }).set({ weekday: 6 });
}

function getDisplayDaysRange(fromDate) {
  if (!fromDate?.isValid) return [];
  const first = getFirstDisplayDay({ fromDate });
  const { daysInMonth } = fromDate;
  const last = getLastDayOfWeek(fromDate.set({ day: daysInMonth }));
  return createRange({ first, last });
}

function getDisplayMonthsRange(fromDate) {
  if (!fromDate?.isValid) return [];
  const first = fromDate.startOf('year');
  // not sure why it's off, but it is, so we take off a month...
  const last = fromDate.endOf('year').minus({ month: 1 });
  const range = createRange({ first, last, period: 'month' });
  return range;
}

function getStartingYear({ fromDate, range }) {
  if (!fromDate?.isValid || !range) return;
  const year = fromDate.year;
  const newYear = parseInt((year - 1) / range, 10) * range + 1;
  return fromDate.set({ year: newYear }).startOf('year');
}

function getDisplayYearsRange({ fromDate, range = 15 }) {
  if (!fromDate?.isValid || !range) return [];
  const first = getStartingYear({ fromDate, range });
  const last = first.plus({ year: 14 });
  const newRange = createRange({ first, last, period: 'year' });
  return newRange;
}

export function getRange({ fromDate, period = 'day' }) {
  if (!fromDate) return;
  if (period === 'day') return getDisplayDaysRange(fromDate);
  if (period === 'month') return getDisplayMonthsRange(fromDate);
  if (period === 'year') return getDisplayYearsRange({ fromDate });
}

export function isInRange({ fromDate, range = [] }) {
  if (!fromDate) return;
  const [first] = range;
  const [last] = range.slice(-1);
  return +fromDate >= +first && +fromDate <= +last;
}

const dateSteps = [
  'day',
  'month',
  'year',
  'hour',
  'minute',
  'second',
  'millisecond',
];

export function mergeDates({ fromDate, activeDate, start = 'day' }) {
  if (!fromDate || !activeDate) return;
  const startIndex = dateSteps.findIndex((step) => step === start);
  const steps = dateSteps.slice(startIndex);
  const vals = {};
  steps.forEach((step) => {
    vals[step] = activeDate[step];
  });
  return fromDate.set(vals);
}
