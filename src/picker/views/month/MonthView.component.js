import React, { Fragment } from 'react';

import { useDateSelector } from '../../../context/DateSelector.context';
import MonthButtonWrapper from './MonthButtonWrapper.component';
import useOnClick from '../../../hooks/callbacks/useOnMonthButtonClick.callback';

export default function MonthView() {
  const {
    setShowCal,
    range,
    activeDate,
    setActiveDate,
    setView,
  } = useDateSelector();

  const handleOnClick = useOnClick({
    activeDate,
    setShowCal,
    setActiveDate,
    setView,
  });

  return (
    <Fragment>
      {range?.map((date) => (
        <MonthButtonWrapper
          {...{
            date,
            handleOnClick,
          }}
          key={date.month}
        />
      ))}
    </Fragment>
  );
}
