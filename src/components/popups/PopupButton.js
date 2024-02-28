import React, { useState } from "react";
import lightbulb from "./../../assets/icons/Spoon_icons_kennis pagina's.png";
import Popup from "./Popup";

function PopupButton({ number }) {
	const [popUp, setPopUp] = useState(false);

	return (
		<>
			<button type="button" className="popupI" onClick={() => setPopUp(curr => !curr)}>
				<img src={lightbulb} alt="icoon, klik voor meer informatie" />
			</button>
			{popUp && <Popup number={number} clickHandler={() => setPopUp(false)} />}
		</>
	);
}

export default PopupButton;
