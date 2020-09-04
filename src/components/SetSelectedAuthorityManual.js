import React from "react";

function SetSelectedAuthorityManual({ value: { selectedAuthority }, setAuthority, handleKeypathChange }) {
	return (
		<div>
			<div>
				<p>Vul hier de gegevens in van de instantie waar je je verzoek aan wilt richten.</p>
				<form>
					<span>
						<label>
							Naam instantie
							<input
								size="50"
								type="text"
								name="selectedAuthority.naam"
								onChange={handleKeypathChange}
								value={selectedAuthority.naam}
							/>
						</label>
					</span>
					<span>
						<label>
							Straatnaam
							<input
								size="40"
								type="text"
								name="selectedAuthority.adres.straat"
								value={selectedAuthority.adres.straat}
								onChange={handleKeypathChange}
							/>
						</label>
						<label>
							Huisnummer
							<input
								size="5"
								onChange={handleKeypathChange}
								name="selectedAuthority.adres.huisnummer"
								type="text"
								value={selectedAuthority.adres.huisnummer}
							/>
						</label>
					</span>

					<span>
						<label>
							Postcode
							<input
								size="15"
								onChange={handleKeypathChange}
								name="selectedAuthority.adres.postcode"
								type="text"
								value={selectedAuthority.adres.postcode}
							/>
						</label>
						<label>
							Plaats
							<input
								size="30"
								onChange={handleKeypathChange}
								type="text"
								name="selectedAuthority.adres.plaats"
								value={selectedAuthority.adres.plaats}
							/>
						</label>
					</span>

					<button type="button" className="buttonStyle" onClick={() => setAuthority(selectedAuthority)}>
						Gebruik gegevens
					</button>
				</form>
			</div>
		</div>
	);
}

export default SetSelectedAuthorityManual;
