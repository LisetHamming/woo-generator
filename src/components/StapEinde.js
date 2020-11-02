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
				Hoewel de Wob-generator met de grootste zorgvuldigheid is ontwikkeld, is wobben mensenwerk en maatwerk.
				Bovendien blijf je zelf verantwoordelijk voor wat je naar het bestuursorgaan stuurt.
				<br />
				<br />
				Je concept Wob-verzoek
				<br />
				Dus check of de zinnen in je verzoek goed lopen. Denk ook na of er nog specifieke informatie nodig is om aan je
				verzoek toe te voegen. Deze aanvullingen en wijzigingen kun je zelf aanbrengen nadat je je Wob-verzoek hebt
				opgeslagen. Ben je tevreden, druk de brief dan af en zet je handtekening eronder. Bij een Wob-verzoek per brief
				is dat verplicht. Vergeet niet vóór het versturen per post een kopie van je ondertekende brief te maken.
				<br />
				<br />
				Digitaal verturen?
				<br />
				Er zijn overheidsinstanties die Wob-verzoeken die per mail verstuurd zijn accepteren. Check daarvoor de website
				van het bestuursorgaan. Heeft het bestuursorgaan een speciaal Wob-formulier op haar website gezet, dan kun je de
				(eventueel: ondertekende) brief ook uploaden of kopiëren en inplakken.
				<br />
				<br />
				Je kunt nu hier je Wob-verzoek opslaan.
			</p>
			<br />
			<div className="extraPadding">
				<button className="buttonStyle2" onClick={exportHTMLDoc}>
					Opslaan als DOC
				</button>
				<button className="buttonStyle2" onClick={window.print}>
					Opslaan als PDF
				</button>
			</div>
			<div>
				<p>
					Vragen en opmerkingen: info@wob-generator.nl
					<br />
					De Wob-generator is met liefde en plezier gemaakt én we zullen doorgaan met de ontwikkeling. Laat het ons
					daarom weten als je iets mist of graag anders ziet. Maar we horen het ook graag als je er blij mee bent!{" "}
				</p>
				<br />
				<p>
					{" "}
					Anderen vertellen over de Wob-generator? Graag!
					<br /> #wobgenerator{" "}
				</p>
				<br />
				<br />
			</div>
			<br />
			<Link to="/StapExtra">Terug</Link>
			<Link to="/" onClick={resetState}>
				Alles wissen
			</Link>

			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default StapEinde;
