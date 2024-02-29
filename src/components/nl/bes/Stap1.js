import React, { useState } from "react";
// import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import PopupButton from "../../popups/PopupButton";
import LetterUI from "./LetterUI";
// const tagManagerArgs = {
// 	dataLayer: {
// 		page: "Stap1"
// 	},
// 	dataLayerName: "PageDataLayer"
// };
function Stap1({
	value,
	changeHandlerUser,
	changeHandlerCheckbox,
	filteredDataText,
	getCurrentDate,
	changeHandlerCompanyName,
	changeHandlerOnBehalf
}) {
	const [errors, setErrors] = useState([]);

	// TagManager.dataLayer(tagManagerArgs);
	return (
		<div className="formLetter">
			<p className="logo">Wob BES-generator</p>

			<h2>Stap 1: Over jezelf</h2>
			<p>
				Vul hier je contactgegevens in zodat de overheidsinstantie je kan bereiken en maak enkele keuzes over hoe je
				jezelf en je verzoek aan de overheid presenteert. Let op: een Wob BES-verzoek kan niet anoniem worden ingediend.
			</p>
			<br />
			<form>
				<span>
					<label className="container nieuwietje">
						Ik ben een journalist
						<input
							id="userJournalist"
							value="userJournalist"
							checked={value.userJournalist}
							onChange={changeHandlerCheckbox}
							type="checkbox"
						/>
						<div className="checkmark"></div>
						<PopupButton number="1" />
					</label>
				</span>

				<span>
					<label className="container nieuwietje">
						Ik dien dit Wob BES-verzoek in namens een (media)organisatie
						<input
							id="userCompany"
							value="userCompanyName"
							checked={value.userCompanyName}
							onChange={changeHandlerCompanyName}
							type="checkbox"
						/>
						<div className="checkmark"></div>
						<PopupButton number="3" />
					</label>
				</span>
				{value.userCompanyName && (
					<span className="subForm">
						<label className="formInputs">
							Naam organisatie
							<input
								id="userCompanyNameInput"
								size="46"
								value={value.userCompanyNameInput}
								onChange={changeHandlerUser}
								type="text"
							/>
							<br />
						</label>
					</span>
				)}
				<span>
					<label className="container nieuwietje">
						Ik werk voor/in opdracht van een (media)organisatie
						<input
							id="userOnBehalf"
							value="userOnBehalf"
							checked={value.userOnBehalf}
							onChange={changeHandlerOnBehalf}
							type="checkbox"
						/>
						<div className="checkmark"></div>
						{/* <PopupButton number="20" /> */}
					</label>
				</span>
				{value.userOnBehalf && (
					<span className="subForm">
						<label className="formInputs">
							Naam organisatie
							<input
								id="userOnBehalfInput"
								size="46"
								value={value.userOnBehalfInput}
								onChange={changeHandlerUser}
								type="text"
							/>
							<br />
						</label>
					</span>
				)}
				<div className="formInputs">
					<span>
						<label>
							{" "}
							Naam
							<input
								size="50"
								value={value.userName}
								onChange={changeHandlerUser}
								id="userName"
								type="text"
								name="userInfo"
								placeholder=""
							/>
						</label>
					</span>
					{errors.includes("userName") && <p id="error">Dit is een verplicht veld, graag invullen.</p>}
					<span>
						{" "}
						<label>
							{" "}
							Postadres
							<input
								size="40"
								value={value.userAdress}
								onChange={changeHandlerUser}
								id="userAdress"
								type="text"
								name="userInfo"
								placeholder=""
							/>
						</label>
						<label>
							{" "}
							Nr.
							<input
								size="5"
								value={value.userAdressNumber}
								onChange={changeHandlerUser}
								id="userAdressNumber"
								type="text"
								name="userInfo"
								placeholder=""
							/>
						</label>
					</span>
					{errors.includes("userAdress") && <p id="error">Dit is een verplicht veld, graag invullen.</p>}
					<span>
						<label>
							{" "}
							Postcode
							<input
								size="15"
								value={value.userZipcode}
								onChange={changeHandlerUser}
								id="userZipcode"
								type="text"
								name="userInfo"
								placeholder=""
							/>
						</label>
						<label>
							{" "}
							Plaats
							<input
								size="30"
								value={value.userCityName}
								onChange={changeHandlerUser}
								id="userCityName"
								type="text"
								name="userInfo"
								placeholder=""
							/>
						</label>
					</span>
					{errors.includes("userCityName") && <p id="error">Dit is een verplicht veld, graag invullen.</p>}
					<span>
						<label>
							{" "}
							E-mail
							<input
								size="50"
								value={value.userEmail}
								onChange={changeHandlerUser}
								id="userEmail"
								type="text"
								name="userInfo"
								placeholder=""
							/>
						</label>
					</span>
					<span>
						<label>
							{" "}
							Telefoon
							<input
								size="50"
								value={value.userPhoneNumber}
								onChange={changeHandlerUser}
								id="userPhoneNumber"
								type="text"
								name="userInfo"
								placeholder=""
							/>
						</label>
					</span>
				</div>
			</form>
			<span className="extraPadding"></span>
			<Link to="/NL/bes/StapVoorAf">Terug</Link>
			<Link
				to="/NL/bes/Stap2"
				/*onClick={event => {
					let errors = [];

					if (value.userName === "") {
						errors.push("userName");
					}
					if (value.userAdress === "") {
						errors.push("userAdress");
					}
					if (value.userCityName === "") {
						errors.push("userCityName");
					}
					if (errors.length) {
						event.preventDefault();
						setErrors(errors);
					}
				}}*/
			>
				Stap 2
			</Link>
			<LetterUI
				className="letterText"
				value={value}
				filteredDataText={filteredDataText}
				getCurrentDate={getCurrentDate}
			/>
		</div>
	);
}
export default Stap1;
