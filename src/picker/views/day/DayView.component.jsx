import React, {Fragment} from "react";

import {useDateSelector} from "../../../context/DateSelector.context.jsx";
import DayButtonWrapper from "./DayButtonWrapper.component.jsx";
import useOnClick from "../../../hooks/callbacks/useOnDayButtonClick.callback";

export default function DayView({value}) {
	const {setShowCal, range, setActiveDate, onChange} = useDateSelector();

	const handleOnClick = useOnClick({
		range,
		setShowCal,
		setActiveDate,
		onChange,
	});

	return <>
		{range?.map?.((date) =>
			<DayButtonWrapper {...{
				value,
				date,
				handleOnClick,
			}}
			key={date.ordinal} />
		)}
	</>;
}
