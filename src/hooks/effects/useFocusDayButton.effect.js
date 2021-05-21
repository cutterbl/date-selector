import { useEffect } from 'react';

export default function useFocusDayButton({ buttonRef, date, activeDate }) {
  useEffect(() => {
    const { current } = buttonRef ?? {};
    if (current && +date === +activeDate) {
      current.focus();
    }
  }, [buttonRef, date, activeDate]);
}
