import React from "react";
import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import PopupButton from "../../popups/PopupButton";
import LetterUI from "./LetterUI";

function Stap3_2({
	value,
	filteredDataText,
	changeHandlerCheckbox,
	changeHandlerUser,
	changeHandlerSubjectType,
	getCurrentDate
}) {
	const tagManagerArgs = {
		dataLayer: {
			page: "Stap3_2"
		},
		dataLayerName: "PageDataLayer"
	};
	{
		TagManager.dataLayer(tagManagerArgs);
	}
	return (
		<div className="formLetter">
			<p className="logo">Woo-generator</p>
			<h2>Stap 3: Welke informatie zoek je?</h2>
			<p>
				Beschrijf nauwkeurig maar bondig het onderwerp waarover je informatie vraagt. Check daarbij ook of je
				omschrijving zoals die in de brief verschijnt goed loopt.
			</p>
			<br />
			<span>
				<p>Let op: je kunt alleen informatie over ‘bestuurlijke aangelegenheden’ opvragen.</p>
				<PopupButton number="10" />
			</span>

			<form>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerSubjectType}
							id="subjectSpecific"
							type="radio"
							checked={value.subjectType === "specific"}
							name="subjectType"
							value="specific"
						/>{" "}
						Ik wil specifieke documenten opvragen
						<div className="checkmark"></div>
					</label>
					<PopupButton number="11" />
				</span>

				<span>
					<label className="container">
						{" "}
						<input
							onChange={changeHandlerSubjectType}
							id="subjectAll"
							type="radio"
							checked={value.subjectType === "all"}
							name="subjectType"
							value="all"
						/>{" "}
						Ik wil alle documenten die de overheidsinstantie heeft over dit onderwerp
						<div className="checkmark"></div>
					</label>
					<PopupButton number="12" />
				</span>
			</form>

			<span>
				{" "}
				<p>Welke documenten moet de overheid openbaar maken</p>
				<PopupButton number="13" />
			</span>
			<span className="extraPadding">
				{" "}
				<p>Denk goed na welke documenten wel of niet nuttig zijn.</p>
				<PopupButton number="14" />{" "}
			</span>
			<Link to="/PM/lob/Stap3">Terug</Link>
			<Link to="/PM/lob/Stap3_3">Volgende</Link>
			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default Stap3_2;
