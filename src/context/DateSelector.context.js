import {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { DateTime, Info } from 'luxon';

import useSelectorReducer from './useSelectorReducer.hook';
import { mixMessages } from '../picker/utils';
import { mixComponents } from '../components';

const DateSelectorContext = createContext();

export function DateSelectorProvider({
  defaultDate,
  value,
  minDate,
  maxDate,
  messages,
  components,
  onChange,
  onError,
  isDateDisabled,
  ...props
}) {
  const [today] = useState(
    defaultDate?.startOf('day') || DateTime.local().startOf('day')
  );
  const [state, dispatch] = useSelectorReducer({ today, value });

  const onNext = useCallback(() => dispatch({ type: 'NEXT' }), [dispatch]);
  const onPrevious = useCallback(
    () => dispatch({ type: 'PREVIOUS' }),
    [dispatch]
  );
  const reset = useCallback(() => dispatch({ type: 'RESET' }), [dispatch]);
  const setActiveDate = useCallback(
    (date) => dispatch({ type: 'SET', date }),
    [dispatch]
  );
  const onMonthChange = useCallback(
    ({ target: { value: month } }) => {
      const newDate = state.activeDate.set({ month });
      setActiveDate(newDate);
    },
    [state.activeDate, setActiveDate]
  );
  const onYearChange = useCallback(
    ({ target: { value: year } }) => {
      const newDate = state.activeDate.set({ year });
      setActiveDate(newDate);
    },
    [state.activeDate, setActiveDate]
  );

  useEffect(() => {
    if (!value) {
      reset();
    } else {
      const valToSet = value.startOf('day');
      if (minDate && +valToSet < +minDate) {
        onError(messages.errors.minDate);
      } else if (maxDate && +valToSet > +maxDate) {
        onError(messages.errors.maxDate);
      } else if (isDateDisabled(valToSet)) {
        onError(messages.errors.disabledDate);
      } else {
        setActiveDate(valToSet);
      }
    }
  }, [
    value,
    minDate,
    maxDate,
    messages,
    isDateDisabled,
    onError,
    reset,
    setActiveDate,
  ]);

  const values = useMemo(() => {
    return {
      today,
      minDate,
      maxDate,

      activeDate: state.activeDate,
      range: state.range,
      months: Info.months('long', { locale: state.activeDate.locale }).map(
        (it, ind) => ({
          value: ind + 1,
          label: it,
        })
      ),

      onNext,
      onPrevious,
      onMonthChange,
      onYearChange,
      reset,
      setActiveDate,

      messages: mixMessages({ messages }),
      components: mixComponents({ components }),
      onChange,
      isDateDisabled,
    };
  }, [
    today,
    minDate,
    maxDate,

    state.activeDate,
    state.range,

    onNext,
    onPrevious,
    onMonthChange,
    onYearChange,
    reset,
    setActiveDate,

    messages,
    components,
    onChange,
    isDateDisabled,
  ]);
  return <DateSelectorContext.Provider value={values} {...props} />;
}

DateSelectorProvider.propTypes = {
  defaultDate: PropTypes.instanceOf(DateTime),
  value: PropTypes.instanceOf(DateTime),
  minDate: PropTypes.instanceOf(DateTime),
  maxDate: PropTypes.instanceOf(DateTime),
  messages: PropTypes.object,
  onError: PropTypes.func,
  onChange: PropTypes.func,
  isDateDisabled: PropTypes.func,
};

export const useDateSelector = () => useContext(DateSelectorContext);
