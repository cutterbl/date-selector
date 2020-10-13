function createRange({ first, last, period = 'day' }) {
  if (!first || !last) return [];
  const range = [first];
  while (+range[range.length - 1] < +last) {
    const day = range[range.length - 1].plus({ [period]: 1 });
    range.push(day);
  }
  return range;
}

function getFirstDayOfWeek(fromDate) {
  // Luxon uses Monday as first day, so we adjust
  if (!fromDate?.isValid) return;
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
  const lastDayOfWeek = fromDate.endOf('week');
  return lastDayOfWeek.minus({ day: 2 });
}

function getLastDisplayDay({ fromDate, period = 'month' }) {
  if (!fromDate?.isValid) return;
  const lastDayOfMonth = fromDate.endOf(period);
  return getLastDayOfWeek(lastDayOfMonth);
}

function getDisplayDaysRange(fromDate) {
  if (!fromDate?.isValid) return [];
  const first = getFirstDisplayDay({ fromDate });
  const last = getLastDisplayDay({ fromDate });
  return createRange({ first, last });
}

function getDisplayMonthsRange(fromDate) {
  if (!fromDate?.isValid) return [];
  const first = fromDate.startOf('year');
  const last = fromDate.endOf('year');
  const range = createRange({ first, last, period: 'month' });
  // not sure why it's off, but it is, so...
  return range.slice(0, range.length - 1);
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
