import React, { useState } from "react";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";
import PopupButton from "./popups/PopupButton";

function Stap3({
	value,
	changeHandlerCheckbox,
	changeHandlerUser,
	filteredDataText,
	clickHandlerStep,
	getCurrentDate
}) {
	//  error state
	const [errors, setErrors] = useState([]);

	return (
		<div className="formLetter">
			<h2>Stap 3: Welke informatie zoek je?</h2>
			<span>
				<p>
					Beschrijf nauwkeurig maar bondig het onderwerp waarover je informatie vraagt. Check daarbij ook of je
					omschrijving zoals die in de brief verschijnt goed loopt.
					<br /> <br />
					Let op: je kunt alleen informatie over overheidstaken opvragen.
					<PopupButton number="8" />
				</p>
			</span>
			<br />
			<form>
				<span>
					<label>
						Onderwerp beschrijven (verplicht)
						<input
							size="50"
							value={value.subjectLong}
							onChange={changeHandlerUser}
							id="subjectLong"
							type="text"
							name="subjectinfo"
							placeholder="bijvoorbeeld 'boetes snelheidsovertredingen in Friesland'  "
						/>
						<br />
					</label>
				</span>
				{errors.includes("subjectLong") && <p id="error">Dit is een verplicht veld, graag invullen.</p>}
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="subjectMilieu"
							type="checkbox"
							checked={value.subjectMilieu}
							name="subjectInfo"
							value="subjectMilieu"
						/>{" "}
						Dit onderwerp gaat over milieu
						<br />
						<div className="checkmark"></div>
					</label>{" "}
					<PopupButton number="9" />
				</span>
			</form>

			<Link to="/Stap2">Terug</Link>
			<Link
				to="/Stap3_2"
				onClick={event => {
					let errors = [];

					if (value.subjectLong === "") {
						errors.push("subjectLong");
					}

					if (errors.length) {
						event.preventDefault();
						setErrors(errors);
					} else {
						clickHandlerStep("step6");
					}
				}}
			>
				Volgende
			</Link>
			<LetterUI
				className="letterText"
				value={value}
				filteredDataText={filteredDataText}
				getCurrentDate={getCurrentDate}
			/>
		</div>
	);
}
export default Stap3;
