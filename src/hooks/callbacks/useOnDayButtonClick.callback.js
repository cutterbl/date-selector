import { useCallback } from 'react';

import { isInRange } from '../../picker/utils/luxonUtils';

export default function useOnDayButtonClick({
  range,
  setShowCal,
  setActiveDate,
  onChange,
}) {
  return useCallback(
    (date) => {
      // don't hide it unless it changes
      if (!isInRange({ fromDate: date, range })) {
        setShowCal(false);
      }
      setActiveDate((prev) => {
        return +date !== +prev ? date : prev;
      });
      onChange(date);
    },
    [range, setShowCal, setActiveDate, onChange]
  );
}
