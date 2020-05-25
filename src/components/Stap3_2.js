import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import LetterUI from "./LetterUI";
import PopupButton from "./popups/PopupButton";

function Stap3_2({
	value,
	filteredDataText,
	changeHandlerCheckbox,
	changeHandlerUser,
	changeHandlerSubjectType,
	getCurrentDate
}) {
	return (
		<div className="formLetter">
			<img className="logoWob" src={logo} />
			<h2>Stap 3: Welke informatie zoek je?</h2>
			<span>
				<p>
					Maak een keuze tussen het opvragen van bepaalde, specifieke documenten of alle documenten die de
					overheidsinstantie over dit onderwerp heeft.
				</p>
			</span>
			<br />
			<span>
				{" "}
				<p>Welke informatie moet de overheid openbaar maken?</p>
				<PopupButton number="13" />
			</span>

			<form>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerSubjectType}
							id="subjectSpecific"
							type="radio"
							checked={value.subjectType === "specific"}
							name="subjectSpecific"
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
							name="subjectSpecific"
							value="all"
						/>{" "}
						Ik wil alle documenten die de overheidsinstantie over dit onderwerp heeft
						<div className="checkmark"></div>
					</label>
					<PopupButton number="12" />
				</span>
			</form>
			<Link to="/Stap3">Terug</Link>
			<Link to="/Stap3_3">Volgende</Link>
			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default Stap3_2;
