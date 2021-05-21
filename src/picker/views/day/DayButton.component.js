//import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

export default function DayButton({ buttonRef, date, ariaLabel, ...props }) {
  return (
    <button ref={buttonRef} aria-label={ariaLabel} {...props}>
      {date.toFormat('dd')}
    </button>
  );
}
DayButton.propTypes = {
  buttonRef: PropTypes.any,
  date: PropTypes.instanceOf(DateTime),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};
