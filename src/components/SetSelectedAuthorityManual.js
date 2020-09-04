import { set } from "lodash/fp";
import React, { useState } from "react";

function SetSelectedAuthorityManual({ clickHandlerAuthority }) {
	const [manualAuthority, setManualAuthority] = useState({
		naam: "",
		adres: {
			straat: "",
			husinummer: "",
			postcode: "",
			plaats: ""
		}
	});

	const changeHandlerManual = ({ currentTarget: { name, value } }) => {
		setManualAuthority(set(name, value));
	};

	return (
		<div>
			<div>
				<p>Vul hier de gegevens in van de instantie waar je je verzoek aan wilt richten.</p>
				<form>
					<span>
						<label>
							Naam instantie
							<input size="50" type="text" name="name" onChange={changeHandlerManual} value={manualAuthority.name} />
						</label>
					</span>
					<span>
						<label>
							Straatnaam
							<input
								size="40"
								type="text"
								name="adres.straat"
								value={manualAuthority.adres.straat}
								onChange={changeHandlerManual}
							/>
						</label>
						<label>
							Huisnummer
							<input
								size="5"
								onChange={changeHandlerManual}
								id="huisnummer"
								name="ManualAuthority"
								type="text"
								value={manualAuthority.adres.huisnummer}
							/>
						</label>
					</span>

					<span>
						<label>
							Postcode
							<input
								size="15"
								onChange={changeHandlerManual}
								id="postcode"
								name="ManualAuthority"
								type="text"
								value={manualAuthority.adres.postcode}
							/>
						</label>
						<label>
							Plaats
							<input
								size="30"
								onChange={changeHandlerManual}
								type="text"
								name="adres.plaats"
								value={manualAuthority.adres.plaats}
							/>
						</label>
					</span>

					<button type="button" className="buttonStyle" onClick={() => clickHandlerAuthority(manualAuthority)}>
						Gebruik gegevens
					</button>
				</form>
			</div>
		</div>
	);
}

export default SetSelectedAuthorityManual;
