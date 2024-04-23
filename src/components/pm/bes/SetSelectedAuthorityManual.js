import React from "react";

function SetSelectedAuthorityManual({ value: { selectedAuthority }, setAuthorityComplete, handleKeypathChange }) {
	return (
		<div className="formInputs" id="manualInput">
			<p>Yena aki e detayenan di e instantia na cual bo kier dirigi bo peticion.</p>
			<form>
				<span>
					<label>
						Nomber di instancia
						<input
							size="50"
							type="text"
							name="selectedAuthority.Bestuursorgaan"
							onChange={handleKeypathChange}
							value={selectedAuthority.Bestuursorgaan}
						/>
					</label>
				</span>
				<span>
					<label>
						Adres of postbus
						<input
							size="50"
							type="text"
							name="selectedAuthority.Postbus"
							value={selectedAuthority.Postbus}
							onChange={handleKeypathChange}
						/>
					</label>
				</span>

				<span>
					<label>
						Codigo postal
						<input
							size="15"
							onChange={handleKeypathChange}
							name="selectedAuthority.Postcode"
							type="text"
							value={selectedAuthority.Postcode}
						/>
					</label>
					<label>
						Luga
						<input
							size="30"
							onChange={handleKeypathChange}
							type="text"
							name="selectedAuthority.Plaats"
							value={selectedAuthority.Plaats}
						/>
					</label>
				</span>
				<span>
					<label>
						Pais
						<input
							size="50"
							onChange={handleKeypathChange}
							type="text"
							name="selectedAuthority.Land"
							value={selectedAuthority.Land}
						/>
					</label>
				</span>
			</form>
		</div>
	);
}

export default SetSelectedAuthorityManual;
