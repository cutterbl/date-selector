import React, {Fragment} from "react";

import {useDateSelector} from "../../../context/DateSelector.context.jsx";
import MonthButtonWrapper from "./MonthButtonWrapper.component.jsx";
import useOnClick from "../../../hooks/callbacks/useOnMonthButtonClick.callback";

export default function MonthView() {
	const {
		setShowCal,
		range,
		activeDate,
		setActiveDate,
		setView,
	} = useDateSelector();

	const handleOnClick = useOnClick({
		range,
		activeDate,
		setShowCal,
		setActiveDate,
		setView,
	});

	return <>
		{range?.map?.((date) =>
			<MonthButtonWrapper {...{
				date,
				handleOnClick,
			}}
			key={date.month} />
		)}
	</>;
}
