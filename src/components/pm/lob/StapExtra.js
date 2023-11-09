import React from "react";
import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";

function StapExtra({ value, changeHandlerCheckbox, filteredDataText, getCurrentDate }) {
	const tagManagerArgs = {
		dataLayer: {
			page: "StapExtra"
		},
		dataLayerName: "PageDataLayer"
	};
	{
		TagManager.dataLayer(tagManagerArgs);
	}
	return (
		<div className="formLetter">
			<p className="logo">Woo-generator</p>

			<h2>Extra opties</h2>
			<p>
				Onderstaande opties vergroten in het algemeen je kans op openbaarmaking van de informatie omdat ze anticiperen
				op belemmeringen die in het proces kunnen ontstaan. Bij het aan- en uitvinken van de opties kun je in je
				Wob-verzoek in wording zien welke tekstblokjes verschijnen of verdwijnen. Lees tekstblokjes goed door om te
				weten wat de opties inhouden. Het kan geen kwaad om ze allemaal op te nemen, maar sommige opties kunnen in jouw
				specifieke geval niet relevant zijn. Zet ze in dat geval uit.
			</p>
			<form>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text1"
							type="checkbox"
							checked={value[1]}
							name="checkText"
							value="1"
						/>{" "}
						Doorgeleiding
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text2"
							type="checkbox"
							checked={value[2]}
							name="checkText"
							value="2"
						/>{" "}
						Mondelinge toelichting
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text3"
							type="checkbox"
							checked={value[3]}
							name="checkText"
							value="3"
						/>{" "}
						Reeds openbare informatie
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text4"
							type="checkbox"
							checked={value[4]}
							name="checkText"
							value="4"
						/>{" "}
						Mogelijk omvangrijk verzoek
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text5"
							type="checkbox"
							checked={value[5]}
							name="checkText"
							value="5"
						/>{" "}
						Geanonimiseerd verstrekken
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text6"
							type="checkbox"
							checked={value[6]}
							name="checkText"
							value="6"
						/>{" "}
						Persoonlijke beleidsopvattingen
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text7"
							type="checkbox"
							checked={value[7]}
							name="checkText"
							value="7"
						/>{" "}
						Samenvattingen van documenten
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text8"
							type="checkbox"
							checked={value[8]}
							name="checkText"
							value="8"
						/>{" "}
						Motivering bij weigering
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text9"
							type="checkbox"
							checked={value[9]}
							name="checkText"
							value="9"
						/>{" "}
						Voorkeur digitale verstrekking
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text10"
							type="checkbox"
							checked={value[10]}
							name="checkText"
							value="10"
						/>{" "}
						Inventarislijst toevoegen aan besluit
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
			</form>
			<span className="extraPadding"></span>
			<Link to="/PM/lob/Stap3_3">Terug</Link>
			<Link to="/PM/lob/StapEinde">Laatste stap</Link>
			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default StapExtra;
