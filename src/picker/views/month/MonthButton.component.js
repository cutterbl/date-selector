import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DateTime } from 'luxon';

import { useDateSelector } from '../../../context/DateSelector.context';
import useFocusMonthButton from '../../../hooks/effects/useFocusMonthButton.effect';
import styles from './MonthButton.module.scss';

export default function MonthButton({ date, handleOnClick }) {
  const { today, activeDate } = useDateSelector();
  const buttonRef = useRef();

  useFocusMonthButton({ buttonRef, date, activeDate });

  if (!date || !activeDate) return null;

  const onClick = () => handleOnClick(date);

  return (
    <div
      className={classnames(styles.monthWrapper, {
        [styles.activeDate]: +date?.month === +activeDate?.month,
        [styles.thisDay]: +date?.month === +today?.month,
      })}
    >
      <button ref={buttonRef} className={styles.monthButton} onClick={onClick}>
        {date.toFormat('MMM')}
      </button>
    </div>
  );
}
MonthButton.propTypes = {
  date: PropTypes.instanceOf(DateTime),
  handleOnClick: PropTypes.func,
};
