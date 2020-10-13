import { useEffect } from 'react';

export default function ({ buttonRef, date, activeDate }) {
  useEffect(() => {
    const { current } = buttonRef ?? {};
    if (current && date?.year === activeDate?.year) {
      current.focus();
    }
  }, [buttonRef, date, activeDate]);
}
