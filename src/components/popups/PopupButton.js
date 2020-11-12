import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Popup from "./Popup";

function PopupButton({ number }) {
	const [popUp, setPopUp] = useState(false);

	return (
		<span>
			<button type="button" className="popupI" onClick={() => setPopUp(curr => !curr)}>
				<FontAwesomeIcon className="fontIcon" icon={faInfoCircle} />
			</button>
			{popUp && <Popup number={number} clickHandler={() => setPopUp(false)} />}
			<br />
		</span>
	);
}

export default PopupButton;
