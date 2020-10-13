import { useCallback } from 'react';

const decision = {
  day: 'month',
  month: 'year',
  year: 'month',
};

export default function ({ setShowCal, setView }) {
  return useCallback(() => {
    setShowCal(false);
    setView((prev) => decision[prev]);
  }, [setShowCal, setView]);
}
