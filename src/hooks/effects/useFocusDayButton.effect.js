import { useEffect } from 'react';

export default function ({ buttonRef, date, activeDate }) {
  useEffect(() => {
    const { current } = buttonRef ?? {};
    if (current && +date === +activeDate) {
      current.focus();
    }
  }, [buttonRef, date, activeDate]);
}
