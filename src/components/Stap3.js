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

			<span>
				<p>
					Beschrijf nauwkeurig maar bondig het onderwerp waarover je informatie vraagt. Check daarbij ook of je
					omschrijving zoals die in de brief verschijnt goed loopt.
				</p>
				<br />
				<PopupButton number="8" />
			</span>
			<br />
			<br />
			<span>
				<p>Let op: je kunt alleen informatie over overheidstaken opvragen.</p>
				<PopupButton number="18" />
			</span>
			<br />
			<br />
			<span>
				<p>
					Wil je alle documenten die de overheidsinstantie heeft over je onderwerp? Of weet je al precies welke
					documenten je wilt hebben. Maak je keuze.
				</p>
				<PopupButton number="10" />
			</span>
			<br />
			<span>
				{" "}
				<p>Welke informatie moet de overheid openbaar maken</p>
				<PopupButton number="13" />
			</span>

			<form>
				<span>
					<label className="container">
						Ik wil mijn doel toelichten
						<input
							id="userNeedsGoal"
							value="userNeedsGoal"
							checked={value.userNeedsGoal}
							onChange={changeHandlerCheckbox}
							type="checkbox"
						/>
						<div className="checkmark"></div>
					</label>
					<PopupButton number="2" />
				</span>
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
						Onderwerp in lopende tekst (verplicht)
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

			<span className="extraPadding">
				{" "}
				<p>Denk goed na welke documenten, zoals e-mails, wel of niet nuttig zijn.</p>
				<PopupButton number="14" />{" "}
			</span>
			<Link to="/Stap2">Terug</Link>
			<Link
				to="/Stap3_3"
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
