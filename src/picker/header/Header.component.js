import React from 'react';
import classnames from 'classnames';
import { Duration } from 'luxon';

import Label from './Label.component';
import { useDateSelector } from '../../context/DateSelector.context';
import useNext from '../../hooks/callbacks/useNext.callback';
import usePrevious from '../../hooks/callbacks/usePrevious.callback';
import styles from './Header.module.scss';

const conversions = {
  day: Duration.fromObject({ month: 1, conversionAccuracy: 'longterm' }),
  month: Duration.fromObject({ year: 1, conversionAccuracy: 'longterm' }),
  year: Duration.fromObject({ year: 15, conversionAccuracy: 'longterm' }),
};

export default function Header() {
  const { setActiveDate, view } = useDateSelector();

  const next = useNext({ setActiveDate, view, conversions });
  const prev = usePrevious({ setActiveDate, view, conversions });

  return (
    <div className={styles.header}>
      <button
        className={classnames(styles.button, styles.navButton)}
        onClick={prev}
      >
        {'<'}
      </button>
      <Label />
      <button
        className={classnames(styles.button, styles.navButton)}
        onClick={next}
      >
        {'>'}
      </button>
    </div>
  );
}
