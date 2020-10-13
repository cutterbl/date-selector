import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DateTime } from 'luxon';

import { useDateSelector } from '../../../context/DateSelector.context';
import useFocusDayButton from '../../../hooks/effects/useFocusDayButton.effect';
import styles from './DayButton.module.scss';

export default function DayButton({ date, handleOnClick }) {
  const { today, value, activeDate } = useDateSelector();
  const buttonRef = useRef();

  useFocusDayButton({ buttonRef, date, activeDate });

  if (!date || !activeDate) return null;

  const onClick = () => handleOnClick(date);

  return (
    <div
      className={classnames(styles.dayWrapper, {
        [styles.activeDate]: +date === +activeDate,
        [styles.thisDay]: +date === +today,
        [styles.valueDate]: +date?.ordinal === +value?.ordinal,
      })}
    >
      <button
        ref={buttonRef}
        className={styles.dayButton}
        disabled={activeDate.month !== date.month}
        onClick={onClick}
      >
        {date.toFormat('dd')}
      </button>
    </div>
  );
}
DayButton.propTypes = {
  date: PropTypes.instanceOf(DateTime),
  handleOnClick: PropTypes.func,
};
