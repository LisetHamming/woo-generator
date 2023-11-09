import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DataPopup from "./DataPopup";

function Popup({ clickHandler, number }) {
	const popup = DataPopup[number];

	return (
		<div className="backgroundPopUp" onClick={clickHandler}>
			<div
				className="popup"
				onClick={event => {
					event.stopPropagation();
				}}
			>
				<button className="popupClose" type="button" onClick={clickHandler}>
					<FontAwesomeIcon icon={faTimes} />
				</button>
				<div>
					<h1>{popup.h1}</h1>
					<p>{popup.p}</p>
					<p>{popup.p2}</p>
					<p>{popup.p3}</p>
					<p>{popup.p4}</p>
					<p>{popup.p5}</p>
				</div>
			</div>
		</div>
	);
}
export default Popup;
