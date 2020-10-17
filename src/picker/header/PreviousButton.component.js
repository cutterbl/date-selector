import React from 'react';

export default function PreviousButton({ ariaLabel, ...props }) {
  return (
    <button aria-label={ariaLabel} {...props}>
      {'<'}
    </button>
  );
}
