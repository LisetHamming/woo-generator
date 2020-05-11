import React, { useState } from "react";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";
import PopupButton from "./popups/PopupButton";

function Stap1({
	value,
	changeHandlerUser,
	changeHandlerCheckbox,
	filteredDataText,
	getCurrentDate,
	changeHandlerCompanyName
}) {
	const [errors, setErrors] = useState([]);
	const [popUp, setPopUp] = useState(false);

	return (
		<div className="formLetter">
			<p className="logo">Wob-generator</p>
			<h2>Stap 1: Over jezelf</h2>
			<p>
				Je hoeft geen journalist te zijn om te wobben, maar als je het wel bent kan het handig zijn om dat kenbaar te
				maken. Je hoeft ook het (journalistieke) doel van je verzoek niet toe te lichten, maar ook hier geldt dat er
				redenen kunnen zijn om dat wel te doen. Tot slot kun je uit eigen naam of namens een organisatie wobben. Klik op
				de i’tjes voor meer informatie.
			</p>
			<form>
				<span>
					<label className="container">
						Ik ben een journalist
						<input
							id="userJournalist"
							value="userJournalist"
							checked={value.userJournalist}
							onChange={changeHandlerCheckbox}
							type="checkbox"
						/>
						<div className="checkmark"></div>
					</label>
					<PopupButton number="1" />
				</span>
				<span>
					<label className="container">
						Ik Wob namens een (media-) organisatie
						<input
							id="userCompany"
							value="userCompanyName"
							checked={value.userCompanyName}
							onChange={changeHandlerCompanyName}
							type="checkbox"
						/>
						<div className="checkmark"></div>
					</label>
					<PopupButton number="3" />
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
					<label className="container">
						Ik wil mijn doel toelichten
						<input
							id="userNeedsGoal"
							value="userNeedsGoal"
							checked={value.userNeedsGoal}
							onChange={changeHandlerCheckbox}
							type="checkbox"
						/>
						<div className="checkmark"></div>
					</label>
					<PopupButton number="2" />
				</span>
				{value.userNeedsGoal && (
					<span className="subForm">
						<label className="formInputs">
							Journalistieke doel (verplicht)
							<input
								id="userGoalInput"
								size="46"
								value={value.userGoalInput}
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
							Naam (verplicht)
							<input
								size="50"
								value={value.userName}
								onChange={changeHandlerUser}
								id="userName"
								type="text"
								name="userInfo"
								placeholder="Vul hier je naam in"
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
								placeholder="Vul hier je postadres in"
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
								placeholder="Nummer"
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
								placeholder="Postcode"
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
								placeholder="Vul hier een plaats in Nederland in"
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
								placeholder="Vul hier je e-mailadres in"
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
								placeholder="Vul hier je telefoonnummer in"
							/>
						</label>
					</span>
				</div>
			</form>
			<span className="extraPadding">
				<p>Hoe gaat deze app om met mijn gegevens?</p>
				<PopupButton number="4" />
				<br />
			</span>
			<Link to="/">Terug</Link>
			<Link
				to="/Stap2"
				onClick={event => {
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
				}}
			>
				Volgende
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
