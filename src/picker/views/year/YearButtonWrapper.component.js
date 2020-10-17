/** @jsx jsx */
import { useRef } from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import { useDateSelector } from '../../../context/DateSelector.context';
import useFocusYearButton from '../../../hooks/effects/useFocusYearButton.effect';

import {
  wrapper,
  isSamePeriod,
  buildTodayMarker,
  baseButton,
  activeButton,
  viewButtons,
} from '../../styledefs.emotion';

export default function YearButtonWrapper({ date, handleOnClick }) {
  const {
    view,
    today,
    activeDate,
    messages: { yearButtonARIALabel },
    components: { yearButton: YearButton },
  } = useDateSelector();
  const buttonRef = useRef();

  useFocusYearButton({ buttonRef, date, activeDate });

  if (!date || !activeDate) return null;

  const onClick = () => handleOnClick(date);

  const ariaLabel = `${yearButtonARIALabel}${date.toFormat('yyyy')}`;

  return (
    <div css={[wrapper, buildTodayMarker({ today, activeDate, date, view })]}>
      <YearButton
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
YearButtonWrapper.propTypes = {
  date: PropTypes.instanceOf(DateTime),
  handleOnClick: PropTypes.func,
};
