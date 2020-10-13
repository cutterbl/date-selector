import React, { Fragment } from 'react';

import { useDateSelector } from '../../../context/DateSelector.context';
import useOnClick from '../../../hooks/callbacks/useOnDayButtonClick.callback';
import DayButton from './DayButton.component';

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
        <DayButton
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
