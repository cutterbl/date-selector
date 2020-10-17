/** @jsx jsx */
import { useRef } from 'react';
import { jsx } from '@emotion/core';

import { useDateSelector } from '../../../context/DateSelector.context';
import useFocusMonthButton from '../../../hooks/effects/useFocusMonthButton.effect';

import {
  wrapper,
  isSamePeriod,
  buildTodayMarker,
  baseButton,
  activeButton,
  viewButtons,
} from '../../styledefs.emotion';

export default function MonthButtonWrapper({ date, handleOnClick }) {
  const {
    view,
    today,
    activeDate,
    messages: { monthButtonARIALabel },
    components: { monthButton: MonthButton },
  } = useDateSelector();
  const buttonRef = useRef();

  useFocusMonthButton({ buttonRef, date, activeDate });

  if (!date || !activeDate) return null;

  const onClick = () => handleOnClick(date);

  const ariaLabel = `${monthButtonARIALabel}${date.toFormat('MMMM')}`;

  return (
    <div css={[wrapper, buildTodayMarker({ today, activeDate, date, view })]}>
      <MonthButton
        css={[
          baseButton,
          viewButtons[view],
          isSamePeriod({ day1: date, day2: activeDate, view }) && activeButton,
        ]}
        {...{
          buttonRef,
          ariaLabel,
          date,
          onClick,
        }}
      />
    </div>
  );
}
