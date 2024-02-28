import React from "react";
// import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";
// const tagManagerArgs = {
// 	dataLayer: {
// 		page: "Print-brief"
// 	},
// 	dataLayerName: "PageDataLayer"
// };

function StapEinde({ value, filteredDataText, exportHTMLDoc, getCurrentDate, resetState }) {
	// TagManager.dataLayer(tagManagerArgs);
	return (
		<div className="formLetter">
			<p className="logo">Lob-generator</p>
			<h2 className="hidePrint">Laatste check!</h2>
			<p className="extraPadding hidePrint">Lob-verzoek met onderwerp: {value.subjectLong}</p>
			<p className="hidePrint">
				Hoewel de Lob-generator met de grootste zorgvuldigheid is ontwikkeld, is het opstellen van een goed Lobverzoek
				mensenwerk en maatwerk. Bovendien blijf je zelf verantwoordelijk voor wat je naar het bestuursorgaan stuurt.
				<br />
				<br />
			</p>
			<p className="extraPadding">
				<button
					className="buttonStyle2"
					onClick={() => {
						window.dataLayer.push({ event: "print lob NL brief" });
						exportHTMLDoc();
					}}
				>
					Opslaan als DOC
				</button>
			</p>
			<p>
				Je concept Lobverzoek
				<br />
				Check of de zinnen in je verzoek goed lopen. Denk ook na of er nog specifieke informatie nodig is om aan je
				verzoek toe te voegen. Deze aanvullingen en wijzigingen kun je zelf aanbrengen nadat je je Lobverzoek hebt
				opgeslagen. Ben je tevreden, druk de brief dan af en zet je handtekening eronder. Bij een Lobverzoek per brief
				is dat verplicht. Vergeet niet vóór het versturen per post een kopie van je ondertekende brief te maken.
				<br />
				<br />
				Digitaal versturen?
				<br />
				Onder de Woo moeten overheidsinstanties Lobverzoeken die digitaal zijn ingediend accepteren. Maar
				overheidsinstanties mogen wel aangeven via wélke digitale weg een Lobverzoek dient te worden ingediend,
				bijvoorbeeld via een specifiek e-mailadres of een online Lobformulier. Check dit dus altijd van tevoren! Heeft
				de overheidsinstantie een Lobformulier op haar website gezet, dan kun je de (eventueel ondertekende) brief ook
				uploaden of de tekst kopiëren en inplakken.
			</p>
			<br />
			<div>
				<p>
					Vragen en opmerkingen: woo-generator@vvoj.org
					<br />
					De Lob-generator is met liefde en plezier gemaakt en we zullen doorgaan met de ontwikkeling. Laat het ons
					daarom weten als je iets mist of liever anders ziet. Maar we horen het ook graag als je er blij mee bent!{" "}
				</p>
				<br />
				<p>
					{" "}
					Anderen vertellen over de Lob-generator?
					<br /> #lobgenerator{" "}
				</p>
				<br />
				<br />
			</div>
			<br />
			<Link to="/NL/lob/StapExtra/">Terug</Link>
			<Link to="/" onClick={resetState}>
				Alles wissen
			</Link>

			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default StapEinde;
