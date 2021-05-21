import React from "react";

import {useDateSelector} from "../../context/DateSelector.context.jsx";
import DayView from "./day/DayView.component.jsx";
import MonthView from "./month/MonthView.component.jsx";
import YearView from "./year/YearView.component.jsx";

export default function Views({value}) {
	const {showCal, view} = useDateSelector();

	if (!showCal) {
		return null;
	}

	if (view === "day") {
		return <DayView {...{value}} />;
	}
	if (view === "month") {
		return <MonthView />;
	}
	if (view === "year") {
		return <YearView />;
	}
	return null;
}
