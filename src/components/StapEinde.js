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
				Check of de zinnen in je verzoek goed lopen. Denk ook na of er nog specifieke informatie nodig is om aan je
				verzoek toe te voegen. Wijzigingen en aanvullingen kun je zelf aanbrengen nadat je je Wob-verzoek hebt
				opgeslagen in als Word-document.
				<br />
				<br />
				Hoewel de Wob-generator met de grootste zorgvuldigheid is ontwikkeld, blijft wobben maatwerk. Je blijft zelf
				verantwoordelijk voor wat je naar het bestuursorgaan stuurt.
			</p>
			<br />

			<div className="extraPadding">
				<button className="buttonStyle2" onClick={exportHTMLDoc}>
					Opslaan als DOC
				</button>
				
			</div>

			<div>
				<p>
					Natuurlijk kan de Wob-generator altijd beter. Laat het ons daarom weten als je iets mist of graag anders ziet
					via info@wob-generator.nl. En ook als je er blij mee bent!{" "}
				</p>
				<br />
				<p> Anderen vertellen over de Wob-generator? Graag! </p>
			</div>
			<br />
			<Link to="/StapExtra">Terug</Link>
			<Link to="/" onClick={resetState}>
				Begin opnieuw
			</Link>

			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default StapEinde;
