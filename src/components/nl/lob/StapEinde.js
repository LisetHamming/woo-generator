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
				Hoewel de Lob-generator met de grootste zorgvuldigheid is ontwikkeld, is het opstellen van een goed Lob-verzoek
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
				Je concept Lob-verzoek
				<br />
				Check of de zinnen in je verzoek goed lopen. Denk ook na of er nog specifieke informatie nodig is om aan je
				verzoek toe te voegen. Deze aanvullingen en wijzigingen kun je zelf aanbrengen nadat je je Lobverzoek hebt
				opgeslagen. Ben je tevreden, druk de brief dan af en zet je handtekening eronder. Bij een Lobverzoek per brief
				is dat verplicht. Vergeet niet vóór het versturen per post een kopie van je ondertekende brief te maken.
				<br />
				<br />
				Digitaal versturen?
				<br />
				Hoewel op geen van de ABCSSS-eilanden de wet iets zegt over digitale indiening, blijkt uit de praktijk dat het indienen van een verzoek via e-mail mogelijk is. 
				In Curaçao kan dit bijvoorbeeld via het <a className="plaintext" href="https://loketdigital.gobiernu.cw/vergunningen/lob-verzoek" target="_blank" rel="noopener noreferrer">Vergunningloket.</a> 
				Het Vergunningloket ontvangt alle verzoeken in Curaçao en stuurt ze door naar het betreffende ministerie om een beslissing te nemen. 
				Informeer altijd van tevoren bij het betreffende departement dat een digitaal verzoek kan worden ingediend om te voorkomen dat het verzoek wordt afgewezen.
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
