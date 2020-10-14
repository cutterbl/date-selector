import React from 'react';
import classnames from 'classnames';

import styles from './Header.module.scss';

export default function NextButton({ ariaButtonLabel, onClick }) {
  return (
    <button
      aria-label={ariaButtonLabel}
      className={classnames(styles.button, styles.navButton)}
      onClick={onClick}
    >
      {'>'}
    </button>
  );
}
