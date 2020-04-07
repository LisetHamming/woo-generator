import React from "react";
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
					Begin met het kort en bondig omschrijven van het onderwerp waarover je informatie vraagt. Let op: je kunt
					alleen informatie over overheidstaken opvragen.
				</p>
				<PopupButton number="8" />
			</span>
			<br />
			<span>
				<p>
					Omschrijf je onderwerp eerst in enkele trefwoorden, dit komt bovenaan de brief te staan. Omschrijf vervolgens
					je onderwerp in een of enkele zinnen. Dit komt in de lopende tekst van je brief.
				</p>{" "}
			</span>
			<form>
				<span>
					{" "}
					<label>
						{" "}
						Onderwerp in lopende tekst (verplicht)
						<input
							size="50"
							value={value.subjectLong}
							onChange={changeHandlerUser}
							id="subjectLong"
							type="text"
							name="subjectinfo"
							placeholder="Vul hier je onderwerp kort en bondig in, bijvoorbeeld 'boetes voor snelheidsovertredingen in Friesland'  "
						/>
						<br />
					</label>
				</span>
				{errors.includes("subjectLong") && <p>He ga dit eens invullen</p>}
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
						<div class="checkmark"></div>
					</label>{" "}
					<PopupButton number="9" />
				</span>
			</form>

			<Link to="/Stap2">Terug</Link>
			<Link
				to="/Stap3_2"
				onClick={event => {
					let errors = [];

					if (value.subjectlong === "") {
						errors.push("subjectlong");
					}

					if (errors.length) {
						event.preventDefault();
						setErrors(errors);
					} else {
						clickHandlerStep("step6");
					}
				}}
			>
				Volgende pagina
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
