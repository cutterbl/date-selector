//import React, { Fragment } from 'react';
import { Fragment } from 'react';

import { useDateSelector } from '../../context/DateSelector.context';
import DayButtonWrapper from './DayButtonWrapper.component';

export default function DayView() {
  const { range, onChange } = useDateSelector();

  const handleOnClick = (date) => onChange(date);

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
