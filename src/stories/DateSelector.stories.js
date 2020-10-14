import React, { Fragment, useState, useCallback } from 'react';
import { DateTime } from 'luxon';

import DateSelector from '../DateSelector.component';
import mdx from './DateSelector.mdx';

export default {
  title: 'Basics',
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
      <div>
        Selected Value: {value && value.toLocaleString(DateTime.DATE_SHORT)}
      </div>
    </Fragment>
  );
};
Basic.storyName = 'The Control';

export const DefaultDate = () => {
  const [value, setValue] = useState();
  const onChange = useCallback((newValue) => setValue(newValue), [setValue]);
  const defaultDate = DateTime.fromISO(new Date().toISOString(), {
    locale: 'fr',
    zone: 'Europe/Paris',
  });
  return (
    <Fragment>
      <DateSelector {...{ value, onChange, defaultDate }} />
      <div>
        Selected Value: {value && value.toLocaleString(DateTime.DATE_HUGE)}
      </div>
      <div>Timezone: {value && value.zoneName}</div>
    </Fragment>
  );
};
DefaultDate.storyName = 'defaultDate';

export const IsDateDisabled = () => {
  const [value, setValue] = useState();
  const onChange = useCallback((newValue) => setValue(newValue), [setValue]);
  // makes every odd day disabled
  const isDateDisabled = useCallback((date) => date.day % 2, []);
  return (
    <Fragment>
      <div>Function given disables every 'odd' day</div>
      <DateSelector {...{ value, onChange, isDateDisabled }} />
      <div>
        Selected Value: {value && value.toLocaleString(DateTime.DATE_SHORT)}
      </div>
    </Fragment>
  );
};
IsDateDisabled.storyName = 'isDateDisabled';

export const MinDate = () => {
  const [value, setValue] = useState();
  const onChange = useCallback((newValue) => setValue(newValue), [setValue]);
  return (
    <Fragment>
      <DateSelector {...{ value, onChange }} /> <DateSelector minDate={value} />
      <div>
        Selected A Value On The Left:{' '}
        {value && value.toLocaleString(DateTime.DATE_SHORT)}
      </div>
    </Fragment>
  );
};
MinDate.storyName = 'minDate';

export const MaxDate = () => {
  const [value, setValue] = useState();
  const onChange = useCallback((newValue) => setValue(newValue), [setValue]);
  return (
    <Fragment>
      <DateSelector maxDate={value} /> <DateSelector {...{ value, onChange }} />
      <div>
        Selected A Value On The Right:{' '}
        {value && value.toLocaleString(DateTime.DATE_SHORT)}
      </div>
    </Fragment>
  );
};
MaxDate.storyName = 'maxDate';
