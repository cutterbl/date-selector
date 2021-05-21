/** @jsx jsx*/
import {jsx} from "@emotion/core";

import Header from "../header/Header.component.jsx";
import Views from "../views/Views.component.jsx";
import {useDateSelector} from "../../context/DateSelector.context.jsx";
import useUpdateRange from "../../hooks/effects/useUpdateRange.effect";
import {container} from "../styledefs.emotion";

export default function Container({value}) {
	const {
		activeDate,
		view,
		setRange,
		setShowCal,
		onChange,
	} = useDateSelector();

	useUpdateRange({activeDate, view, setRange, setShowCal, onChange});

	return <div css={container}>
		<Header />
		<Views {...{value}} />
	</div>;
}
