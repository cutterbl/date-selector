import { useEffect } from 'react';

export default function useFocusMonthButton({ buttonRef, date, activeDate }) {
  useEffect(() => {
    const { current } = buttonRef ?? {};
    if (current && date?.month === activeDate?.month) {
      current.focus();
    }
  }, [buttonRef, date, activeDate]);
}
