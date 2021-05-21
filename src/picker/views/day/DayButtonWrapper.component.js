// eslint-disable-next-line no-unused-vars
import { jsx } from '@emotion/react';
import { useRef } from 'react';

import { useDateSelector } from '../../../context/DateSelector.context';
import useFocusDayButton from '../../../hooks/effects/useFocusDayButton.effect';

import {
  wrapper,
  isSamePeriod,
  buildTodayMarker,
  baseButton,
  activeButton,
  valueButton,
  viewButtons,
} from '../../styledefs.emotion';

export default function DayButtonWrapper({ value, date, handleOnClick }) {
  const {
    today,
    view,
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

  const ariaLabel = `${dayButtonARIALabel}${date.toLocaleString()}`;

  const disabled = !!(
    activeDate.month !== date.month ||
    +date <= +minDate ||
    +date >= +maxDate ||
    isDateDisabled(date)
  );

  return (
    <div css={[wrapper, buildTodayMarker({ today, activeDate, date, view })]}>
      <DayButton
        css={[
          baseButton,
          viewButtons[view],
          isSamePeriod({ day1: date, day2: activeDate, view }) && activeButton,
          +date?.ordinal === +value?.ordinal && valueButton,
        ]}
        {...{
          buttonRef,
          date,
          disabled,
          onClick,
          ariaLabel,
        }}
      />
    </div>
  );
}
