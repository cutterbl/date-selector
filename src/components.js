import {
  LabelButton,
  PreviousButton,
  NextButton,
  DayButton,
  MonthButton,
  YearButton,
} from './picker';
const defaultComponents = {
  labelButton: LabelButton,
  previousButton: PreviousButton,
  nextButton: NextButton,
  dayButton: DayButton,
  monthButton: MonthButton,
  yearButton: YearButton,
};

export function mixComponents({ components = {} }) {
  return {
    ...defaultComponents,
    ...components,
  };
}
