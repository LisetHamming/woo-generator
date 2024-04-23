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
		value.subjectInside1 && "cartanan",
		value.subjectInside2 && value.subjectInside2inclusive === "incluyendo"
			? `e-mails ${value.subjectInside2inclusive} bijlagen`
			: `e-mailnan, pero solamente esunnan cu tin filenan adhunta, incluyendo e filenan ey`,
		//value.subjectInside6 && "gespreksverslagen",
		value.subjectInside4 && "mensahenan di SMS, WhatsApp of otro tipo di mensahenan di texto"
	].filter(Boolean);
	const wordsOutside = [
		value.subjectOutside1 && "cartanan",
		value.subjectOutside2 && value.subjectOutside2inclusive === "incluyendo"
			? `e-mailnan ${value.subjectOutside2inclusive} bijlagen`
			: `e-mailnan, pero solamente esunnan cu tin filenan adhunta, incluyendo e filenan ey`,
		//value.subjectOutside6 && "gespreksverslagen",
		value.subjectOutside4 && "mensahenan di SMS, WhatsApp of otro tipo di mensahenan di texto"
	].filter(Boolean);
	return (
		<div className="letterComplete">
			<div className="letterUIHeading">
				<h1>Bo peticion pa divulga documentonan a base di e Lob te awo:</h1>
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
					<p>Referente: entregamento di peticion pa divulgacion a base di e Lob</p>
					<br />
					<p>Apreciabel meneer/señora </p>
					<br />
					<p>
						A base di e Landsverordening openbaarheid van bestuur (Lob) ami, {value.userName},
						{value.userJournalist ? <b className="scribble"> periodista, </b> : " "}
						{value.userOnBehalfInput.length ? (
							<b className="scribble">trahando den servicio di/ riba encargo di {value.userOnBehalfInput}, </b>
						) : (
							""
						)}
						{value.userCompanyNameInput.length ? (
							<b className="scribble">den nomber di {value.userCompanyNameInput}</b>
						) : (
							""
						)}{" "}
						ta pidi pa divulga informacion cu bo persona tin disponibel, of cu ta resorta bou di bo persona. Mas about
						ta specifica ki tipo di informacion e peticion ta trata.
					</p>
					<br />
					<p>
						E informacion cu mi ta pidi tin di ber cu e tema:
						<b className="scribble">
							{value.subjectLong}.{" "}
							{value.subjectDateStart ? " >E peticion ta trata e periodo di " + value.subjectDateStart : ""}
							{value.subjectDateEnd && value.subjectDateStart ? " te " + value.subjectDateEnd + "." : ""}
						</b>
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
										dirigi su mes, cual por wordo haya den e siguiente documentonan{" "}
										<b className="scribble">
											{value.subjectLong}
											{value.subjectDateStart && " van " + value.subjectDateStart}
											{value.subjectDateEnd && " tot " + value.subjectDateEnd}:
										</b>
									</p>
								</React.Fragment>
							)}
							<br />

							{value[10] && (
								<p className="scribble">{`- Documentonan di reunionnan${
									Object.keys(value.subjectMeeting).some(key => value.subjectMeeting[key]) ? ", bou cual: " : ""
								}${Object.keys(value.subjectMeeting)
									.filter(key => value.subjectMeeting[key])
									.map(key => DataCheckbox[key])
									.join(", ")};`}</p>
							)}

							{value[12] && value[13] && (
								<p className="scribble">{`- Corespondencia interno y anotacionnan di combersacion ${wordsInside &&
									` (${wordsInside.join(", ")})`};`}</p>
							)}

							{value[12] && value[14] && (
								<p className="scribble">{`- Corespondencia externo y anotacionnan di combersacion ${wordsOutside &&
									`(${wordsOutside.join(", ")})`}${value.subjectLongOrganisation &&
									` entre bo persona su organisacion gubernamental y ${value.subjectLongOrganisation}`};`}</p>
							)}

							{value.subjectInside5 && <p className="scribble">{"- Memonan, anotacionnan;"}</p>}

							{value[11] && (
								<p className="scribble">
									{`- Rapportnan, consehonan${
										value.subjectRapportText ? " bou cual: " + value.subjectRapportText : ""
									};  `}{" "}
								</p>
							)}

							{value[15] && (
								<p className="scribble">{`- Documentonan financiero${
									value.subjectFinancialText ? " bou cual: " + value.subjectFinancialText : ""
								};  `}</p>
							)}

							{value[16] && <p className="scribble">{"- Setnan di dato;"} </p>}
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
						Lo mi aprecia un reaccion por escrito (via carta of e-mail) cu mi peticion pa divulga informacion a base di
						e Lob a wordo ricibi.
						<br />
						<br />
						Si bo persona lo kier haci uzo di e posibilidad pa pidi interesadonan nan opinion si mag haci e informacion
						publico of no, lo mi pidi pa informa mi di esaki di antemano.
					</p>
					<br />
					<p>
						Bo persona lo mester tuma un decision riba e peticion denter di 3 siman. Un falta di duna contesta, of un
						contesta deficiente lo nifica cu mi lo mester tuma accion legal mediante bay den obheccion y eventualmente
						den apelacion na corte.
					</p>
					<br />
					<p>Un saludo cordial, </p>
					<br />
					<div className="letterUIAddress">
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
		</div>
	);
}
export default LetterUI;
