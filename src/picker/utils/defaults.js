const defaultMessages = {
  dayButtonARIALabel: 'Sets date to ',
  monthButtonARIALabel: 'Sets month to ',
  yearButtonARIALabel: 'Sets year to ',
  previousButtonARIALabel: 'Show the previous month',
  nextButtonARIALabel: 'Show the next month',
  dayHeaderARIALabel: 'Change the month',
  monthHeaderARIALabel: 'Change the year',
  yearHeaderARIALabel: 'Change the month',
};

export function mixMessages({ messages = {} }) {
  return {
    ...defaultMessages,
    ...messages,
  };
}
