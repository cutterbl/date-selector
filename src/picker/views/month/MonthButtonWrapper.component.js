import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DateTime } from 'luxon';

import { useDateSelector } from '../../../context/DateSelector.context';
import useFocusMonthButton from '../../../hooks/effects/useFocusMonthButton.effect';
import styles from './MonthButton.module.scss';

export default function MonthButtonWrapper({ date, handleOnClick }) {
  const {
    today,
    activeDate,
    messages: { monthButtonARIALabel },
    components: { monthButton: MonthButton },
  } = useDateSelector();
  const buttonRef = useRef();

  useFocusMonthButton({ buttonRef, date, activeDate });

  if (!date || !activeDate) return null;

  const onClick = () => handleOnClick(date);

  const ariaButtonLabel = `${monthButtonARIALabel}${date.toFormat('MMMM')}`;

  return (
    <div
      className={classnames(styles.monthWrapper, {
        [styles.activeDate]: +date?.month === +activeDate?.month,
        [styles.thisDay]: +date?.month === +today?.month,
      })}
    >
      <MonthButton
        {...{
          buttonRef,
          ariaButtonLabel,
          date,
          onClick,
        }}
      />
    </div>
  );
}
MonthButtonWrapper.propTypes = {
  date: PropTypes.instanceOf(DateTime),
  handleOnClick: PropTypes.func,
};
