import { useCallback } from 'react';

export default function useNext({ setActiveDate, view, conversions }) {
  return useCallback(
    () => setActiveDate((prev) => prev.plus(conversions[view])),
    [setActiveDate, view, conversions]
  );
}
