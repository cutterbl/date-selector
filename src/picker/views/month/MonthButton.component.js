import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import styles from './MonthButton.module.scss';

export default function MonthButton({
  buttonRef,
  ariaButtonLabel,
  date,
  onClick,
}) {
  return (
    <button
      ref={buttonRef}
      aria-label={ariaButtonLabel}
      className={styles.monthButton}
      onClick={onClick}
    >
      {date.toFormat('MMM')}
    </button>
  );
}
MonthButton.propTypes = {
  buttonRef: PropTypes.any,
  ariaButtonLabel: PropTypes.string,
  date: PropTypes.instanceOf(DateTime),
  onClick: PropTypes.func,
};
