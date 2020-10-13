import React from 'react';
import classnames from 'classnames';

import { useDateSelector } from '../../context/DateSelector.context';
import useOnLabelClick from '../../hooks/callbacks/useOnLabelClick.callback';
import styles from './Label.module.scss';

const getLabel = function ({ activeDate, view, range }) {
  if (!activeDate?.isValid || !view) return '';
  if (view === 'day') return activeDate?.toFormat('MMMM yyyy');
  if (view === 'month') return activeDate?.toFormat('yyyy');
  if (view === 'year') {
    const len = range?.length;
    if (!len) return '';
    const first = range[0];
    const last = range[len - 1];
    return `${first.toFormat('yyyy')} - ${last.toFormat('yyyy')}`;
  }
};

export default function Label() {
  const { activeDate, view, setView, setShowCal, range } = useDateSelector();

  const label = getLabel({ activeDate, view, range });

  const onClick = useOnLabelClick({ setShowCal, setView });

  return (
    <button
      className={classnames(styles.button, styles.label)}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
