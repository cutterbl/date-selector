import React from 'react';
import classnames from 'classnames';

import styles from './Label.module.scss';

export default function LabelButton({
  buttonLabel: label,
  buttonARIALabel,
  onClick,
}) {
  return (
    <button
      aria-label={buttonARIALabel}
      className={classnames(styles.button, styles.label)}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
