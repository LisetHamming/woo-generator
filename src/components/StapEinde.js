import React from "react";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";

function StapEinde({ value, filteredDataText, exportHTMLDoc, getCurrentDate, resetState }) {
	return (
		<div className="formLetter">
			<p className="logo">Wob-generator</p>
			<h2 className="hidePrint">Laatste check!</h2>
			<p className="extraPadding hidePrint">Wob-verzoek met onderwerp: {value.subjectLong}</p>
			<p className="hidePrint">
				Denk na het opslaan nog even na over welke aanvullende informatie er in jouw specifieke geval nodig is om aan
				jouw verzoek toe te voegen. Wijzigingen en aanvullingen kun je zelf aanbrengen nadat je je Wob-verzoek hebt
				opgeslagen in Word.
			</p>
			<div className="extraPadding">
				<button className="buttonStyle2" onClick={exportHTMLDoc}>
					Opslaan als DOC
				</button>
				<button className="buttonStyle2" onClick={window.print}>
					Opslaan als PDF
				</button>
			</div>
			<Link to="/StapExtra">Terug</Link>
			<Link to="/" onClick={resetState}>
				Begin opnieuw
			</Link>

			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default StapEinde;
