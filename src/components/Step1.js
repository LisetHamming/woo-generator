import React, { Component, useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Step1(){
	return(
			<div>
				<h1>In 3 stappen naar je Wob-verzoek</h1>
				<ol>
					<li>Je vult een aantal gegevens over jezelf in.</li>
					<li>Je selecteert een overheidsinstantie.</li>
					<li>Je kiest wat voor documenten of informatie je zoekt.</li>
				</ol>
				<p>Voila!</p>
				<Link to="/Step2">volgende pagina</Link>
			</div>
		)
}
export default Step1