import React, { Fragment } from 'react';

import { useDateSelector } from '../../../context/DateSelector.context';
import DayButtonWrapper from './DayButtonWrapper.component';
import useOnClick from '../../../hooks/callbacks/useOnDayButtonClick.callback';

export default function DayView() {
  const {
    setShowCal,
    range,
    activeDate,
    setActiveDate,
    onChange,
  } = useDateSelector();

  const handleOnClick = useOnClick({
    setShowCal,
    activeDate,
    setActiveDate,
    onChange,
  });

  return (
    <Fragment>
      {range?.map((date) => (
        <DayButtonWrapper
          {...{
            date,
            handleOnClick,
          }}
          key={date.ordinal}
        />
      ))}
    </Fragment>
  );
}
