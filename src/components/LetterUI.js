import React from "react";
import DataCheckbox from "./DataCheckbox";
import formatDate from "./FormatDate";

function LetterUI({ value, filteredDataText, getCurrentDate }) {
	return (
		<div className="letterComplete">
			<h1>Je Wob-verzoek in wording:</h1>
			<br />
			<div id="letterUI" style={{ fontFamily: "Arial" }}>
				<div className="adressAuthority">
					{value.selectedAuthority && (
						<div>
							<p>{value.selectedAuthority.naam}</p>
							<p>
								{value.selectedAuthority.adres.postbus ??
									(value.selectedAuthority.adres.straat !== undefined
										? value.selectedAuthority.adres.straat + " " + value.selectedAuthority.adres.huisnummer ?? ""
										: "")}
							</p>
							<p>
								{value.selectedAuthority.adres.postcode !== undefined
									? value.selectedAuthority.adres.postcode + " " + value.selectedAuthority.adres.plaats ?? ""
									: ""}
							</p>
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
						inzage in hieronder nader te specificeren documenten of informatie bij of onder u.
					</p>
					<br />
					<p>
						Het betreft documenten of informatie in het kader van de bestuurlijke aangelegenheid: {value.subjectLong}.{" "}
						{value.subjectDateStart
							? " Het verzoek betreft de periode van " + formatDate(new Date(value.subjectDateStart))
							: ""}
						{value.subjectDateEnd ? " tot " + formatDate(new Date(value.subjectDateEnd)) + "." : ""}
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
									<h3>Documenten</h3>
									<p>Concreet vraag ik u om kopie van of inzage in de volgende documenten of informatie:</p>
									<br />
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
										<p>Bovendien wil ik graag kopie van of inzage in de onderliggende documenten, namelijk:</p>
									) : (
										""
									)}
									<br />
								</React.Fragment>
							) : (
								<React.Fragment>
									<h3>Documenten</h3>
									<p>
										Concreet vraag ik u om kopie van of inzage in alle documenten of informatie met betrekking tot{" "}
										{value.subjectLong}
										{value.subjectDateEnd ? " tot " + formatDate(new Date(value.subjectDateEnd)) : ""}, waaronder:
									</p>
								</React.Fragment>
							)}
							<br />
							<p>
								{value[10]
									? `- Vergaderstukken${
											Object.keys(value.subjectMeeting).some(key => value.subjectMeeting[key]) ? ", waaronder: " : ""
									  }${Object.keys(value.subjectMeeting)
											.filter(key => value.subjectMeeting[key])
											.map(key => DataCheckbox[key])
											.join(", ")};`
									: ""}
							</p>
							<p>{value[12] ? "- Correspondentie, gespreksverslagen;" : ""} </p>

							<p>
								{value[13]
									? `- Correspondentie, gespreksverslagen intern (${value.subjectInside1 ? " brieven," : ""} ${
											value.subjectInside2inclusive === "inclusief"
												? " e-mails inclusief bijlagen, "
												: " e-mails exclusief bijlagen, "
									  }${value.subjectInside5 ? " memo’s," : ""} ${value.subjectInside6 ? "gespreksnotities," : ""} ${
											value.subjectInside4 ? "SMS-jes en WhatsApp-berichten" : ""
									  });`
									: ""}
							</p>
							<p>
								{value[14]
									? `- Alle correspondentie (${value.subjectOutside1 ? " brieven," : ""} ${
											value.subjectOutside2inclusive === "inclusief"
												? " e-mails inclusief bijlagen, "
												: " e-mails exclusief bijlagen, "
									  }${value.subjectOutside5 ? " memo’s," : ""} ${value.subjectOutside6 ? "gespreksnotities," : ""} ${
											value.subjectOutside4 ? "SMS-jes en WhatsApp-berichten" : ""
									  });`
									: ""}
							</p>
							<p>{value.subjectInside5 ? "- Memo's, notities;" : ""}</p>

							<p>
								{value[11]
									? `- Rapporten${value.subjectRapportText ? " waaronder: " + value.subjectRapportText : ""};  `
									: ""}{" "}
							</p>
							<p>
								{value[15]
									? `- Financiele documentatie${
											value.subjectFinancialText ? " waaronder: " + value.subjectFinancialText : ""
									  };  `
									: ""}{" "}
							</p>
							<p>{value[16] ? "- Datasets;" : ""} </p>
							<p>{value[17] ? `-  ${value.subjectElseText}` : ""}</p>
							<br />
							<p>
								Mocht u beschikken over andere documenten die - aanvullend of in plaats van gevraagde documenten -
								inzicht in deze bestuurlijke aangelegenheid kunnen geven, dan verzoek ik u die documenten ook te
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
						Graag ontvang ik schriftelijk (per brief of per e-mail) een bevestiging van de ontvangst van dit
						Wob-verzoek.
					</p>
					<br />
					<p>
						U dient binnen de termijn van
						{value.subjectMilieu ? " 2" : " 4"} weken een besluit te nemen op dit verzoek
						{value.subjectMilieu ? ", omdat dit verzoek het milieu betreft." : "."} Geen of een onvoldoende antwoord op
						de vervaldatum zal worden opgevat als een afwijzing.
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
