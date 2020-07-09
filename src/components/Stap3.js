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
	getCurrentDate,
	changeHandlerSubjectType
}) {
	//  error state
	const [errors, setErrors] = useState([]);

	return (
		<div className="formLetter">
			<p className="logo">Wob-generator</p>
			<h2>Stap 3: Welke informatie zoek je?</h2>
			<p>
				Beschrijf nauwkeurig maar bondig het onderwerp waarover je informatie vraagt. Check daarbij ook of je
				omschrijving zoals die in de brief verschijnt goed loopt.
			</p>
			<br />
			<br />
			<span>
				<p>Waarom moet ik nauwkeurig zijn?</p>
				<PopupButton number="8" />
			</span>

			<span>
				<p> Let op: je kunt alleen informatie over ‘bestuurlijke aangelegenheden’ opvragen.</p>
				<PopupButton number="18" />
			</span>
			<br />
			<form>
				{value.userNeedsGoal && (
					<span className="subForm">
						<label className="formInputs">
							Doel (verplicht)
							<input
								id="userGoalInput"
								size="46"
								value={value.userGoalInput}
								onChange={changeHandlerUser}
								type="text"
							/>
							<br />
						</label>
					</span>
				)}
				<span>
					<label>
						Onderwerp (verplicht)
						<input
							size="50"
							value={value.subjectLong}
							onChange={changeHandlerUser}
							id="subjectLong"
							type="text"
							name="subjectinfo"
							placeholder="Bijvoorbeeld 'boetes snelheidsovertredingen Friesland'  "
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
				<h1>Specifiek document of alles?</h1>
				<p>
					Maak een keuze tussen het opvragen van bepaalde, specifieke documenten of alle documenten die de
					overheidsinstantie over dit onderwerp heeft.
				</p>

				<br />
				<span>
					{" "}
					<p>Welke informatie moet de overheid openbaar maken?</p>
					<PopupButton number="13" />
				</span>
				<br />
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
						Ik wil specifieke documenten
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

			<Link to="/Stap2">Terug</Link>
			<Link
				to="/Stap3_3"
				onClick={event => {
					clickHandlerStep("step6");
				}}
				/*onClick={event => {
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
				}}*/
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
