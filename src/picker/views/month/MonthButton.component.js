//import React from 'react';

export default function MonthButton({ buttonRef, ariaLabel, date, ...props }) {
  return (
    <button ref={buttonRef} aria-label={ariaLabel} {...props}>
      {date.toFormat('MMM')}
    </button>
  );
}
