import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
// import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";
import PopupButton from "./popups/PopupButton";
import SetSelectedAuthorityManual from "./SetSelectedAuthorityManual";
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
			<p className="logo">Generado Lob</p>

			<h2>Paso 2: Cerca cua instancia gubernamental bo kier pidi documentonan?</h2>
			<span className="nieuwietje">
				<p>
					Aki bo ta scoge cerca cua instancia gubernamental bo ta entrega bo peticion.
					<PopupButton number="5" />
				</p>
			</span>

			{errors.includes("selectedAuthority") && (
				<p id="smallError">
					Scoge cerca cua instancia gubernamental bo kier pidi documentonan. E instancia no t'ey? Bo por yen'e
					manualmente.
				</p>
			)}

			<form>
				{value.selectedAuthority && !showManualAuthority ? (
					<div className="selectedAuthority">
						<p>Check e instancia unda bo kier pidi informacion:</p>
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
								Busca di nobo
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
							placeholder="Busca uzando nomber of luga"
							onChange={event => setSearchValue(event.target.value)}
						/>
						<div className="landenFilter">
							{landenLob.map(item => (
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
												item.Plaats?.toLowerCase().includes(searchValue.toLowerCase())) &&
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
										</li>
									))
							) : (
								<li>Algo no a bay bon cu e buskeda. Si bo mes tin informacion, bo por yen'e aki.</li>
							)}
						</ul>

						<div>
							<br />
							<span>
								<p>
									E instancia corecto no ta disponibel, pero bo mes tin e informacion di contacto unda bo kier haci e
									peticion?
								</p>
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
								Yena e informacion di contacto aki e ora ey
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
					Con mi ta scoge e instancia gubernamental corecto?
					<PopupButton number="6" />
				</p>
			</span>
			<span className="lastOfType nieuwietje">
				<p>
					Na ken mi ta adresa mi peticion?
					<PopupButton number="7" />
				</p>
			</span>
			<Link to="/PM/lob/Stap1">Bay bek</Link>

			<Link
				to="/PM/lob/Stap3"
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
				Paso 3
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
