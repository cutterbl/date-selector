import React from 'react';
import { Duration } from 'luxon';

import { useDateSelector } from '../../context/DateSelector.context';
import useNext from '../../hooks/callbacks/useNext.callback';
import usePrevious from '../../hooks/callbacks/usePrevious.callback';
import useOnLabelClick from '../../hooks/callbacks/useOnLabelClick.callback';
import styles from './Header.module.scss';

const conversions = {
  day: Duration.fromObject({ month: 1, conversionAccuracy: 'longterm' }),
  month: Duration.fromObject({ year: 1, conversionAccuracy: 'longterm' }),
  year: Duration.fromObject({ year: 15, conversionAccuracy: 'longterm' }),
};

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

export default function Header() {
  const {
    activeDate,
    view,
    setView,
    range,
    setActiveDate,
    setShowCal,
    messages,
    components: {
      labelButton: LabelButton,
      previousButton: PreviousButton,
      nextButton: NextButton,
    },
  } = useDateSelector();

  const { previousButtonARIALabel, nextButtonARIALabel } = messages;

  const label = getLabel({ activeDate, view, range });
  const labelButtonARIALabel = messages[`${view}HeaderARIALabel`];

  const onClick = useOnLabelClick({ setShowCal, setView });

  const next = useNext({ setActiveDate, view, conversions });
  const prev = usePrevious({ setActiveDate, view, conversions });

  return (
    <div className={styles.header}>
      <PreviousButton
        ariaButtonLabel={previousButtonARIALabel}
        onClick={prev}
      />
      <LabelButton
        buttonLabel={label}
        buttonARIALabel={labelButtonARIALabel}
        onClick={onClick}
      />
      <NextButton ariaButtonLabel={nextButtonARIALabel} onClick={next} />
    </div>
  );
}
