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
			<div>
				<h2 className="extraPaddingh2">Exporteren!</h2>
				<p className="hidePrint">Download je bestand hier!</p>
				<button className="buttonStyle" onClick={exportHTMLDoc}>
					Opslaan als DOC
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
