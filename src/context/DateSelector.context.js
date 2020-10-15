import React, { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import { mixMessages } from '../picker/utils';
import { mixComponents } from '../components';

const DateSelectorContext = createContext();

export function DateSelectorProvider({
  defaultDate,
  value,
  minDate,
  maxDate,
  defaultView,
  messages,
  components,
  onChange,
  isDateDisabled,
  ...props
}) {
  const [today] = useState(
    defaultDate?.startOf('day') || DateTime.local().startOf('day')
  );
  const [activeDate, setActiveDate] = useState(value?.startOf('day') || today);
  const [showCal, setShowCal] = useState(false);
  const [view, setView] = useState(defaultView);
  const [range, setRange] = useState();

  const values = useMemo(
    () => ({
      today,
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

      messages: mixMessages({ messages }),
      components: mixComponents({ components }),
      onChange,
      isDateDisabled,
    }),
    [
      today,
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

      messages,
      components,
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
  messages: PropTypes.object,
  onChange: PropTypes.func,
  isDateDisabled: PropTypes.func,
};

export const useDateSelector = () => useContext(DateSelectorContext);
