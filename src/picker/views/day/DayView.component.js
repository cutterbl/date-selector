//import React, { Fragment } from 'react';
import { Fragment } from 'react';

import { useDateSelector } from '../../../context/DateSelector.context';
import DayButtonWrapper from './DayButtonWrapper.component';
import useOnClick from '../../../hooks/callbacks/useOnDayButtonClick.callback';

export default function DayView({ value }) {
  const { setShowCal, range, setActiveDate, onChange } = useDateSelector();

  const handleOnClick = useOnClick({
    range,
    setShowCal,
    setActiveDate,
    onChange,
  });

  return (
    <Fragment>
      {range?.map((date) => (
        <DayButtonWrapper
          {...{
            value,
            date,
            handleOnClick,
          }}
          key={date.ordinal}
        />
      ))}
    </Fragment>
  );
}
