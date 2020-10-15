import { useCallback } from 'react';

import { isInRange } from '../../picker/utils/luxonUtils';

export default function ({
  range,
  activeDate,
  setShowCal,
  setActiveDate,
  setView,
}) {
  return useCallback(
    (date) => {
      const daysInMonth = date.daysInMonth;
      const set = {
        day: activeDate.day < daysInMonth ? activeDate.day : daysInMonth,
        month: date.month,
      };
      const newDate = date.set(set);
      if (!isInRange({ fromDate: newDate, range })) {
        setShowCal(false);
      }
      setActiveDate((prev) => (+newDate !== +prev ? newDate : prev));
      setView('day');
    },
    [range, activeDate, setShowCal, setActiveDate, setView]
  );
}
