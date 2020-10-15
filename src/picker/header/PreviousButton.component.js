import React from 'react';

export default function PreviousButton({
  ariaButtonLabel,
  onClick,
  className,
}) {
  return (
    <button
      aria-label={ariaButtonLabel}
      className={className}
      onClick={onClick}
    >
      {'<'}
    </button>
  );
}
