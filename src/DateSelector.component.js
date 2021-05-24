import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import { DateSelectorProvider } from './context/DateSelector.context';
import { Container } from './picker';

const DateSelector = ({
  defaultDate = DateTime.local().startOf('day'),
  value,
  minDate,
  maxDate,
  messages,
  components,
  onChange = () => {},
  onError = () => {},
  isDateDisabled = () => false,
} = {}) => {
  return (
    <DateSelectorProvider
      {...{
        defaultDate,
        value,
        minDate,
        maxDate,
        messages,
        components,
        onChange,
        onError,
        isDateDisabled,
      }}
    >
      <Container {...{ value }} />
    </DateSelectorProvider>
  );
};
DateSelector.propTypes = {
  defaultDate: PropTypes.instanceOf(DateTime),
  value: PropTypes.instanceOf(DateTime),
  minDate: PropTypes.instanceOf(DateTime),
  maxDate: PropTypes.instanceOf(DateTime),
  messages: PropTypes.object,
  components: PropTypes.object,
  onChange: PropTypes.func,
  onError: PropTypes.func,
  isDateDisabled: PropTypes.func,
};

export default DateSelector;
