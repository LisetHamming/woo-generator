import React from "react";

function SetSelectedAuthorityManual({ value: { selectedAuthority }, setAuthorityComplete, handleKeypathChange }) {
	return (
		<div className="formInputs" id="manualInput">
			<p>Enter here the details of the authority to which you wish to address your request.</p>
			<form>
				<span>
					<label>
						Name authority
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
						Address
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
						Postal code
						<input
							size="15"
							onChange={handleKeypathChange}
							name="selectedAuthority.Postcode"
							type="text"
							value={selectedAuthority.Postcode}
						/>
					</label>
					<label>
						Place
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
						Country
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
