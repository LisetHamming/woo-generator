import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import LetterUI from "./LetterUI";

function StapEinde({ value, filteredDataText, exportHTMLDoc, getCurrentDate }) {
	return (
		<div className="formLetter">
			<img className="logoWob" src={logo} />
			<h2 className="hidePrint">Laatste check!</h2>
			<p className="extraPadding hidePrint">Wob-verzoek met onderwerp: {value.subjectLong}</p>

			<Link to="/StapExtra">Terug</Link>

			<p>
				Denk na het opslaan nog even na over welke aanvullende informatie er in jouw specifieke geval nodig is om aan
				jouw verzoek toe te voegen. Wijzigingen en aanvullingen kun je zelf aanbrengen nadat je je Wob-verzoek hebt
				opgeslagen in Word.
			</p>
			<br />
			<div>
				<p className="hidePrint">Download je Wob-verzoek hier</p>
				<button className="buttonStyle" onClick={exportHTMLDoc}>
					Opslaan in Word
				</button>
				<button className="buttonStyle" onClick={window.print}>
					Opslaan als PDF
				</button>
			</div>

			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default StapEinde;
