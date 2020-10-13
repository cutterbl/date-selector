import React from 'react';

import { useDateSelector } from '../../context/DateSelector.context';
import DayView from './day/DayView.component';
import MonthView from './month/MonthView.component';
import YearView from './year/YearView.component';

export default function Views() {
  const { showCal, view } = useDateSelector();

  if (!showCal) return null;

  if (view === 'day') {
    return <DayView />;
  }
  if (view === 'month') {
    return <MonthView />;
  }
  if (view === 'year') {
    return <YearView />;
  }
  return null;
}
