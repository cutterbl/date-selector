import React, { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

const DateSelectorContext = createContext();

export function DateSelectorProvider({
  defaultDate,
  value,
  minDate,
  maxDate,
  defaultView,
  onChange,
  isDateDisabled,
  ...props
}) {
  const [today] = useState(defaultDate || DateTime.local().startOf('day'));
  const [activeDate, setActiveDate] = useState(value || today);
  const [showCal, setShowCal] = useState(false);
  const [view, setView] = useState(defaultView);
  const [range, setRange] = useState();

  const values = useMemo(
    () => ({
      today,
      value,
      activeDate,
      setActiveDate,
      showCal,
      setShowCal,
      view,
      setView,
      range,
      setRange,
      minDate,
      maxDate,

      onChange,
      isDateDisabled,
    }),
    [
      today,
      value,
      activeDate,
      setActiveDate,
      showCal,
      setShowCal,
      view,
      setView,
      range,
      setRange,
      minDate,
      maxDate,

      onChange,
      isDateDisabled,
    ]
  );
  return <DateSelectorContext.Provider value={values} {...props} />;
}

DateSelectorProvider.propTypes = {
  defaultDate: PropTypes.instanceOf(DateTime),
  value: PropTypes.instanceOf(DateTime),
  minDate: PropTypes.instanceOf(DateTime),
  maxDate: PropTypes.instanceOf(DateTime),
  defaultView: PropTypes.oneOf(['day', 'month', 'year']),
  onChange: PropTypes.func,
  isDateDisabled: PropTypes.func,
};

export const useDateSelector = () => useContext(DateSelectorContext);
