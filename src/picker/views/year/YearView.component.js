import React, { Fragment } from 'react';

import { useDateSelector } from '../../../context/DateSelector.context';
import useOnClick from '../../../hooks/callbacks/useOnYearButtonClick.callback';
import YearButton from './YearButton.component';

export default function YearView() {
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
        <YearButton
          {...{
            date,
            handleOnClick,
          }}
          key={date.year}
        />
      ))}
    </Fragment>
  );
}
