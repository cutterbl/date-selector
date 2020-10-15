import React from 'react';

import Header from '../header/Header.component';
import Views from '../views/Views.component';
import { useDateSelector } from '../../context/DateSelector.context';
import useUpdateRange from '../../hooks/effects/useUpdateRange.effect';
import styles from './Container.module.scss';

export default function Container() {
  const {
    activeDate,
    view,
    setRange,
    setShowCal,
    onChange,
  } = useDateSelector();

  useUpdateRange({ activeDate, view, setRange, setShowCal, onChange });

  return (
    <div className={styles.container}>
      <Header />
      <Views />
    </div>
  );
}
