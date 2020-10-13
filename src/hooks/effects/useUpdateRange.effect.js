import { useEffect } from 'react';
import { getRange } from '../../picker/utils';

export default function ({ activeDate, view, setRange, setShowCal, onChange }) {
  useEffect(() => {
    if (activeDate && view) {
      const newRange = getRange({ fromDate: activeDate, period: view });
      setRange(newRange);
      setShowCal(() => true);
    }
  }, [activeDate, setShowCal, view, setRange, onChange]);
}
