import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DateTime } from 'luxon';

import { useDateSelector } from '../../../context/DateSelector.context';
import useFocusDayButton from '../../../hooks/effects/useFocusDayButton.effect';
import styles from './DayButton.module.scss';

export default function DayButtonWrapper({ date, handleOnClick }) {
  const {
    today,
    value,
    activeDate,
    minDate,
    maxDate,
    isDateDisabled,
    messages: { dayButtonARIALabel },
    components: { dayButton: DayButton },
  } = useDateSelector();
  const buttonRef = useRef();

  useFocusDayButton({ buttonRef, date, activeDate });

  if (!date || !activeDate) return null;

  const onClick = () => handleOnClick(date);

  const ariaButtonLabel = `${dayButtonARIALabel}${date.toLocaleString()}`;

  const disabled = !!(
    activeDate.month !== date.month ||
    +date <= +minDate ||
    +date >= +maxDate ||
    isDateDisabled(date)
  );
  console.log(`activeDate, ${date.toLocaleString()}, ${+date}, ${+activeDate}`);
  console.log(`thisDay, ${date.toLocaleString()}, ${+date}, ${+today}`);
  return (
    <div
      className={classnames(styles.dayWrapper, {
        [styles.activeDate]: +date === +activeDate,
        [styles.thisDay]: +date === +today,
        [styles.valueDate]: +date?.ordinal === +value?.ordinal,
      })}
    >
      <DayButton
        {...{
          buttonRef,
          date,
          disabled,
          onClick,
          ariaButtonLabel,
        }}
      />
    </div>
  );
}
DayButtonWrapper.propTypes = {
  date: PropTypes.instanceOf(DateTime),
  handleOnClick: PropTypes.func,
};
