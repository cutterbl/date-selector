// eslint-disable-next-line no-unused-vars
import { jsx } from '@emotion/react';

import { useDateSelector } from '../../context/DateSelector.context';

import {
  header,
  navButton,
  headerFields,
  headerSelect,
  headerNumberField,
} from '../styledefs.emotion';

export default function Header() {
  const {
    activeDate,
    minDate,
    maxDate,
    months,
    onNext,
    onPrevious,
    onMonthChange,
    onYearChange,
    messages,
    components: {
      monthSelector: MonthSelector,
      yearSelector: YearSelector,
      previousButton: PreviousButton,
      nextButton: NextButton,
    },
  } = useDateSelector();

  const {
    previousButtonARIALabel,
    nextButtonARIALabel,
    monthHeaderARIALabel,
    yearHeaderARIALabel,
  } = messages;

  return (
    <div css={header}>
      <PreviousButton
        css={navButton}
        aria-label={previousButtonARIALabel}
        onClick={onPrevious}
      />
      <MonthSelector
        css={{ ...headerFields, ...headerSelect }}
        activeDate={activeDate}
        months={months}
        aria-label={monthHeaderARIALabel}
        onChange={onMonthChange}
      />
      <YearSelector
        css={{ ...headerFields, ...headerNumberField }}
        activeDate={activeDate}
        aria-label={yearHeaderARIALabel}
        onChange={onYearChange}
        minDate={minDate}
        maxDate={maxDate}
      />
      <NextButton
        css={navButton}
        aria-label={nextButtonARIALabel}
        onClick={onNext}
      />
    </div>
  );
}
