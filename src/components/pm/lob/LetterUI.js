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
				<h1>Bo peticion pa divulga documentonan a base di e Lob den proceso:</h1>
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
					<p>Referente: entregamento di peticion pa divulgacion a base di e Lob</p>
					<br />
					<p>Apreciabel meneer/señora </p>
					<br />
					<p>
						A base di e Landsverordening openbaarheid van bestuur (Lob) ami, {value.userName},
						{value.userJournalist ? " periodista, " : " "}
						{value.userOnBehalfInput.length
							? `trahando den servicio di/ riba encargo di ${value.userOnBehalfInput}, `
							: ""}
						{value.userCompanyNameInput.length ? `den nomber di ${value.userCompanyNameInput}` : ""} ta pidi pa divulga
						informacion cu bo persona tin disponibel, of cu ta resorta bou di bo persona. Mas about ta specifica ki tipo
						di informacion e peticion ta trata.
					</p>
					<br />
					<p>
						E informacion cu mi ta pidi tin di ber cu e tema: {value.subjectLong}.{" "}
						{value.subjectDateStart ? " >E peticion ta trata e periodo di " + value.subjectDateStart : ""}
						{value.subjectDateEnd && value.subjectDateStart ? " te " + value.subjectDateEnd + "." : ""}
					</p>
					<br />

					{value.step6 && (
						<React.Fragment>
							{value.subjectType === "specific" ? (
								<React.Fragment>
									<h3 className="tussenkopje">Informacion</h3>
									<p>Concretamente mi ta pidi (copia di) e documentonan siguiente: </p>
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
										<p>Ademas lo kier ricibi (copia di) e siguiente documentonan relaciona:</p>
									) : (
										""
									)}
									<br />
								</React.Fragment>
							) : (
								<React.Fragment>
									<h3>Informacion</h3>
									<p>
										Concretamente mi ta pidi (un copia di) informacion cu ta relaciona cu e tema riba cual e peticion ta
										dirigi su mes, cual por wordo haya den e siguiente documentonan {value.subjectLong}
										{value.subjectDateStart && " van " + value.subjectDateStart}
										{value.subjectDateEnd && " tot " + value.subjectDateEnd}:
									</p>
								</React.Fragment>
							)}
							<br />

							{value[10] && (
								<p>{`- Vergaderstukken${
									Object.keys(value.subjectMeeting).some(key => value.subjectMeeting[key]) ? ", bou cual: " : ""
								}${Object.keys(value.subjectMeeting)
									.filter(key => value.subjectMeeting[key])
									.map(key => DataCheckbox[key])
									.join(", ")};`}</p>
							)}

							{value[12] && value[13] && (
								<p>{`- Corespondencia interno y anotacionnan di combersacion ${wordsInside &&
									` (${wordsInside.join(", ")})`};`}</p>
							)}

							{value[12] && value[14] && (
								<p>{`- Corespondencia externo y anotacionnan di combersacion ${wordsOutside &&
									`(${wordsOutside.join(", ")})`}${value.subjectLongOrganisation &&
									` entre bo persona su organisacion gubernamental y ${value.subjectLongOrganisation}`};`}</p>
							)}

							{value.subjectInside5 && <p>{"- Memonan, anotacionnan;"}</p>}

							{value[11] && (
								<p>
									{`- Rapportnan, consehonan${
										value.subjectRapportText ? " bou cual: " + value.subjectRapportText : ""
									};  `}{" "}
								</p>
							)}

							{value[15] && (
								<p>{`- Financiële documenten${
									value.subjectFinancialText ? " bou cual: " + value.subjectFinancialText : ""
								};  `}</p>
							)}

							{value[16] && <p>{"- Setnan di dato;"} </p>}
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
						Lo mi aprecia un reaccion por escrito (via carta of e-mail) cu mi peticion pa divulga informacion a base di
						e Lob a wordo ricibi.
						<br />
						<br />
						Si bo persona lo kier haci uzo di e posibilidad pa pidi interesadonan nan opinion si mag haci e informacion
						publico of no, lo mi pidi pa informa mi di esaki di antemano.
					</p>
					<br />
					<p>
						Bo persona lo mester tuma un decision riba e peticion denter di
						{value.subjectMilieu ? " 3" : " 3"} siman.
						{value.subjectMilieu
							? ". Omdat dit verzoek het milieu betreft dient u, in verband met het Verdrag van Aarhus, ongeacht eventuele verdaging en zienswijzen, uiterlijk binnen acht weken een finaal besluit te hebben genomen."
							: "."}{" "}
						Un falta di duna contesta, of un contesta deficiente lo nifica cu mi lo mester tuma accion legal mediante
						bay den obheccion y eventualmente den apelacion na corte.
					</p>
					<br />
					<p>Un saludo cordial, </p>
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
