import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import { DateSelectorProvider } from './context/DateSelector.context';
import { Container } from './picker';

const DateSelector = ({
  defaultDate = DateTime.local().startOf('day'),
  value,
  minDate,
  maxDate,
  defaultView = 'day',
  onChange = () => {},
  isDateDisabled = () => false,
} = {}) => {
  return (
    <DateSelectorProvider
      {...{
        defaultDate,
        value,
        minDate,
        maxDate,
        defaultView,
        onChange,
        isDateDisabled,
      }}
    >
      <Container />
    </DateSelectorProvider>
  );
};
DateSelector.propTypes = {
  defaultDate: PropTypes.instanceOf(DateTime),
  value: PropTypes.instanceOf(DateTime),
  minDate: PropTypes.instanceOf(DateTime),
  maxDate: PropTypes.instanceOf(DateTime),
  defaultView: PropTypes.oneOf(['day', 'month', 'year']),
  onChange: PropTypes.func,
  isDateDisabled: PropTypes.func,
};

export default DateSelector;
