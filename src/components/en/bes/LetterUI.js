import React from "react";
import spoon from "../../../assets/logo/SpoonLogo.png";
import vvoj from "../../../assets/logo/VVOJ_Logo_RGB.png";
import DataCheckbox from "../../DataCheckbox";
import DataText from "./DataText";

function LetterUI({ value, getCurrentDate }) {
	const filteredDataText = DataText(value).filter(item => {
		return value[item.id];
	});

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
					<p>Subject: submission of Wob BES request</p>
					<br />
					<p>Very Distinguished Sir/Madam,</p>
					<br />
					<p>
						Invoking the Open Government Act BES ("Wob BES"), I ({value.userName}) hereby request,{" "}
						{value.userJournalist ? " as a journalist, " : " "}
						{value.userOnBehalfInput.length ? `working for/on behalf of ${value.userOnBehalfInput}, ` : ""}
						{value.userCompanyNameInput.length ? `on behalf of ${value.userCompanyNameInput}` : ""} to disclose
						information in your possession or residing under you to be specified below.
					</p>
					<br />
					<p>
						The topic on which I am requesting information is: {value.subjectLong}.{" "}
						{value.subjectDateStart ? " The request covers the period between " + value.subjectDateStart : ""}
						{value.subjectDateEnd && value.subjectDateStart ? " until " + value.subjectDateEnd + "." : ""}
					</p>
					<br />

					{value.step6 && (
						<React.Fragment>
							{value.subjectType === "specific" ? (
								<React.Fragment>
									<h3 className="tussenkopje">The requested information</h3>
									<p>Specifically, I request (copies of) the following documents:</p>
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
										<p>In addition, I would like to receive (copies of) the following underlying documents:</p>
									) : (
										""
									)}
									<br />
								</React.Fragment>
							) : (
								<React.Fragment>
									<h3>Information</h3>
									<p>
										Specifically, I request (copy of) information relating to the subject matter of this request that
										lay in the following documents{value.subjectLong}
										{value.subjectDateStart && " from " + value.subjectDateStart}
										{value.subjectDateEnd && " until " + value.subjectDateEnd}:
									</p>
								</React.Fragment>
							)}
							<br />

							{value[10] && (
								<p>{`- Meeting documents${
									Object.keys(value.subjectMeeting).some(key => value.subjectMeeting[key]) ? ", including: " : ""
								}${Object.keys(value.subjectMeeting)
									.filter(key => value.subjectMeeting[key])
									.map(key => DataCheckbox[key])
									.join(", ")};`}</p>
							)}

							{value[12] && value[13] && (
								<p>{`- Internal correspondence and interview reports ${wordsInside &&
									` (${wordsInside.join(", ")})`};`}</p>
							)}

							{value[12] && value[14] && (
								<p>{`- External correspondence and interview reports ${wordsOutside &&
									`(${wordsOutside.join(", ")})`}${value.subjectLongOrganisation &&
									` between your government agency and ${value.subjectLongOrganisation}`};`}</p>
							)}

							{value.subjectInside5 && <p>{"- Memos, notes, memoranda;"}</p>}

							{value[11] && (
								<p>
									{`- Reports, advice${value.subjectRapportText ? " waaronder: " + value.subjectRapportText : ""};  `}{" "}
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
								<h3 className="header">{item.title}</h3>
								<p>{item.sentence}</p>
								<br />
							</div>
						</div>
					))}
				<div>
					<p>
						Please acknowledge in writing (by letter or email) receipt of this Wob BES request.
						<br />
						<br />
						Should you offer interested parties the opportunity to give their views on the disclosure, I would like to
						be notified in advance by writing or by e-mail.
					</p>
					<br />
					<p>
						You must decide on my request within
						{value.subjectMilieu ? " 3" : " 3"} weeks after having received it.
						{value.subjectMilieu
							? " Omdat dit verzoek het milieu betreft dient u, in verband met het Verdrag van Aarhus, ongeacht eventuele verdaging en zienswijzen, uiterlijk binnen acht weken een finaal besluit te hebben genomen."
							: "."}{" "}
						No response or insufficient response by the due date will give rise to an appeal to the administrative law
						judge for failure to make a timely decision.
					</p>
					<br />
					<p>Sincerely, </p>
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
