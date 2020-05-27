import React from "react";
import DataCheckbox from "./DataCheckbox";
import formatDate from "./FormatDate";

function LetterUI({ value, filteredDataText, getCurrentDate }) {
	return (
		<div className="letterComplete">
			<h1>Je Wob-verzoek:</h1>
			<div id="letterUI" style={{ fontFamily: "Arial" }}>
				<div className="adressAuthority">
					{value.selectedAuthority && (
						<div>
							<p>{value.selectedAuthority.naam}</p>
							<p>
								{value.selectedAuthority.adres.postbus ??
									value.selectedAuthority.adres.straat + " " + value.selectedAuthority.adres.huisnummer}
							</p>
							<p>{value.selectedAuthority.adres.postcode + " " + value.selectedAuthority.adres.plaats}</p>
							<br />
						</div>
					)}
				</div>
				<div>
					<p>
						{value.userCityName}, {getCurrentDate()}
					</p>
					<br />
					<p>Betreft: Wob-verzoek</p>
					<br />
					<p>Zeer geachte heer/mevrouw,</p>
					<br />
					<p>
						Met een beroep op de Wet openbaarheid van bestuur (hierna: Wob) verzoek ik, {value.userName},
						{value.userJournalist ? " journalist, " : ""}
						{value.userCompanyNameInput.length ? `u namens ${value.userCompanyNameInput}` : ""} om openbaarmaking van of
						inzage in hieronder nader te specificeren documenten of informatie bij of onder u
						{value.userGoalInput.length ? ` over ${value.userGoalInput}` : ""}.
					</p>
					<br />
					<p>
						Het betreft documenten of informatie in het kader van de bestuurlijke aangelegenheid: {value.subjectLong}.
					</p>
					<br />
					<p>
						Dit verzoek wordt gedaan op basis van de Wet openbaarheid van bestuur. Daaruit vloeit voort dat u binnen{" "}
						{value.subjectMilieu ? "2" : "4"} weken een besluit moet nemen op dit verzoek
						{value.subjectMilieu ? ", bla bla nieuwe zin over milieu." : "."}
					</p>
					<br />
					<p>
						In de afhandeling van dit verzoek vraag ik u rekening te houden met het publieke belang van de journalistiek
						als controleur van een goede en democratische bestuursvoering.
					</p>
					<br />
					{value.step6 && (
						<React.Fragment>
							{value.subjectType === "specific" ? (
								<React.Fragment>
									<p>Concreet vraag ik u om:</p>
									{value.subjectTextObject.map(item => (
										<p>
											- {item.subjectText}
											{item.subjectDate ? ` (${formatDate(new Date(item.subjectDate))})` : ""}
										</p>
									))}
									<br />
									{value[10] ||
									value[11] ||
									value[12] ||
									value[13] ||
									value[14] ||
									value[15] ||
									value[16] ||
									value[17] ? (
										<p>Bovendien wil ik graag de onderliggende documenten, namelijk:</p>
									) : (
										""
									)}
								</React.Fragment>
							) : (
								<React.Fragment>
									<p>
										Concreet vraag ik u om alle bij of onder u rustende documenten inzake {value.subjectLong}
										{value.subjectDateStart ? "in de periode " + formatDate(new Date(value.subjectDateStart)) : ""}
										{value.subjectDateEnd ? " tot " + formatDate(new Date(value.subjectDateEnd)) : ""}, waaronder:
									</p>
								</React.Fragment>
							)}

							<p>
								{value[10]
									? `- Vergaderstukken ${value.subjectMeeting === "" ? "" : ", waaronder:"} ${Object.keys(
											value.subjectMeeting
									  )
											.filter(key => value.subjectMeeting[key])
											.map(key => DataCheckbox[key])
											.join(", ")};`
									: ""}
							</p>
							<p>{value[12] ? "- Gespreksverslagen;" : ""} </p>
							<p>
								{value[11]
									? "- Rapporten, waaronder: project- en programmaplannen; adviezen, zowel extern als intern; onderzoeksrapporten en auditrapportages; voortgangsrapportages; evaluaties;"
									: ""}
							</p>
							<p>{value[11] ? "- Presentaties;" : ""} </p>
							<p>{value[15] ? "- Begrotingen, jaarverslagen en andere financiële documentatie;" : ""} </p>
							<p>{value[16] ? "- Datasets;" : ""} </p>
							<p>
								{value[13]
									? `- Alle interne correspondentie (incl./excl. ${value.subjectInside1 ? " brieven," : ""} ${
											value.subjectInside2 ? " e-mails," : ""
									  }${value.subjectInside5 ? " memo’s," : ""} ${value.subjectInside6 ? "gespreksnotities," : ""} ${
											value.subjectInside4 ? "smsjes en WhatsAppjes" : ""
									  }) met betrekking tot ${value.subjectLong};`
									: ""}{" "}
							</p>
							<p>
								{value[14]
									? `- Alle correspondentie (e-mails, brieven, memo’s, nota’s, notities en anderszins schriftelijk gewisselde stukken) met derden met betrekking tot ${
											value.subjectLong
									  } ${
											value.subjectLongOrganisation
												? "tussen u en in ieder geval de navolgende partijen" + " " + value.subjectLongOrganisation
												: ""
									  };`
									: ""}
							</p>
							<p>{value[17] ? `-  ${value.subjectElseText}` : ""}</p>
							<br />
							<p>
								Mocht u beschikken over andere documenten die – aanvullend of in plaats van gevraagde documenten -
								inzicht in deze bestuurlijke aangelegenheid te kunnen geven, dan verzoek ik u die documenten ook te
								verstrekken.
							</p>
						</React.Fragment>
					)}
				</div>
				{value.step9 &&
					filteredDataText.map(item => (
						<div key={item.id}>
							<div>
								<h3>{item.title}</h3>
								<p>{item.sentence}</p>
								<br />
							</div>
						</div>
					))}
				<div>
					<p>Ik verzoek u de ontvangst van dit verzoek schriftelijk per email of brief aan mij te bevestigen.</p>
					<br />
					<p>Met vriendelijke groet, </p>
					<br />
					<p className="userSignature"></p>
					<p>{value.userName}</p>
					<p>{value.userCompanyName}</p>
					<p>
						{value.userAdress} {value.userAdressNumber}
					</p>
					<p>
						{value.userZipcode} {value.userCityName}
					</p>
					<p>{value.userEmail}</p>
					<p>{value.userPhoneNumber}</p>
				</div>
			</div>
		</div>
	);
}
export default LetterUI;
