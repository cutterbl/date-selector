import { useCallback } from 'react';

import { mergeDates } from '../../picker/utils';

export default function ({ setShowCal, activeDate, setActiveDate, onChange }) {
  return useCallback(
    (date) => {
      // don't hide it unless it changes
      if (+date !== +activeDate) {
        setShowCal(false);
      }
      const newDate = mergeDates({ fromDate: date, activeDate, start: 'hour' });
      setActiveDate((prev) => {
        return +date !== +prev ? date : prev;
      });
      onChange(newDate);
    },
    [setShowCal, activeDate, setActiveDate, onChange]
  );
}
