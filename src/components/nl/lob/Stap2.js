import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
// import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import PopupButton from "../../popups/PopupButton";
import SetSelectedAuthorityManual from "../../SetSelectedAuthorityManual";
import LetterUI from "./LetterUI";
// const tagManagerArgs = {
// 	dataLayer: {
// 		page: "Stap2"
// 	},
// 	dataLayerName: "PageDataLayer"
// };
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

	const landenLob = ["Aruba", "Curaçao", "Sint Maarten"];

	// TagManager.dataLayer(tagManagerArgs);
	return (
		<div className="formLetter">
			<p className="logo">Woo-generator</p>

			<h2>Stap 2: Welke overheidsinstantie wil je om informatie vragen?</h2>
			<span className="nieuwietje">
				<p>
					Kies hier bij welke overheidsinstantie je je Woo-verzoek wilt indienen.
					<PopupButton number="5" />
				</p>
			</span>

			{errors.includes("selectedAuthority") && (
				<p id="smallError">
					Kies een instantie aan wie je je verzoek wilt sturen. Staat de instantie die je zoekt er niet bij? Vul deze
					dan handmatig in.
				</p>
			)}

			<form>
				{value.selectedAuthority && !showManualAuthority ? (
					<div className="selectedAuthority">
						<p>Controleer de instantie waar je het Woo-verzoek indient:</p>
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
								Zoek opnieuw
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
							placeholder="Zoek op naam of plaats"
							onChange={event => setSearchValue(event.target.value)}
						/>
						<div className="landenFilter">
							{landenLob.map(item => (
								<button key={item} type="button" onClick={e => setSelectedLand(item)}>
									{item}
								</button>
							))}
						</div>
						{console.log(searchValue)}

						<ul id="authorities">
							{authorities ? (
								authorities
									.filter(
										item =>
											(item.Bestuursorgaan.toLowerCase().includes(searchValue.toLowerCase()) ||
												item.Plaats.toLowerCase().includes(searchValue.toLowerCase())) &&
											item.Wet.includes("Lob") &&
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
											{console.log(authorities)}
										</li>
									))
							) : (
								<li>
									Er gaat iets niet goed bij het ophalen van de informatie. Als je zelf gegevens hebt, kan je die
									invullen.
								</li>
							)}
						</ul>

						<div>
							<br />
							<span>
								<p>Staat de juiste instantie er niet tussen, maar beschik je zelf wel over de juiste gegevens?</p>
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
										Website: "",
										Land: "",
										Emailadres: ""
									});
									setShowManualAuthority(true);
								}}
							>
								Vul dan hier de gegevens in
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
					Hoe kies ik de juiste overheidsinstantie?
					<PopupButton number="6" />
				</p>
			</span>
			<span className="lastOfType nieuwietje">
				<p>
					Aan wie adresseer ik mijn verzoek?
					<PopupButton number="7" />
				</p>
			</span>
			<Link to="/NL/lob/Stap1">Terug</Link>

			<Link
				to="/NL/lob/Stap3"
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
				Stap 3
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
