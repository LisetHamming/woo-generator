import React from "react";
import formatDate from "./FormatDate";

function LetterUI({ value, filteredDataText, getCurrentDate }) {
	return (
		<div className="letterComplete">
			<h1>Voorbeeld van je Wob-verzoek:</h1>
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
						{value.userCompanyNameInput.length ? `u namens ${value.userCompanyNameInput}` : ""} om openbaarmaking van
						hieronder nader te specificeren documenten of informatie bij of onder u
						{value.userGoalInput.length ? ` over ${value.userGoalInput}` : ""}.
					</p>
					<br />
					<p>
						Het betreft documenten of informatie in het kader van de bestuurlijke aangelegenheid: {value.subjectLong}.
						Het verzoek ziet op
						{value.subjectDateStart ? " de periode " + formatDate(new Date(value.subjectDateStart)) : ""}
						{value.subjectDateEnd ? " tot " + formatDate(new Date(value.subjectDateEnd)) : ""}.
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
									<p>Concreet vraag ik u om kopie van of inzage in de volgende documenten of informatie:</p>
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
										<p>Bovendien wil ik bij bovengenoemd(e) stuk(ken) graag de volgende onderliggende documenten:</p>
									) : (
										""
									)}
								</React.Fragment>
							) : (
								<React.Fragment>
									<p>Concreet vraag ik u om kopie van of inzage in de volgende documenten of informatie:</p>
								</React.Fragment>
							)}
							<p>
								{value[10]
									? `- Vergaderstukken (${value[18] ? "uitnodigingen, presentielijsten" : ""} ${
											value[19] ? ", agenda’s" : ""
									  } ${value[21] ? ", ingekomen stukken" : ""}${value[22] ? ", adviezen" : ""}${
											value[23] ? ", besluiten, besluitenlijsten, notulen)" : ""
									  };`
									: ""}
							</p>

							<p>
								{value[11]
									? "- Rapporten, waaronder: project- en programmaplannen; adviezen, zowel extern als intern; onderzoeksrapporten en auditrapportages; voortgangsrapportages; evaluaties;"
									: ""}
							</p>
							<p>{value[11] ? "- Presentaties;" : ""} </p>
							<p>{value[15] ? "- Begrotingen, jaarverslagen en andere financiële documentatie;" : ""} </p>

							<p>
								{value[13]
									? `- Alle interne correspondentie (${value.subjectInside1 ? "brieven," : ""} ${
											value.subjectInside2 ? " e-mails [incl./excl. bijlagen]," : ""
									  }${value.subjectInside6 ? " gespreksverslagen," : ""} ${
											value.subjectInside4 ? "SMS-jes en Whatsapp-berichten" : ""
									  }) met betrekking tot deze bestuurlijke aangelegenheid;`
									: ""}{" "}
							</p>
							<p>
								{value[14]
									? `- Alle correspondentie (${value.subjectInside1 ? "brieven," : ""} ${
											value.subjectInside2 ? " e-mails [incl./excl. bijlagen]," : ""
									  }${value.subjectInside6 ? " gespreksverslagen," : ""} ${
											value.subjectInside4 ? "SMS-jes en Whatsapp-berichten" : ""
									  }) met betrekking tot deze bestuurlijke aangelegenheid`
									: ""}{" "}
								{value.subjectLongOrganisation
									? "tussen u en in ieder geval de navolgende partijen:" + " " + value.subjectLongOrganisation
									: ""}
								;
							</p>

							<p>{value[16] ? "- Datasets;" : ""} </p>
							<p>{value[17] ? `-  ${value.subjectElseText}` : ""}</p>
							<br />
							{value.subjectType === "all" && value.subjectTextObject && (
								<div>
									<p>Bovendien wil ik graag de onderliggendedocumenten, namelijk:</p>
									{value.subjectTextObject.map(item => (
										<p>
											- {item.subjectText}
											{item.subjectDate ? ` (${formatDate(new Date(item.subjectDate))})` : ""}
										</p>
									))}
									<br />
								</div>
							)}
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
					<p>
						Graag ontvang ik schriftelijk per brief of per e-mail een bevestiging van de ontvangst van dit Wob-verzoek.
					</p>
					<br />
					<p>
						U wordt verzocht binnen de wettelijke termijn van {value.subjectMilieu ? "2" : "4"} weken op dit verzoek te
						beslissen{value.subjectMilieu ? ", omdat dit verzoek het milieu betreft" : "."}. Geen of een onvoldoende
						antwoord op de vervaldatum zal worden opgevat als een afwijzing.
					</p>
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
