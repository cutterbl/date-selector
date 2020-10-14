import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import styles from './DayButton.module.scss';

export default function DayButton({
  buttonRef,
  date,
  disabled,
  onClick,
  ariaButtonLabel,
}) {
  return (
    <button
      ref={buttonRef}
      aria-label={ariaButtonLabel}
      className={styles.dayButton}
      disabled={disabled}
      onClick={onClick}
    >
      {date.toFormat('dd')}
    </button>
  );
}
DayButton.propTypes = {
  buttonRef: PropTypes.any,
  date: PropTypes.instanceOf(DateTime),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  ariaButtonLabel: PropTypes.string,
};
