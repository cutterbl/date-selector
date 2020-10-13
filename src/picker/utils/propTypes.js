import PropTypes from 'prop-types';

export const dateProps = {
  defaultView: PropTypes.oneOf(['day', 'month', 'year']),
  minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  isDateDisabled: PropTypes.func,
};

export const datePickerProps = {
  pickerFormats: PropTypes.shape({
    day: PropTypes.oneOf(['d', 'dd', 'ooo']),
    dayHeader: PropTypes.string,
    dayTitle: PropTypes.string,
    month: PropTypes.oneOf(['M', 'MM', 'MMM', 'MMMM']),
    monthTitle: PropTypes.string,
    year: PropTypes.oneOf(['yy', 'yyyy']),
  }),
};
