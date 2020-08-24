import React from "react";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";

function StapExtra({ value, changeHandlerCheckbox, filteredDataText, getCurrentDate }) {
	return (
		<div className="formLetter">
			<p className="logo">Wob-generator</p>
			<h2>Extra opties</h2>
			<p>
				Onderstaande opties vergroten in het algemeen je kans op openbaarmaking van de informatie omdat ze anticiperen
				op belemmeringen die in het proces kunnen ontstaan. Het kan geen kwaad om ze allemaal op te nemen, maar sommige
				opties kunnen in jouw specifieke geval niet relevant zijn. Zet ze in dat geval uit.
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
						Geanonimiseerde documenten
						<br />
						<div class="checkmark"></div>
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
						Samenvattingen van documenten
						<br />
						<div class="checkmark"></div>
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
						Digitale verstrekking
						<br />
						<div class="checkmark"></div>
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
						Inventarislijst vooraf
						<br />
						<div class="checkmark"></div>
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
						Insluiting alle gegevensdragers
						<br />
						<div class="checkmark"></div>
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
						Doorgeleiding
						<br />
						<div class="checkmark"></div>
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
						Motivering bij weigering
						<br />
						<div class="checkmark"></div>
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
						Mondelinge toelichting
						<br />
						<div class="checkmark"></div>
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
						Inventarislijst toevoegen
						<br />
						<div class="checkmark"></div>
					</label>
				</span>
			</form>
			<Link to="/Stap3_3">Terug</Link>
			<Link to="/StapEinde">Laatste stap</Link>
			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default StapExtra;
