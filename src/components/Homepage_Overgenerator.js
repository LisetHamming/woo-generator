import React from "react"
import LetterUI from "./LetterUI"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Homepage_Overgenerator() {
    return (
        <div className="sectionWaarom">
				<div>
					<h1>Over deze generator</h1>
					<p>De Wob-generator is een project van de Wob-werkgroep van de Vlaams-Nederlandse Vereniging van Onderzoeksjournalisten (VVOJ) en financieel mogelijk gemaakt door Stichting Lira.</p>

					<p>De Wob-werkgroep van de VVOJ beheert de website. De website is op geen enkele manier verbonden aan de Nederlandse overheid en is volstrekt onafhankelijk.</p>
					<div>
						{/*<img src="logo_werkgroep" alt="logo werkgroep VVOJ" />
						<img src="logo_RA" alt="logo RA" /> */}
					</div>
					<div>
						<Link to="/PrivacyVoorwaarden">Privacy Policy </Link>
						<Link to="/Step9">Algemene voorwaarden</Link>
					</div>
				</div>
				<div>
					<div>
						<h2>Projectteam VVOJ</h2>
						<p>Liset Hamming</p>
						<p>Tim Staal</p>
						<p>Hugo van der Parre</p>
					</div>
					<div>
						<h2>Projectteam RA</h2>
						<p>Tove Oegema</p>
						<p>Erik van Summeren</p>
						<p>Robert-Jan Korteschiel</p>
					</div>
				</div>
			</div>
    )
}
export default Homepage_Overgenerator