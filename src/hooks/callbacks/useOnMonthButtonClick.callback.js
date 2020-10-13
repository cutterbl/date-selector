import { useCallback } from 'react';

export default function ({ activeDate, setShowCal, setActiveDate, setView }) {
  return useCallback(
    (date) => {
      const daysInMonth = date.daysInMonth;
      const set = {
        day: activeDate.day < daysInMonth ? activeDate.day : daysInMonth,
        month: date.month,
      };
      const newDate = date.set(set);
      if (+newDate !== +activeDate) {
        setShowCal(false);
      }
      setActiveDate((prev) => (+newDate !== +prev ? newDate : prev));
      setView('day');
    },
    [activeDate, setShowCal, setActiveDate, setView]
  );
}
