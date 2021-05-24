// eslint-disable-next-line no-unused-vars
import { jsx } from '@emotion/react';

import Header from '../header/Header.component';
import DayView from '../views/DayView.component';
import { container } from '../styledefs.emotion';

export default function Container({ value }) {
  return (
    <div css={container}>
      <Header />
      <DayView {...{ value }} />
    </div>
  );
}
