import React from "react";

export default function NextButton({ariaLabel, ...props}) {
	return <button aria-label={ariaLabel} {...props}>
		{">"}
	</button>;
}
