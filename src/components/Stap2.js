import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";
import PopupButton from "./popups/PopupButton";
import SetSelectedAuthorityManual from "./SetSelectedAuthorityManual";

function Stap2({
	value,
	clickHandlerAuthority,
	clickHandlerClearSelectedAuthority,
	filteredDataText,
	getCurrentDate,
	authorities,
	changeHandlerUser,
	manualAuthority,
	setManualAuthority
}) {
	const [searchValue, setSearchValue] = useState("");

	const [errors, setErrors] = useState([]);
	return (
		<div className="formLetter">
			<p className="logo">Wob-generator</p>
			<h2>Stap 2: Welke overheidsinstantie wil je om informatie vragen?</h2>
			<span>
				<p>Kies hier bij welke overheidsinstantie je je Wob-verzoek wilt indienen.</p>
				<PopupButton number="5" />
			</span>

			{errors.includes("selectedAuthority") && (
				<p id="smallError">
					Kies een instantie aan wie je je verzoek wilt sturen. Staat de instantie die je zoekt er niet bij? Vul deze
					dan handmatig in.
				</p>
			)}
			<form>
				{!value.selectedAuthority && (
					<input
						size="50"
						id="searchBarAuthority"
						type="search"
						value={searchValue}
						placeholder="Zoek op naam of plaats"
						onChange={event => setSearchValue(event.target.value)}
					/>
				)}
				{value.selectedAuthority ? (
					<div className="selectedAuthority">
						<p>Controleer de instantie aan wie je Wobt:</p>
						<h3>{value.selectedAuthority.naam}</h3>
						<p>{value.selectedAuthority.url}</p>
						<br />
						{value.selectedAuthority.adres.postcode ? (
							<React.Fragment>
								<p>
									{value.selectedAuthority.adres.postbus ??
										value.selectedAuthority.adres.straat + " " + value.selectedAuthority.adres.huisnummer}
								</p>
								<p>{value.selectedAuthority.adres.postcode + " " + value.selectedAuthority.adres.plaats}</p>
							</React.Fragment>
						) : (
							<React.Fragment>
								<p>
									Er is helaas geen adres bekend bij ons, beschik je zelf wel over een adres van deze instantie, vul dan
									het onderstaande formulier in.
								</p>
								<SetSelectedAuthorityManual value={value} clickHandlerAuthority={clickHandlerAuthority} />
							</React.Fragment>
						)}

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
					<ul id="authorities">
						{authorities
							.filter(
								item =>
									item.naam.toLowerCase().includes(searchValue.toLowerCase()) ||
									item.adres?.plaats?.toLowerCase().includes(searchValue.toLowerCase()) ||
									item.types.some(type => type.toLowerCase().includes(searchValue.toLowerCase()))
							)
							.map(item => (
								<li key={item.systemid}>
									<button type="button" onClick={() => clickHandlerAuthority(item)}>
										<p>{item.naam}</p>
										<p>{item.postAdres?.plaats || item.bezoekAdres?.plaats}</p>
										<p>{item.types}</p>
										<FontAwesomeIcon className="fontIcon" icon={faPlus} />
									</button>
								</li>
							))}
					</ul>
				)}
				{!value.selectedAuthority && (
					<div>
						<br />
						<span>
							<p>Staat de juiste instantie er niet tussen maar beschik je zelf wel over de juiste gegevens?</p>
							<PopupButton number="16" />
						</span>
						<button
							className="buttonStyle"
							type="button"
							value="true"
							onClick={event => setManualAuthority(event.target.value)}
						>
							Vul dan hier de gegevens in
						</button>
					</div>
				)}
			</form>
			{manualAuthority && <SetSelectedAuthorityManual value={value} clickHandlerAuthority={clickHandlerAuthority} />}

			<span>
				<p>Hoe kies ik de juiste overheidsinstantie?</p>
				<PopupButton number="6" />
			</span>
			<span className="lastOfType">
				<p>Aan wie adresseer ik mijn verzoek?</p>
				<PopupButton number="7" />
			</span>
			<Link to="/Stap1">Terug</Link>

			<Link
				to="/Stap3"
				onClick={event => {
					let errors = [];

					if (value.selectedAuthority === null) {
						errors.push("selectedAuthority");
					}

					if (errors.length) {
						event.preventDefault();
						setErrors(errors);
					}
				}}
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
