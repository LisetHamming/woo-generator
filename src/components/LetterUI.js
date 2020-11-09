import React from "react";
import DataCheckbox from "./DataCheckbox";

function LetterUI({ value, filteredDataText, getCurrentDate }) {
	const wordsInside = [
		value.subjectInside1 && "brieven",
		value.subjectInside2 && `e-mails ${value.subjectInside2inclusive} bijlagen`,
		value.subjectInside6 && "gespreksnotities",
		value.subjectInside4 && "SMS-jes en WhatsApp-berichten"
	].filter(Boolean);
	const wordsOutside = [
		value.subjectOutside1 && "brieven",
		value.subjectOutside2 && `e-mails ${value.subjectOutside2inclusive} bijlagen`,
		value.subjectOutside6 && "gespreksnotities",
		value.subjectOutside4 && "SMS-jes en WhatsApp-berichten"
	].filter(Boolean);
	return (
		<div className="letterComplete">
			<h1>Je Wob-verzoek in wording:</h1>
			<br />
			<div id="letterUI" style={{ fontFamily: "Arial" }}>
				<div className="adressAuthority">
					{value.selectedAuthority && (
						<div>
							<p>{value.selectedAuthority.Bestuursorgaan}</p>
							<p>{value.selectedAuthority.Postbus}</p>
							<p>
								{value.selectedAuthority.Postcode} {value.selectedAuthority.Plaats}
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
						{value.userJournalist ? " journalist, " : " "}
						{value.userJournalist && !value.userCompanyName && " op eigen titel"}
						{value.userCompanyNameInput.length ? `u namens ${value.userCompanyNameInput}` : ""} om openbaarmaking van
						hieronder nader te specificeren informatie bij of onder u.
					</p>
					<br />
					<p>
						De bestuurlijke aangelegenheid waarover ik informatie vraag, is uw beleid met betrekking tot:{" "}
						{value.subjectLong}.{" "}
						{value.subjectDateStart ? " Het verzoek betreft de periode van " + value.subjectDateStart : ""}
						{value.subjectDateEnd && value.subjectDateStart ? " tot " + value.subjectDateEnd + "." : ""}
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
									<h3 className="tussenkopje">Informatie</h3>
									<p>Concreet vraag ik u om (kopie van) de volgende informatie:</p>
									<br />
									{value.subjectTextObject.map(item => (
										<p>
											- {item.subjectText}
											{item.subjectDate ? ` (${item.subjectDate})` : ""}
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
										<p>Bovendien ontvang ik graag een kopie van de onderliggende documenten, namelijk:</p>
									) : (
										""
									)}
									<br />
								</React.Fragment>
							) : (
								<React.Fragment>
									<h3>Informatie</h3>
									<p>
										Concreet vraag ik u om (kopie van) alle informatie met betrekking tot {value.subjectLong}
										{value.subjectDateStart && " van " + value.subjectDateStart}
										{value.subjectDateEnd && " tot " + value.subjectDateEnd}, waaronder:
									</p>
								</React.Fragment>
							)}
							<br />

							{value[10] && (
								<p>{`- Vergaderstukken${
									Object.keys(value.subjectMeeting).some(key => value.subjectMeeting[key]) ? ", waaronder: " : ""
								}${Object.keys(value.subjectMeeting)
									.filter(key => value.subjectMeeting[key])
									.map(key => DataCheckbox[key])
									.join(", ")};`}</p>
							)}

							{value[12] && value[13] && (
								<p>{`- Correspondentie, gespreksverslagen intern${wordsInside.length > 0 &&
									` (${wordsInside.join(", ")})`};`}</p>
							)}

							{value[12] && value[14] && (
								<p>{`- Alle externe correspondentie ${wordsOutside.length > 0 &&
									`(${wordsOutside.join(", ")})`}${value.subjectLongOrganisation &&
									` tussen uw overheidsinstantie en ${value.subjectLongOrganisation}`};`}</p>
							)}

							{value.subjectInside5 && <p>{"- Memo's, notities;"}</p>}

							{value[11] && (
								<p>
									{`- Rapporten, adviezen${
										value.subjectRapportText ? " waaronder: " + value.subjectRapportText : ""
									};  `}{" "}
								</p>
							)}

							{value[15] && (
								<p>{`- Financiële documenten${
									value.subjectFinancialText ? " waaronder: " + value.subjectFinancialText : ""
								};  `}</p>
							)}

							{value[16] && <p>{"- Datasets;"} </p>}
							{value[17] && <p>{`-  ${value.subjectElseText}`} </p>}
							<br />
							<p>
								Mocht u beschikken over andere documenten die - aanvullend of in plaats van gevraagde documenten -
								inzicht in deze bestuurlijke aangelegenheid kunnen geven, dan verzoek ik u die documenten ook te
								verstrekken.
							</p>
							<br />
						</React.Fragment>
					)}
				</div>
				{value.step9 &&
					filteredDataText.map(item => (
						<div key={item.id}>
							<div>
								<h3 className="tussenkopje">{item.title}</h3>
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
