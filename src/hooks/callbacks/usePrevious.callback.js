import { useCallback } from 'react';

export default function ({ setActiveDate, view, conversions }) {
  return useCallback(
    () => setActiveDate((prev) => prev.minus(conversions[view])),
    [setActiveDate, view, conversions]
  );
}
