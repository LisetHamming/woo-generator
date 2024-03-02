import React from "react";
import spoon from "../../../assets/logo/SpoonLogo.png";
import vvoj from "../../../assets/logo/VVOJ_Logo_RGB.png";
import DataCheckbox from "./DataCheckbox";
import DataText from "./DataText";

function LetterUI({ value, getCurrentDate }) {
	const filteredDataText = DataText(value).filter(item => {
		return value[item.id];
	});

	const wordsInside = [
		value.subjectInside1 && "letters",
		value.subjectInside2 && value.subjectInside2inclusive === "inclusive"
			? `emails ${value.subjectInside2inclusive} attachments`
			: `emails but only the emails that have an attachment including those attachments`,
		//value.subjectInside6 && "meeting reports",
		value.subjectInside4 && "text messages and WhatsApp messages"
	].filter(Boolean);

	const wordsOutside = [
		value.subjectOutside1 && "letters",
		value.subjectOutside2 && value.subjectOutside2inclusive === "inclusive"
			? `emails ${value.subjectOutside2inclusive} attachments`
			: `emails but only the emails that have an attachment including those attachments`,
		//value.subjectOutside6 && "meeting reports",
		value.subjectOutside4 && "text messages and WhatsApp messages"
	].filter(Boolean);
	return (
		<div className="letterComplete">
			<div className="letterUIHeading">
				<h1>Your Wob BES request in the making:</h1>
				<div className="letterUILogos">
					<img src={spoon} alt="logo Expertisecentrum SPOON" />
					<img src={vvoj} alt="logo vereniging van onderzoeksjournalisten" />
				</div>
			</div>
			<br />
			<div id="letterUI" style={{ fontFamily: "Arial" }}>
				<div className="adressAuthority">
					{value.selectedAuthority && (
						<div>
							<p className="scribble">{value.selectedAuthority.Bestuursorgaan}</p>
							<p className="scribble">{value.selectedAuthority.Postbus}</p>
							<p className="scribble">
								{value.selectedAuthority.Postcode} {value.selectedAuthority.Plaats}
							</p>
							<p className="scribble">{value.selectedAuthority.Land}</p>
							<br />
						</div>
					)}
				</div>
				<div>
					<p className="scribble">
						{value.userCityName}, {getCurrentDate()}
					</p>
					<br />
					<p>Subject: submission of Wob BES request</p>
					<br />
					<p>Very Distinguished Sir/Madam,</p>
					<br />
					<p>
						Invoking the Open Government Act BES ("Wob BES"), I ({value.userName}) hereby request,{" "}
						{value.userJournalist ? <b className="scribble"> as a journalist, </b> : " "}
						{value.userOnBehalfInput.length ? (
							<b className="scribble">working for/on behalf of {value.userOnBehalfInput}, </b>
						) : (
							""
						)}
						{value.userCompanyNameInput.length ? (
							<b className="scribble">on behalf of {value.userCompanyNameInput} </b>
						) : (
							""
						)}{" "}
						to disclose information in your possession or residing under you to be specified below.
					</p>
					<br />
					<p>
						The topic on which I am requesting information is:{" "}
						<b className="scribble">
							{value.subjectLong}.{" "}
							{value.subjectDateStart ? " The request covers the period between " + value.subjectDateStart : ""}
							{value.subjectDateEnd && value.subjectDateStart ? " until " + value.subjectDateEnd + "." : ""}
						</b>
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
										<p className="scribble">
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
										lay in the following documents
										<b className="scribble">
											{value.subjectLong}
											{value.subjectDateStart && " from " + value.subjectDateStart}
											{value.subjectDateEnd && " until " + value.subjectDateEnd}:
										</b>
									</p>
								</React.Fragment>
							)}
							<br />

							{value[10] && (
								<p className="scribble">{`- Meeting documents${
									Object.keys(value.subjectMeeting).some(key => value.subjectMeeting[key]) ? ", including: " : ""
								}${Object.keys(value.subjectMeeting)
									.filter(key => value.subjectMeeting[key])
									.map(key => DataCheckbox[key])
									.join(", ")};`}</p>
							)}

							{value[12] && value[13] && (
								<p className="scribble">{`- Internal correspondence and interview reports ${wordsInside &&
									` (${wordsInside.join(", ")})`};`}</p>
							)}

							{value[12] && value[14] && (
								<p className="scribble">{`- External correspondence and interview reports ${wordsOutside &&
									`(${wordsOutside.join(", ")})`}${value.subjectLongOrganisation &&
									` between your government agency and ${value.subjectLongOrganisation}`};`}</p>
							)}

							{value.subjectInside5 && <p className="scribble">{"- Memos, notes, memoranda;"}</p>}

							{value[11] && (
								<p className="scribble">
									{`- Reports, advice${value.subjectRapportText ? " including: " + value.subjectRapportText : ""};  `}{" "}
								</p>
							)}

							{value[15] && (
								<p className="scribble">{`- Financial documenten${
									value.subjectFinancialText ? " including: " + value.subjectFinancialText : ""
								};  `}</p>
							)}

							{value[16] && <p className="scribble">{"- Datasets;"} </p>}
							{value[17] && <p className="scribble">{`-  ${value.subjectElseText}`} </p>}
							<br />
						</React.Fragment>
					)}
				</div>
				{value.step9 &&
					filteredDataText.map(item => (
						<div key={item.id}>
							<div>
								<h3 className="tussenkopje scribble">{item.title}</h3>
								<p className="scribble">{item.sentence}</p>
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
						You must decide on my request within 3 weeks after having received it. No response or insufficient response
						by the due date will give rise to an appeal to the administrative law judge for failure to make a timely
						decision.
					</p>
					<br />
					<p>Sincerely, </p>
					<br />
					<p className="userSignature"></p>
					<p className="scribble">{value.userName}</p>
					<p className="scribble">{value.userCompanyName}</p>
					<p className="scribble">
						{value.userAdress} {value.userAdressNumber}
					</p>
					<p className="scribble">
						{value.userZipcode} {value.userCityName}
					</p>
					<p className="scribble">{value.userEmail}</p>
					<p className="scribble">{value.userPhoneNumber}</p>
				</div>
			</div>
		</div>
	);
}
export default LetterUI;
