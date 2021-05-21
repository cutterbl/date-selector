import LabelButton from "./picker/header/LabelButton.component.jsx";
import PreviousButton from "./picker/header/PreviousButton.component.jsx";
import NextButton from "./picker/header/NextButton.component.jsx";
import DayButton from "./picker/views/day/DayButton.component.jsx";
import MonthButton from "./picker/views/month/MonthButton.component.jsx";
import YearButton from "./picker/views/year/YearButton.component.jsx";
const defaultComponents = {
	labelButton: LabelButton,
	previousButton: PreviousButton,
	nextButton: NextButton,
	dayButton: DayButton,
	monthButton: MonthButton,
	yearButton: YearButton,
};

export function mixComponents({components = {}}) {
	return {
		...defaultComponents,
		...components,
	};
}
