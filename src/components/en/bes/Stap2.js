import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";
import PopupButton from "./popups/PopupButton";
import SetSelectedAuthorityManual from "./SetSelectedAuthorityManual";
const tagManagerArgs = {
	dataLayer: {
		page: "Stap2"
	},
	dataLayerName: "PageDataLayer"
};
function Stap2({
	value,
	setAuthority,
	clickHandlerClearSelectedAuthority,
	filteredDataText,
	getCurrentDate,
	authorities,
	handleKeypathChange
}) {
	const [showManualAuthority, setShowManualAuthority] = useState(false);
	const [AuthorityComplete, setAuthorityComplete] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [errors, setErrors] = useState([]);
	const [selectedLand, setSelectedLand] = useState("");

	const landenBes = ["Bonaire", "Saba", "Sint Eustatius"];

	TagManager.dataLayer(tagManagerArgs);
	return (
		<div className="formLetter">
			<p className="logo">Wob BES generator</p>

			<h2>Step 2: Which government agency do you want to ask for information?</h2>
			<span className="nieuwietje">
				<p>
					Choose which government agency you want to submit your Wob BES request to here.
					<PopupButton number="5" />
				</p>
			</span>

			{errors.includes("selectedAuthority") && (
				<p id="smallError">
					Choose an agency to whom you want to send your request. Is the agency you are looking for not listed? Then
					fill the details manually in.
				</p>
			)}

			<form>
				{value.selectedAuthority && !showManualAuthority ? (
					<div className="selectedAuthority">
						<p>Double check the agency to which you are submitting the Wob BES request:</p>
						<h3>{value.selectedAuthority.Bestuursorgaan}</h3>
						<p>{value.selectedAuthority.Website}</p>
						<br />

						<p> {value.selectedAuthority.Postbus}</p>
						<p>
							{value.selectedAuthority.Postcode} {value.selectedAuthority.Plaats}
						</p>
						<p>{value.selectedAuthority.Land}</p>
						<p>{value.selectedAuthority.value}</p>
						<div>
							<button
								className="buttonStyle"
								type="button"
								onClick={() => {
									setSearchValue("");
									clickHandlerClearSelectedAuthority(value.selectedAuthority);
								}}
							>
								Search again
							</button>
						</div>
					</div>
				) : (
					<>
						<input
							size="50"
							id="searchBarAuthority"
							type="search"
							value={searchValue}
							placeholder="Search by name or place"
							onChange={event => setSearchValue(event.target.value)}
						/>
						<div className="landenFilter">
							{landenBes.map(item => (
								<button key={item} type="button" onClick={e => setSelectedLand(item)}>
									{item}
								</button>
							))}
						</div>

						<ul id="authorities">
							{authorities ? (
								authorities
									.filter(
										item =>
											(item.Bestuursorgaan.toLowerCase().includes(searchValue.toLowerCase()) ||
												item.Plaats.toLowerCase().includes(searchValue.toLowerCase())) &&
											item.Wet.includes("Wob BES") &&
											item.Land.includes(selectedLand)
									)
									.sort((a, b) => a.Bestuursorgaan.localeCompare(b.Bestuursorgaan))
									.map(item => (
										<li key={item.id}>
											<button
												type="button"
												onClick={() => {
													setAuthority(item);
												}}
											>
												<p>{item.Bestuursorgaan}</p>
												<FontAwesomeIcon className="fontIcon" icon={faPlus} />
											</button>
										</li>
									))
							) : (
								<li>
									Oops! We couldn't find what you were looking for. If you have the details at hand, please fill them
									out manually here.
								</li>
							)}
						</ul>

						<div>
							<br />
							<span>
								<p>Is the right agency not listed, but do you have the contact details yourself?</p>
							</span>
							<button
								className="buttonStyle"
								type="button"
								onClick={() => {
									setAuthority({
										Bestuursorgaan: "",
										Postbus: "",
										Postcode: "",
										Plaats: "",
										Land: "",
										Website: "",
										Emailadres: ""
									});
									setShowManualAuthority(true);
								}}
							>
								Then fill in the details here
							</button>
						</div>
					</>
				)}
			</form>

			{showManualAuthority && (
				<SetSelectedAuthorityManual
					value={value}
					setAuthority={authority => {
						setAuthority(authority);
						setShowManualAuthority(false);
					}}
					handleKeypathChange={handleKeypathChange}
				/>
			)}

			<span className="nieuwietje">
				<p>
					How do I choose the right government agency?
					<PopupButton number="6" />
				</p>
			</span>
			<span className="lastOfType nieuwietje">
				<p>
					To who do I address my request?
					<PopupButton number="7" />
				</p>
			</span>
			<Link to="/EN/bes/Stap1">Go back</Link>

			<Link
				to="/EN/bes/Stap3"
				/*onClick={event => {
					let errors = [];

					if (value.selectedAuthority === null) {
						errors.push("selectedAuthority");
					}

					if (errors.length) {
						event.preventDefault();
						setErrors(errors);
					}
				}}*/
			>
				Go to Step 3
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

export default Stap2;
