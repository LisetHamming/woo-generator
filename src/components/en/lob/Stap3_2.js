import React from "react";
// import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";
import PopupButton from "./popups/PopupButton";

function Stap3_2({
	value,
	filteredDataText,
	changeHandlerCheckbox,
	changeHandlerUser,
	changeHandlerSubjectType,
	getCurrentDate
}) {
	// const tagManagerArgs = {
	// 	dataLayer: {
	// 		page: "Stap3_2"
	// 	},
	// 	dataLayerName: "PageDataLayer"
	// };
	// {
	// 	TagManager.dataLayer(tagManagerArgs);
	// }
	return (
		<div className="formLetter">
			<p className="logo">Lob generator</p>
			<h2>Step 3: What information are you looking for?</h2>
			<p>
				Accurately but concisely describe the topic you are requesting information about. Also check that your
				description as it appears in the letter flows well.
			</p>
			<br />
			<span>
				<p>Please note that you can only request information on administrative matters.</p>
				<PopupButton number="10" />
			</span>

			<form>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerSubjectType}
							id="subjectSpecific"
							type="radio"
							checked={value.subjectType === "specific"}
							name="subjectType"
							value="specific"
						/>{" "}
						I want to request specific documents
						<div className="checkmark"></div>
					</label>
					<PopupButton number="11" />
				</span>

				<span>
					<label className="container">
						{" "}
						<input
							onChange={changeHandlerSubjectType}
							id="subjectAll"
							type="radio"
							checked={value.subjectType === "all"}
							name="subjectType"
							value="all"
						/>{" "}
						I want all documents the government agency has on this topic
						<div className="checkmark"></div>
					</label>
					<PopupButton number="12" />
				</span>
			</form>

			<span>
				{" "}
				<p>What documents the government should make public</p>
				<PopupButton number="13" />
			</span>
			<span className="extraPadding">
				{" "}
				<p>Think carefully about which documents are useful or not.</p>
				<PopupButton number="14" />{" "}
			</span>
			<Link to="/EN/lob/Stap3">Go back</Link>
			<Link to="/EN/lob/Stap3_3">Next</Link>
			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default Stap3_2;
