import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DateTime } from 'luxon';

import { useDateSelector } from '../../../context/DateSelector.context';
import useFocusYearButton from '../../../hooks/effects/useFocusYearButton.effect';
import styles from './YearButton.module.scss';

export default function YearButtonWrapper({ date, handleOnClick }) {
  const {
    today,
    activeDate,
    messages: { yearButtonARIALabel },
    components: { yearButton: YearButton },
  } = useDateSelector();
  const buttonRef = useRef();

  useFocusYearButton({ buttonRef, date, activeDate });

  if (!date || !activeDate) return null;

  const onClick = () => handleOnClick(date);

  const ariaButtonLabel = `${yearButtonARIALabel}${date.toFormat('yyyy')}`;

  return (
    <div
      className={classnames(styles.yearWrapper, {
        [styles.activeDate]: +date?.year === +activeDate?.year,
        [styles.thisDay]: +date?.year === +today?.year,
      })}
    >
      <YearButton
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
YearButtonWrapper.propTypes = {
  date: PropTypes.instanceOf(DateTime),
  handleOnClick: PropTypes.func,
};
