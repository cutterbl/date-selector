/** Styles for base container */
export const container = {
  display: 'inline-block',
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid black',
  borderRadius: 5,
  padding: '0.3rem',
  width: '14rem',
  minHeight: '12rem',
};

/** Shared styles used by the Header and Views */
export const wrapper = {
  display: 'inline',
  position: 'relative',
};

export const baseButton = {
  borderColor: 'transparent',
  borderRadius: 3,
  backgroundColor: 'transparent',
  position: 'relative',
  '&:hover': {
    backgroundColor: '#ddd',
  },
};

const todayMarker = {
  content: '""',
  position: 'absolute',
  zIndex: 'auto',
  width: 0,
  height: 0,
  borderLeft: '0.5rem solid transparent',
  borderTop: '0.5rem solid transparent',
  borderBottom: '0.5rem solid blue',
  right: '0.25rem',
  clear: 'both',
};

const activeDateMarker = {
  borderBottomColor: 'white',
};

export function isSamePeriod({ day1, day2, view }) {
  if (view === 'day') {
    return +day1 === +day2;
  }
  if (view === 'month') {
    //console.log('current month ', day1?.month === day2?.month);
    return day1?.month === day2?.month;
  }
  if (view === 'year') {
    return day1?.year === day2?.year;
  }
  return;
}

export function buildTodayMarker({ today, activeDate, date, view }) {
  return {
    '&::after': {
      ...(isSamePeriod({ day1: date, day2: today, view }) && {
        ...todayMarker, // convert to *only* the ::after styles. default 'bottom' to Month/Year value
        ...(isSamePeriod({ day1: date, day2: activeDate, view }) &&
          activeDateMarker),
        bottom: view === 'day' ? '-0.2rem' : '-0.9rem',
      }), // convert currentDate to *only* ::after styles
    },
  };
}

/**
 * Styles used by the Header component and it's children
 */
export const header = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
};

export const headerButton = {
  ...baseButton,
  position: 'relative',
  height: '2rem',
};

export const navButton = {
  ...headerButton,
  width: '2rem',
};

export const labelButton = {
  ...headerButton,
  flexGrow: 1,
  '&:hover': {
    textDecoration: 'underline',
  },
};

/** Styles used by the DayButton */

export const activeButton = {
  backgroundColor: 'cornflowerblue',
  color: 'white',
  '&:hover': {
    backgroundColor: 'cornflowerblue',
  },
};

export const valueButton = {
  backgroundColor: 'blue',
};

export const viewButtons = {
  day: {
    width: '2rem',
    height: '2rem',
  },
  month: {
    width: '25%',
    height: '3.33333rem',
  },
  year: {
    width: '20%',
    height: '3.33333rem',
  },
};
