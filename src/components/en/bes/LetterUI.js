import React from "react";
import spoon from "../../../assets/logo/SpoonLogo.png";
import vvoj from "../../../assets/logo_vvoj.png";
import DataCheckbox from "../../DataCheckbox";

function LetterUI({ value, filteredDataText, getCurrentDate }) {
	const wordsInside = [
		value.subjectInside1 && "brieven",
		value.subjectInside2 && value.subjectInside2inclusive === "inclusief"
			? `e-mails ${value.subjectInside2inclusive} bijlagen`
			: `e-mails maar alleen de e-mails die een bijlage hebben inclusief die bijlagen`,
		//value.subjectInside6 && "gespreksverslagen",
		value.subjectInside4 && "sms'jes en WhatsApp-berichten"
	].filter(Boolean);
	const wordsOutside = [
		value.subjectOutside1 && "brieven",
		value.subjectOutside2 && value.subjectOutside2inclusive === "inclusief"
			? `e-mails ${value.subjectOutside2inclusive} bijlagen`
			: `e-mails maar alleen de e-mails die een bijlage hebben inclusief die bijlagen`,
		//value.subjectOutside6 && "gespreksverslagen",
		value.subjectOutside4 && "sms'jes en WhatsApp-berichten"
	].filter(Boolean);
	return (
		<div className="letterComplete">
			<div className="letterUIHeading">
				<h1>Your Wob BES request in the making:</h1>
				<div className="letterUILogos">
					<img src={vvoj} alt="logo vereniging van onderzoeksjournalisten" />
					<img src={spoon} alt="logo Expertisecentrum SPOON" />
				</div>
			</div>
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
							<p>{value.selectedAuthority.Land}</p>
							<br />
						</div>
					)}
				</div>
				<div>
					<p>
						{value.userCityName}, {getCurrentDate()}
					</p>
					<br />
					<p>Betreft: indiening Woo-verzoek</p>
					<br />
					<p>Zeer geachte heer/mevrouw,</p>
					<br />
					<p>
						Met een beroep op de Wet open overheid (hierna: Woo) verzoek ik, {value.userName},
						{value.userJournalist ? " journalist, " : " "}
						{value.userOnBehalfInput.length ? `werkzaam voor/in opdracht van ${value.userOnBehalfInput}, ` : ""}
						{value.userCompanyNameInput.length ? `u namens ${value.userCompanyNameInput}` : ""} om openbaarmaking van
						hieronder nader te specificeren informatie bij of onder u.
					</p>
					<br />
					<p>
						Het onderwerp waarover ik informatie vraag, is: {value.subjectLong}.{" "}
						{value.subjectDateStart ? " Het verzoek betreft de periode van " + value.subjectDateStart : ""}
						{value.subjectDateEnd && value.subjectDateStart ? " tot " + value.subjectDateEnd + "." : ""}
					</p>
					<br />

					{value.step6 && (
						<React.Fragment>
							{value.subjectType === "specific" ? (
								<React.Fragment>
									<h3 className="tussenkopje">Informatie</h3>
									<p>Concreet vraag ik u om (kopie van) de volgende documenten:</p>
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
										<p>Bovendien ontvang ik graag (kopie van) de volgende onderliggende documenten:</p>
									) : (
										""
									)}
									<br />
								</React.Fragment>
							) : (
								<React.Fragment>
									<h3>Informatie</h3>
									<p>
										Concreet vraag ik u om (kopie van) informatie met betrekking tot het onderwerp van dit verzoek
										neergelegd in de volgende documenten{value.subjectLong}
										{value.subjectDateStart && " van " + value.subjectDateStart}
										{value.subjectDateEnd && " tot " + value.subjectDateEnd}:
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
								<p>{`- Interne correspondentie en gespreksverslagen ${wordsInside &&
									` (${wordsInside.join(", ")})`};`}</p>
							)}

							{value[12] && value[14] && (
								<p>{`- Externe correspondentie en gespreksverslagen ${wordsOutside &&
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
						Woo-verzoek.
						<br />
						<br />
						Mocht u belanghebbenden de gelegenheid gaan bieden tot het geven van zienswijzen dan ontvang ik daarvan
						graag vooraf schriftelijk of per e-mail bericht.
					</p>
					<br />
					<p>
						U dient binnen de termijn van
						{value.subjectMilieu ? " 4" : " 4"} weken een besluit te nemen op dit verzoek
						{value.subjectMilieu
							? ". Omdat dit verzoek het milieu betreft dient u, in verband met het Verdrag van Aarhus, ongeacht eventuele verdaging en zienswijzen, uiterlijk binnen acht weken een finaal besluit te hebben genomen."
							: "."}{" "}
						Geen of onvoldoende antwoord op de vervaldatum zal aanleiding geven tot beroep bij de bestuursrechter wegens
						het niet tijdig nemen van een beslissing.
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
