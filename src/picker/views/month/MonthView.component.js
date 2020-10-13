import React, { Fragment } from 'react';

import MonthButton from './MonthButton.component';
import { useDateSelector } from '../../../context/DateSelector.context';
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
        <MonthButton
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
