import React, {Fragment} from "react";

import {useDateSelector} from "../../../context/DateSelector.context.jsx";
import YearButtonWrapper from "./YearButtonWrapper.component.jsx";
import useOnClick from "../../../hooks/callbacks/useOnYearButtonClick.callback";

export default function YearView() {
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
			<YearButtonWrapper {...{
				date,
				handleOnClick,
			}}
			key={date.year} />
		)}
	</>;
}
