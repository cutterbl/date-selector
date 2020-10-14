import React, { Fragment } from 'react';

import { useDateSelector } from '../../../context/DateSelector.context';
import YearButtonWrapper from './YearButtonWrapper.component';
import useOnClick from '../../../hooks/callbacks/useOnYearButtonClick.callback';

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
        <YearButtonWrapper
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
