import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function AlgemeneVoorwaarden() {
    return (
        <div className="sectionWaarom">
        	
        	<div className="sectionBlock">
				<div>
					<h1>Algemene voorwaarden</h1>
                    <p>We vertrouwen in onze tool. Maar helaas zijn we een kleine instelling en kunnen we je niet veel garanderen. Deze voorwaarden vertellen wat je van ons kan verwachten.</p>
                    <Link to="/" >Ga terug</Link>
                    <Link to="/Step1">Start een Wob-verzoek</Link>
                    
				</div> 
				
			</div>
		</div>
    )
}
export default AlgemeneVoorwaarden