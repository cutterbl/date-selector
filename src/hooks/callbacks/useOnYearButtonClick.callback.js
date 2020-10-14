import { useCallback } from 'react';

export default function ({ activeDate, setShowCal, setActiveDate, setView }) {
  return useCallback(
    (date) => {
      const daysInMonth = date.daysInMonth;
      const set = {
        day: activeDate.day < daysInMonth ? activeDate.day : daysInMonth,
        year: date.year,
      };
      const newDate = activeDate.set(set);
      setShowCal(false);
      setActiveDate((prev) => (+newDate !== +prev ? newDate : prev));
      setView('month');
    },
    [activeDate, setShowCal, setActiveDate, setView]
  );
}
