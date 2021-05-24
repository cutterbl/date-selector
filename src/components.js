import PreviousButton from './picker/header/PreviousButton.component';
import NextButton from './picker/header/NextButton.component';
import MonthSelector from './picker/header/MonthSelector.component';
import YearSelector from './picker/header/YearSelector.component';
import DayButton from './picker/views/DayButton.component';

const defaultComponents = {
  previousButton: PreviousButton,
  nextButton: NextButton,
  dayButton: DayButton,
  yearSelector: YearSelector,
  monthSelector: MonthSelector,
};

export function mixComponents({ components = {} }) {
  return {
    ...defaultComponents,
    ...components,
  };
}
