const defaultMessages = {
  dayButtonARIALabel: 'Sets date to ',
  previousButtonARIALabel: 'Show the previous month',
  nextButtonARIALabel: 'Show the next month',
  yearHeaderARIALabel: 'Change the year',
  monthHeaderARIALabel: 'Change the month',
  errors: {
    minDate: 'You have tried to set a date before your minimum date',
    maxDate: 'You have tried to set a date after you maximum date',
    disabledDate: 'You have tried to set the date to a disabled date',
  },
};

export function mixMessages({ messages = {} }) {
  return {
    ...defaultMessages,
    ...messages,
  };
}
