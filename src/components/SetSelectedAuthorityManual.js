import React, { useState } from "react";

function SetSelectedAuthorityManual({ clickHandlerAuthority }) {
	const [manualAuthorityNaam, setManualAuthorityNaam] = useState("");
	const [manualAuthorityAdres, setManualAuthorityAdres] = useState({
		straat: "",
		husinummer: "",
		postcode: "",
		plaats: ""
	});

	const changeHandlerManualAdres = ({ currentTarget: { value, id } }) => {
		setManualAuthorityAdres(current => ({ ...current, [id]: value }));
	};
	const changeHandlerManualNaam = ({ currentTarget: { value, id } }) => {
		setManualAuthorityNaam(value);
	};
	return (
		<div>
			<div>
				<p>Vul hier de gegevens in van de instantie waar je je verzoek aan wilt richten.</p>
				<form>
					<span>
						<label>
							{" "}
							Naam instantie
							<input
								size="50"
								onChange={changeHandlerManualNaam}
								id="selectedAuthorityNaam"
								name="ManualAuthority"
								type="text"
								value={manualAuthorityNaam}
							/>
						</label>
					</span>
					<span>
						<label>
							{" "}
							Straatnaam
							<input
								size="40"
								onChange={changeHandlerManualAdres}
								id="straat"
								name="ManualAuthority"
								type="text"
								value={manualAuthorityAdres.straat}
							/>
						</label>
						<label>
							{" "}
							Huisnummer
							<input
								size="5"
								onChange={changeHandlerManualAdres}
								id="huisnummer"
								name="ManualAuthority"
								type="text"
								value={manualAuthorityAdres.huisnummer}
							/>
						</label>
					</span>

					<span>
						<label>
							{" "}
							Postcode
							<input
								size="15"
								onChange={changeHandlerManualAdres}
								id="postcode"
								name="ManualAuthority"
								type="text"
								value={manualAuthorityAdres.postcode}
							/>
						</label>
						<label>
							{" "}
							Plaats
							<input
								size="30"
								onChange={changeHandlerManualAdres}
								id="plaats"
								name="ManualAuthority"
								type="text"
								value={manualAuthorityAdres.plaats}
							/>
						</label>
					</span>

					<button
						type="button"
						className="buttonStyle"
						onClick={() => clickHandlerAuthority({ naam: manualAuthorityNaam, adres: manualAuthorityAdres })}
					>
						Gebruik gegevens
					</button>
				</form>
			</div>
		</div>
	);
}
export default SetSelectedAuthorityManual;
