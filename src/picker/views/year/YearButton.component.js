import React from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import styles from './YearButton.module.scss';

export default function YearButton({
  buttonRef,
  ariaButtonLabel,
  date,
  onClick,
}) {
  return (
    <button
      ref={buttonRef}
      aria-label={ariaButtonLabel}
      className={styles.yearButton}
      onClick={onClick}
    >
      {date.toFormat('yyyy')}
    </button>
  );
}
YearButton.propTypes = {
  buttonRef: PropTypes.any,
  ariaButtonLabel: PropTypes.string,
  date: PropTypes.instanceOf(DateTime),
  onClick: PropTypes.func,
};
