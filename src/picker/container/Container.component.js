// eslint-disable-next-line no-unused-vars
import { jsx } from '@emotion/react';

import Header from '../header/Header.component';
import Views from '../views/Views.component';
import { useDateSelector } from '../../context/DateSelector.context';
import useUpdateRange from '../../hooks/effects/useUpdateRange.effect';
import { container } from '../styledefs.emotion';

export default function Container({ value }) {
  const {
    activeDate,
    view,
    setRange,
    setShowCal,
    onChange,
  } = useDateSelector();

  useUpdateRange({ activeDate, view, setRange, setShowCal, onChange });

  return (
    <div css={container}>
      <Header />
      <Views {...{ value }} />
    </div>
  );
}
