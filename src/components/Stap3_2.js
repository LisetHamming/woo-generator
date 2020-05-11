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
					Wil je alle documenten die de overheidsinstantie heeft over je onderwerp? Of weet je al precies welke
					documenten je wilt hebben. Maak je keuze.
				</p>
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
						Ik wil alles over het onderwerp
						<div className="checkmark"></div>
					</label>
					<PopupButton number="12" />
				</span>
			</form>

			<span>
				{" "}
				<p>Welke informatie moet de overheid openbaar maken</p>
				<PopupButton number="13" />
			</span>
			<span className="extraPadding">
				{" "}
				<p>Denk goed na welke documenten, zoals e-mails, wel of niet nuttig zijn.</p>
				<PopupButton number="14" />{" "}
			</span>
			<Link to="/Stap3">Terug</Link>
			<Link to="/Stap3_3">Volgende</Link>
			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default Stap3_2;
