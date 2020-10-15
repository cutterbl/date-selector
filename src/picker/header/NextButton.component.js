import React from 'react';

export default function NextButton({ ariaButtonLabel, onClick, className }) {
  return (
    <button
      aria-label={ariaButtonLabel}
      className={className}
      onClick={onClick}
    >
      {'>'}
    </button>
  );
}
