import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function PrivacyVoorwaarden() {
    return (
        <div className="sectionWaarom">
        	
        	<div className="sectionBlock">
				<div>
					<h1>Privacy voorwaarden</h1>
					<Link to="/" >Ga terug</Link>
					<Link to="/Step1">Start een Wob-verzoek</Link>
				</div> 
				
			</div>
		</div>
    )
}
export default PrivacyVoorwaarden