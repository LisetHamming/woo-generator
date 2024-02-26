import React, { useState } from "react";
// import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import PopupButton from "../../popups/PopupButton";
import LetterUI from "./LetterUI";

function Stap3({
	value,
	changeHandlerCheckbox,
	changeHandlerUser,
	filteredDataText,
	clickHandlerStep,
	getCurrentDate,
	changeHandlerSubjectType
}) {
	//  error state
	const [errors, setErrors] = useState([]);
	// const tagManagerArgs = {
	// 	dataLayer: {
	// 		page: "Stap3"
	// 	},
	// 	dataLayerName: "PageDataLayer"
	// };
	// TagManager.dataLayer(tagManagerArgs);
	return (
		<div className="formLetter">
			<p className="logo">Woo-generator</p>

			<h2>Paso 3: Ki informacion bo ta buscando?</h2>
			<p>
				Describi precisamente y alabes mas corto cu ta posibel e topico di cual bo ta pidiendo informacion. Por ehempel,
				'boetenan pa infraccionnan di velocidad’, of manera 'tereno di Isla di Oro'. Den e proximo paso bo lo haya e
				oportunidad pa ta mas specifico riba e tipo di documentonan cu bo ta pidiendo cu ta relata na e topico.
			</p>
			<br />
			<br />
			<span className="nieuwietje">
				<p>
					Dicon mi mester ta specifico?
					<PopupButton number="8" />
				</p>
			</span>

			<span className="nieuwietje">
				<p>
					{" "}
					Paga tino: bo por solamente pidi documentonan of informacion cu ta relata na un asunto administrativo
					(bestuurlijke aangelegenheid) cu un organo gubernamental ta encarga cune.
					<PopupButton number="18" />
				</p>
			</span>
			<br />
			<form>
				{value.userNeedsGoal && (
					<span className="subForm">
						<label className="formInputs">
							Meta (rekiri)
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
				<span>
					<label>
						Tema{" "}
						<input
							size="50"
							value={value.subjectLong}
							onChange={changeHandlerUser}
							id="subjectLong"
							type="text"
							name="subjectinfo"
							placeholder="Por ehempel 'corespondencia entre ministernan, ambtenaarnan y partidonan externo y consehonan tocante e incinerator presupuesta"
						/>
						<br />
					</label>
				</span>
				{errors.includes("subjectLong") && <p id="error">Ta rekiri pa yena e informacion aki, por favor yen'e.</p>}
				<span>
					<label className="container nieuwietje">
						<input
							onChange={changeHandlerCheckbox}
							id="subjectMilieu"
							type="checkbox"
							checked={value.subjectMilieu}
							name="subjectInfo"
							value="subjectMilieu"
						/>
						E tema aki tin di ber cu medio ambiente <PopupButton number="9" />
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<h1> Un documento specifico of tur documento cu e organo gubernamental tin riba e topico?</h1>
				<p>
					Scoge si bo kier pidi algun documento specifico of tur documento cu e organo gubernamental tin riba e topico.
				</p>

				<br />
				<span className="nieuwietje">
					{" "}
					<p>
						Ki documentonan e organo gubernamental tin cu haci publico? <PopupButton number="13" />
					</p>
				</span>
				<br />
				<span>
					<label className="container nieuwietje">
						<input
							onChange={changeHandlerSubjectType}
							id="subjectSpecific"
							type="radio"
							checked={value.subjectType === "specific"}
							name="subjectType"
							value="specific"
						/>{" "}
						Mi kier documentonan specifico
						<div className="checkmark"></div>
						<PopupButton number="11" />
					</label>
				</span>

				<span>
					<label className="container nieuwietje">
						<input
							onChange={changeHandlerSubjectType}
							id="subjectAll"
							type="radio"
							checked={value.subjectType === "all"}
							name="subjectType"
							value="all"
						/>
						Mi kier tur e documentonan cu e organo gubernamental tin tocante e topico aki
						<div className="checkmark"></div>
						<PopupButton number="12" />
					</label>
				</span>
			</form>
			<span className="extraPadding"></span>
			<Link to="/PM/lob/Stap2">Bay bek</Link>
			<Link
				to="/PM/lob/Stap3_3"
				onClick={event => {
					clickHandlerStep("step6");
				}}
				/*onClick={event => {
					let errors = [];

					if (value.subjectLong === "") {
						errors.push("subjectLong");
					}

					if (errors.length) {
						event.preventDefault();
						setErrors(errors);
					} else {
						clickHandlerStep("step6");
					}
				}}*/
			>
				Proximo paso
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
export default Stap3;
