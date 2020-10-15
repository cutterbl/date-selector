import React from 'react';

export default function LabelButton({
  buttonLabel: label,
  buttonARIALabel,
  onClick,
  className,
}) {
  return (
    <button
      aria-label={buttonARIALabel}
      className={className}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
