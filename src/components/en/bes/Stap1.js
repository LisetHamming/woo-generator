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
			<p className="logo">Wob BES generator</p>

			<h2>Step 1: About Yourself</h2>
			<p>
			Fill in your contact information here so that the government agency can reach you and make some choices about how you
    present yourself and your request to the government. Note: a Woo request cannot be submitted anonymously.
			</p>
			<br />
			<form>
				<span>
					<label className="container nieuwietje">
						I'm a journalist
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
						I am submitting this Woo request on behalf of a (media) organization
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
							Organization name
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
						I work for/ am commissioned by a (media) organization
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
							Name
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
					{errors.includes("userName") && <p id="error">This is a required field, please fill it in.</p>}
					<span>
						{" "}
						<label>
							{" "}
							Street name
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
					{errors.includes("userAdress") && <p id="error">This is a required field, please fill it in.</p>}
					<span>
						<label>
							{" "}
							Postal code
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
							Place
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
					{errors.includes("userCityName") && <p id="error">This is a required field, please fill it in.</p>}
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
							Phone number
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
			<Link to="/EN/bes/StapVoorAf">Go back</Link>
			<Link
				to="/EN/bes/Stap2"
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
				Next step
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
