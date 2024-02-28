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

			<h2>Stap 3: Welke informatie zoek je?</h2>
			<p>
				Accurately but concisely describe the topic on which you are requesting information. This can be a fairly narrow topic
				such as "speeding fines," but also broader, such as "traffic safety in your municipality", or "the correspondence that led up to the granting of a permit for X party".
				The next step gives you the opportunity to further narrow down what documents you want to receive.
			</p>
			<br />
			<br />
			<span className="nieuwietje">
				<p>
					Why do I need to be accurate?
					<PopupButton number="8" />
				</p>
			</span>

			<span className="nieuwietje">
				<p>
					{" "}
					Please note that you can only ask for records or data related to an administrative matter.
					<PopupButton number="18" />
				</p>
			</span>
			<br />
			<form>
				{value.userNeedsGoal && (
					<span className="subForm">
						<label className="formInputs">
							Purpose (required)
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
						Subject{" "}
						<input
							size="50"
							value={value.subjectLong}
							onChange={changeHandlerUser}
							id="subjectLong"
							type="text"
							name="subjectinfo"
							placeholder="For example, 'correspondence about granting a building permit' "
						/>
						<br />
					</label>
				</span>
				{errors.includes("subjectLong") && <p id="error">This is a required field, please fill it in.</p>}
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
						This topic is about the environment <PopupButton number="9" />
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<h1>Specific document or everything the agency has about a subject?</h1>
				<p>
					Choose between requesting certain, specific documents or all documents the
					government agency has on the subject.
				</p>

				<br />
				<span className="nieuwietje">
					{" "}
					<p>
						What documents should the government disclose? <PopupButton number="13" />
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
						I want specific documents
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
						I want all documents the government agency has on this topic
						<div className="checkmark"></div>
						<PopupButton number="12" />
					</label>
				</span>
			</form>
			<span className="extraPadding"></span>
			<Link to="/EN/bes/Stap2">Go back</Link>
			<Link
				to="/EN/bes/Stap3_3"
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
				Next
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
