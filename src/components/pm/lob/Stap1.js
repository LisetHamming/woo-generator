import React, { useState } from "react";
// import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";
import PopupButton from "./popups/PopupButton";
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
			<p className="logo">Generado Lob</p>

			<h2>Paso 1: Yena bo informacion</h2>
			<p>
				Yena bo informacion di contacto aki pa asina e instancia gubernamental por contacta bo. Alabes bo ta scoge con
				bo ta presenta bo peticion pa documentonan na e instancia. Ta importante pa nota cu un peticion pa documentonan
				no por wordo entrega anonimamente.
			</p>
			<br />
			<form>
				<span>
					<label className="container nieuwietje">
						Mi ta un periodista
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
						Mi ta entrega e peticion den nomber di un organisacion
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
							Nomber di organisacion
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
						Mi ta traha pa un organisacion (of medio)
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
							Nomber di organisacion
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
							Nomber
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
					{errors.includes("userName") && <p id="error">Ta necesario pa yena e informacion pidi aki.</p>}
					<span>
						{" "}
						<label>
							{" "}
							Adres
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
							Number
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
					{errors.includes("userAdress") && <p id="error">Ta necesario pa yena e informacion pidi aki.</p>}
					<span>
						<label>
							{" "}
							Codigo postal
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
							Luga
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
					{errors.includes("userCityName") && <p id="error">Ta necesario pa yena e informacion pidi aki.</p>}
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
							Telefon
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
			<Link to="/PM/lob/StapVoorAf">Bay bek</Link>
			<Link
				to="/PM/lob/Stap2"
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
				Paso 2
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
