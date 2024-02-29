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
			<p className="logo">Wob BES-generator</p>
			<h2 className="hidePrint">Laatste check!</h2>
			<p className="extraPadding hidePrint">Wob BES-verzoek met onderwerp: {value.subjectLong}</p>
			<p className="hidePrint">
				Hoewel de Wob BES-generator met de grootste zorgvuldigheid is ontwikkeld, is het opstellen van een goed Wob BES-verzoek
				mensenwerk en maatwerk. Bovendien blijf je zelf verantwoordelijk voor wat je naar het bestuursorgaan stuurt.
				<br />
				<br />
			</p>
			<p className="extraPadding">
				<button
					className="buttonStyle2"
					onClick={() => {
						window.dataLayer.push({ event: "print bes NL brief" });
						exportHTMLDoc();
					}}
				>
					Opslaan als DOC
				</button>
			</p>
			<p>
				Je concept Wob BES-verzoek
				<br />
				Check of de zinnen in je verzoek goed lopen. Denk ook na of er nog specifieke informatie nodig is om aan je
				verzoek toe te voegen. Deze aanvullingen en wijzigingen kun je zelf aanbrengen nadat je je Wob BES-verzoek hebt
				opgeslagen. Ben je tevreden, druk de brief dan af en zet je handtekening eronder.  Vergeet niet vóór het versturen per post een kopie van je ondertekende brief te maken.
				<br />
				<br />
				Digitaal versturen?
				<br />
				De Wob BES zegt niks over digitale indiening, omdat het gebaseerd is op de oude Wob. Die zei ook niks over digitale indiening. 
				Dat is pas in de Woo gekomen. Check dus altijd van tevoren of het bestuursorgaan op het BES-eiland waar je het verzoek indient digitaal indienen toestaat. 
				Als het niet mogelijk is, dan zou je je verzoek dan per brief moeten doen. 
			</p>
			<br />
			<div>
				<p>
					Vragen en opmerkingen: woo-generator@vvoj.org
					<br />
					De Wob BES-generator is met liefde en plezier gemaakt en we zullen doorgaan met de ontwikkeling. Laat het ons
					daarom weten als je iets mist of liever anders ziet. Maar we horen het ook graag als je er blij mee bent!{" "}
				</p>
				<br />
				<p>
					{" "}
					Anderen vertellen over de Wob BES-generator?
					<br /> #wobbesgenerator{" "}
				</p>
				<br />
				<br />
			</div>
			<br />
			<Link to="/NL/bes/StapExtra/">Terug</Link>
			<Link to="/" onClick={resetState}>
				Alles wissen
			</Link>

			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default StapEinde;
