import React from "react";

export default function YearButton({buttonRef, ariaLabel, date, ...props}) {
	return <button ref={buttonRef} aria-label={ariaLabel} {...props}>
		{date.toFormat("yyyy")}
	</button>;
}
