import React from "react";
import DataPopup from "../nl/woo/popups/DataPopup";

function Popup({ clickHandler, number }) {
	const popup = DataPopup[number];

	return (
		<div className="popup">
			<h1>{popup.h1}</h1>
			<p>{popup.p}</p>
			{popup.p2 && <p>{popup.p2}</p>}
			{popup.p3 && <p>{popup.p3}</p>}
		</div>
	);
}
export default Popup;
