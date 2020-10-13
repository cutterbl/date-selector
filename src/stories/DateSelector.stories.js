import React, { Fragment, useState, useCallback } from 'react';

import DateSelector from '../DateSelector.component';
import mdx from './DateSelector.mdx';

export default {
  title: 'DateSelector',
  component: DateSelector,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Basic = () => {
  const [value, setValue] = useState();
  const onChange = useCallback((newValue) => setValue(newValue), [setValue]);
  return (
    <Fragment>
      <DateSelector {...{ value, onChange }} />
      {value && <div>Selected Value: {value.toFormat('MM/dd/yyyy')}</div>}
    </Fragment>
  );
};
