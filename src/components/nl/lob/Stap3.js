import React, { useState } from "react";
import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import PopupButton from "../../popups/PopupButton";
import LetterUI from "./LetterUI";

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
	const tagManagerArgs = {
		dataLayer: {
			page: "Stap3"
		},
		dataLayerName: "PageDataLayer"
	};
	TagManager.dataLayer(tagManagerArgs);
	return (
		<div className="formLetter">
			<p className="logo">Woo-generator</p>

			<h2>Stap 3: Welke informatie zoek je?</h2>
			<p>
				Beschrijf nauwkeurig maar bondig het onderwerp waarover je informatie vraagt. Dit kan een vrij smal onderwerp
				zijn, zoals ‘boetes voor snelheidsovertredingen’, maar ook breder, zoals ‘de verkeersveiligheid in uw gemeente’.
				Bij de volgende stap krijg je de gelegenheid verder toe te spitsen welke documenten je wilt ontvangen.
			</p>
			<br />
			<br />
			<span className="nieuwietje">
				<p>
					Waarom moet ik nauwkeurig zijn?
					<PopupButton number="8" />
				</p>
			</span>

			<span className="nieuwietje">
				<p>
					{" "}
					Let op: je kunt alleen vragen naar stukken of gegevens die verband houden met een publieke taak van de
					overhedsinstanties waar je je Woo-verzoek indient.
					<PopupButton number="18" />
				</p>
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
						Onderwerp{" "}
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
					<label className="container nieuwietje">
						<input
							onChange={changeHandlerCheckbox}
							id="subjectMilieu"
							type="checkbox"
							checked={value.subjectMilieu}
							name="subjectInfo"
							value="subjectMilieu"
						/>
						Dit onderwerp gaat over milieu <PopupButton number="9" />
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<h1>Specifiek document of alles?</h1>
				<p>
					Maak een keuze tussen het opvragen van bepaalde, specifieke documenten of alle documenten die de
					overheidsinstantie over dit onderwerp heeft.
				</p>

				<br />
				<span className="nieuwietje">
					{" "}
					<p>
						Welke documenten moet de overheid openbaar maken? <PopupButton number="13" />
					</p>
				</span>
				<br />
				<span>
					<label className="container nieuwietje">
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
						<PopupButton number="11" />
					</label>
				</span>

				<span>
					<label className="container nieuwietje">
						<input
							onChange={changeHandlerSubjectType}
							id="subjectAll"
							type="radio"
							checked={value.subjectType === "all"}
							name="subjectType"
							value="all"
						/>
						Ik wil alle documenten die de overheidsinstantie heeft over dit onderwerp
						<div className="checkmark"></div>
						<PopupButton number="12" />
					</label>
				</span>
			</form>
			<span className="extraPadding"></span>
			<Link to="/NL/lob/Stap2">Terug</Link>
			<Link
				to="/NL/lob/Stap3_3"
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
