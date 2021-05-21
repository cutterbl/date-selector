import React from "react";

export default function LabelButton(
	{
		buttonLabel: label,
		ariaLabel,
		...props
	},
) {
	return <button aria-label={ariaLabel} {...props}>
		{label}
	</button>;
}
