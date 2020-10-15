import LabelButton from './picker/header/LabelButton.component';
import PreviousButton from './picker/header/PreviousButton.component';
import NextButton from './picker/header/NextButton.component';
import DayButton from './picker/views/day/DayButton.component';
import MonthButton from './picker/views/month/MonthButton.component';
import YearButton from './picker/views/year/YearButton.component';
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
