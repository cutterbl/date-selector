import { useReducer, useCallback } from 'react';
import { DateTime, Duration } from 'luxon';
import { getRange } from '../picker/utils';

export default function useSelectorReducer({
  today = DateTime.local().startOf('day'),
  value,
}) {
  const reducer = useCallback(
    (state, action) => {
      const { type, date } = action;
      switch (type) {
        case 'NEXT':
          const nextDate = state.activeDate.plus(
            Duration.fromObject({ month: 1, conversionAccuracy: 'longterm' })
          );
          const nextRange = getRange({ fromDate: nextDate });
          return { ...state, activeDate: nextDate, range: nextRange };
        case 'PREVIOUS':
          const prevDate = state.activeDate.minus(
            Duration.fromObject({ month: 1, conversionAccuracy: 'longterm' })
          );
          const prevRange = getRange({ fromDate: prevDate });
          return { ...state, activeDate: prevDate, range: prevRange };
        case 'SET':
          const newDate = date.startOf('day');
          const newRange = getRange({ fromDate: newDate });
          return { ...state, activeDate: newDate, range: newRange };
        case 'RESET':
          const origRange = getRange({ fromDate: today });
          return { ...state, activeDate: today, range: origRange };
        default:
          throw new Error();
      }
    },
    [today]
  );

  return useReducer(reducer, {
    activeDate: value?.startOf('day') || today,
    range: getRange({ fromDate: value?.startOf('day') || today }),
  });
}
