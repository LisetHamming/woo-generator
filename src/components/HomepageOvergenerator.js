import React from "react"
import LetterUI from "./LetterUI"
import logo_vvoj from "../assets/logo_vvoj.png"
import logo_ra from "../assets/logo_ra.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function HomepageOvergenerator() {
    return (
        <div className="sectionWaarom">

      			<div className="sectionBlock2">
					<div className="block1">
						<h1>Over deze generator</h1>
						<p>De Wob-generator is een project van de Wob-werkgroep van de Vlaams-Nederlandse Vereniging van Onderzoeksjournalisten (VVOJ) en financieel mogelijk gemaakt door Stichting Lira.</p>
						<br/><br/>
						<p>De Wob-werkgroep van de VVOJ beheert de website. De website is op geen enkele manier verbonden aan de Nederlandse overheid en is volstrekt onafhankelijk.</p>
						<div className="spanLinks">
							<img src={logo_vvoj} className="logo_vvoj"/>
							<img src={logo_ra} className="logo_vvoj"/>
							
						</div>
						<div className="spanLinks">
							<Link to="/PrivacyVoorwaarden">Privacy Policy </Link>
							<Link to="/AlgemeneVoorwaarden">Algemene voorwaarden</Link>
						</div>
					</div>
					<div className="projectTeam">
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
			</div>
    )
}
export default HomepageOvergenerator