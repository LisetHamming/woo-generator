import React from "react";
// import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";

function StapExtra({ value, changeHandlerCheckbox, filteredDataText, getCurrentDate }) {
	// const tagManagerArgs = {
	// 	dataLayer: {
	// 		page: "StapExtra"
	// 	},
	// 	dataLayerName: "PageDataLayer"
	// };
	// {
	// 	TagManager.dataLayer(tagManagerArgs);
	// }
	return (
		<div className="formLetter">
			<p className="logo">Woo-generator</p>

			<h2>Extra options</h2>
			<p>
				The options below generally increase your chances of disclosure because they anticipate
				obstacles that may arise in the process. By checking and unchecking the options, you can see in your
				Wob BES request in progress to see which text blocks appear or disappear. Read text blocks carefully to know
				know what the options mean. It can't hurt to include them all, but some options may not be relevant in your
				specific case may not be relevant. In that case, turn them off.
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
						Forwarding
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
						Verbal explanation
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
						Already public information
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
						Potentially sizable request
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
						Provide anonymized
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
						Personal policy opinions
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
						Document summaries
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
						Reasons for refusal
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
						Preferred digital delivery
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
						Add inventory list to decision
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
			</form>
			<span className="extraPadding"></span>
			<Link to="/EN/lob/Stap3_3">Go back</Link>
			<Link to="/EN/lob/StapEinde">Last step!</Link>
			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default StapExtra;
