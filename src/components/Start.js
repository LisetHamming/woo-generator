import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Start() {
    return (
        <div>
				<h1>In 3 stappen naar je Wob-verzoek</h1>
				<ol>
					<li>1. Je vult een aantal gegevens over jezelf in.</li>
					<li>2. Je selecteert een overheidsinstantie.</li>
					<li>3. Je kiest wat voor documenten of informatie je zoekt.</li>
				</ol>
				<p>Voila!</p>
				<Link to="/Stap1">Start je eigen Wob-verzoek</Link>
			</div>
    )
}
export default Start