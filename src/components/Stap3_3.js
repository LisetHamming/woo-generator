import React from "react";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";
import PopupButton from "./popups/PopupButton";

function Stap3_3({
	value,
	clickHandlerSubjectText,
	clickHandlerEmptySubjectText,
	filteredDataText,
	changeHandlerCheckbox,
	changeHandlerUser,
	changeHandlerSubjectType,
	clickHandlerStep,
	getCurrentDate,
	changeHandlerRadio,
	changeHandlerSubjectMeeting,
	clickHandlerClearPeriodDate
}) {
	return (
		<div className="formLetter">
			<p className="logo">Wob-generator</p>
			<h2>
				Stap 3:
				{value.subjectType === "specific"
					? " Welke informatie zoek je? (specifieke documenten)"
					: " Welke informatie zoek je? (alle documenten)"}
			</h2>
			{value.subjectType === "specific" && (
				<p>
					Omschrijf zo nauwkeurig mogelijk de titel, auteur en datum van het document of de documenten waar je naar op
					zoek bent. Geef ook aan of en zo ja welke onderliggende documenten je wilt ontvangen.
				</p>
			)}
			{value.subjectType === "all" && (
				<div>
					<p>
						Kies hier het type documenten dat je over het onderwerp wilt ontvangen. Vervolgens kun je je verzoek verder
						afbakenen door aan te geven in welke periode je geïnteresseerd bent.
					</p>
					<br />
					<span>
						<p>Waarom zou ik mijn verzoek willen beperken?</p>
						<PopupButton number="14" />
					</span>
				</div>
			)}

			<form>
				{value.subjectType === "specific" && (
					<div>
						<span className="objectInput">
							<label>
								Titel en auteur
								<input
									size="20"
									id="subjectSpecificText"
									value={value.subjectSpecificText}
									onChange={changeHandlerUser}
									type="textarea"
								/>
								<br />
							</label>

							<label>
								Datum <br />
								<input
									id="subjectSpecificDate"
									value={value.subjectSpecificDate}
									onChange={changeHandlerUser}
									type="textarea"
								/>
								<br />
							</label>
							<button type="button" className="buttonStyle" onClick={clickHandlerSubjectText}>
								Voeg toe
							</button>
						</span>
						{value.subjectTextObject.map((item, index) => (
							<span className="object" key={index}>
								<p>
									{item.subjectText} {item.subjectDate && item.subjectDate}
								</p>
								<button type="button" className="buttonStyle" value={index} onClick={clickHandlerEmptySubjectText}>
									Verwijder
								</button>
							</span>
						))}
					</div>
				)}
				{value.subjectType === "specific" && (
					<div>
						<h1>Onderliggende stukken</h1>
						<p>Als je ook onderliggende stukken wil, vink dan aan welke.</p>
						<br />
						<span>
							<p>Denk goed na welke documenten, zoals e-mails, wel of niet nuttig zijn.</p>
							<PopupButton number="14" />
						</span>
					</div>
				)}
				<br />
				<div>
					<span>
						<label className="container">
							<input
								onChange={changeHandlerCheckbox}
								id="text1"
								type="checkbox"
								checked={value[10]}
								name="checkText"
								value="10"
							/>
							Vergaderstukken
							<br />
							<div className="checkmark"></div>{" "}
						</label>
					</span>
					{value[10] && (
						<div>
							<span className="subForm ">
								<label className="container">
									<input
										onChange={changeHandlerSubjectMeeting}
										id="textUitnodiging"
										type="checkbox"
										checked={value.subjectMeeting.Uitnodigingen}
										name="Uitnodigingen"
									/>
									Uitnodigingen, presentielijsten
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
							<span className="subForm ">
								<label className="container">
									<input
										onChange={changeHandlerSubjectMeeting}
										id="textAgenda"
										type="checkbox"
										checked={value.subjectMeeting.Agenda}
										name="Agenda"
									/>
									Agenda’s
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
							<span className="subForm ">
								<label className="container">
									<input
										onChange={changeHandlerSubjectMeeting}
										id="textIngekomen"
										type="checkbox"
										checked={value.subjectMeeting.IngekomenStukken}
										name="IngekomenStukken"
									/>
									Ingekomen stukken
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>

							<span className="subForm ">
								<label className="container">
									<input
										onChange={changeHandlerSubjectMeeting}
										id="textBesluiten"
										type="checkbox"
										checked={value.subjectMeeting.Besluiten}
										name="Besluiten"
									/>
									Besluiten, besluitenlijsten en notulen
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
						</div>
					)}

					<span>
						<label className="container">
							<input
								onChange={changeHandlerCheckbox}
								id="text3"
								type="checkbox"
								checked={value[12]}
								name="checkText"
								value="12"
							/>
							Correspondentie, gespreksverslagen
							<br />
							<div className="checkmark"></div>
						</label>
					</span>
					{value[12] && (
						<span className="subForm">
							<label className="container">
								<input
									onChange={changeHandlerCheckbox}
									id="text4"
									type="checkbox"
									checked={value[13]}
									name="checkText"
									value="13"
								/>
								Binnen de overheidsinstantie
								<br />
								<div className="checkmark"></div>{" "}
							</label>
						</span>
					)}
					{value[13] && value[12] && (
						<div>
							<span className="subsubForm ">
								<label className="container">
									<input
										size="50"
										id="subjectInside1"
										value="subjectInside1"
										checked={value.subjectInside1}
										onChange={changeHandlerCheckbox}
										name="checkText"
										type="checkbox"
									/>
									Brieven
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
							<span className="subsubForm">
								<label className="container">
									<input
										size="50"
										id="subjectInside2"
										value="subjectInside2"
										checked={value.subjectInside2}
										onChange={changeHandlerCheckbox}
										name="checkText"
										type="checkbox"
									/>
									E-mails
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
							{value.subjectInside2 && (
								<div>
									<span className="subsubsubForm">
										<label className="container">
											<input
												size="50"
												id="subjectInside2inclusive"
												checked={value.subjectInside2inclusive === "inclusief"}
												name="subjectInside2inclusive"
												value="inclusief"
												onChange={changeHandlerSubjectType}
												type="radio"
											/>
											Inclusief bijlagen
											<br />
											<div className="checkmark"></div>{" "}
										</label>
									</span>
									<span className="subsubsubForm">
										<label className="container">
											<input
												size="50"
												id="subjectInside2exclusive"
												checked={value.subjectInside2inclusive === "exclusief"}
												name="subjectInside2inclusive"
												value="exclusief"
												onChange={changeHandlerSubjectType}
												type="radio"
											/>
											Exclusief bijlagen
											<br />
											<div className="checkmark"></div>{" "}
										</label>
									</span>
								</div>
							)}
							<span className="subsubForm">
								<label className="container">
									<input
										size="50"
										id="subjectInside6"
										value="subjectInside6"
										checked={value.subjectInside6}
										onChange={changeHandlerCheckbox}
										name="checkText"
										type="checkbox"
									/>
									Gespreksverslagen
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
							<span className="subsubForm">
								<label className="container">
									<input
										size="50"
										id="subjectInside4"
										value="subjectInside4"
										checked={value.subjectInside4}
										onChange={changeHandlerCheckbox}
										name="checkText"
										type="checkbox"
									/>
									SMS-jes en Whatsapp-berichten
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
						</div>
					)}

					{value[12] && (
						<span className="subForm">
							<label className="container">
								<input
									onChange={changeHandlerCheckbox}
									id="text5"
									type="checkbox"
									checked={value[14]}
									name="checkText"
									value="14"
								/>{" "}
								Met andere personen of organisaties
								<br />
								<div className="checkmark"></div>{" "}
							</label>
						</span>
					)}
					{value[14] && value[12] && (
						<div>
							<span className="subsubForm ">
								<label className="container">
									<input
										size="50"
										id="subjectOutside1"
										value="subjectOutside1"
										checked={value.subjectOutside1}
										onChange={changeHandlerCheckbox}
										name="checkText"
										type="checkbox"
									/>
									Brieven
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
							<span className="subsubForm">
								<label className="container">
									<input
										size="50"
										id="subjectOutside2"
										value="subjectOutside2"
										checked={value.subjectOutside2}
										onChange={changeHandlerCheckbox}
										name="checkText"
										type="checkbox"
									/>
									E-mails
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
							{value.subjectInside2 && (
								<div>
									<span className="subsubsubForm">
										<label className="container">
											<input
												size="50"
												id="subjectOutside2inclusive"
												checked={value.subjectOutside2inclusive === "inclusief"}
												name="subjectOutside2inclusive"
												value="inclusief"
												onChange={changeHandlerSubjectType}
												type="radio"
											/>
											Inclusief bijlagen
											<br />
											<div className="checkmark"></div>{" "}
										</label>
									</span>
									<span className="subsubsubForm">
										<label className="container">
											<input
												size="50"
												id="subjectOutside2exclusive"
												checked={value.subjectOutside2inclusive === "exclusief"}
												name="subjectOutside2inclusive"
												value="exclusief"
												onChange={changeHandlerSubjectType}
												type="radio"
											/>
											Exclusief bijlagen
											<br />
											<div className="checkmark"></div>{" "}
										</label>
									</span>
								</div>
							)}
							<span className="subsubForm">
								<label className="container">
									<input
										size="50"
										id="subjectOutside6"
										value="subjectOutside6"
										checked={value.subjectOutside6}
										onChange={changeHandlerCheckbox}
										name="checkText"
										type="checkbox"
									/>
									Gespreksverslagen
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
							<span className="subsubForm">
								<label className="container">
									<input
										size="50"
										id="subjectOutside4"
										value="subjectOutside4"
										checked={value.subjectOutside4}
										onChange={changeHandlerCheckbox}
										name="checkText"
										type="checkbox"
									/>
									SMS-jes en Whatsapp-berichten
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
						</div>
					)}

					{value[14] && (
						<div>
							<span className="subsubForm">
								<label>
									Organisatie of persoon (indien gewenst)
									<input
										size="40"
										id="subjectLongOrganisation"
										value={value.subjectLongOrganisation}
										onChange={changeHandlerUser}
										type="text"
										placeholder="Bijvoorbeeld Shell of J. Jansen"
									/>
									<br />
								</label>
							</span>
						</div>
					)}
					<span>
						<label className="container">
							<input
								size="50"
								id="subjectInside5"
								value="subjectInside5"
								checked={value.subjectInside5}
								onChange={changeHandlerCheckbox}
								name="checkText"
								type="checkbox"
							/>
							Memo's, notities
							<br />
							<div className="checkmark"></div>{" "}
						</label>
					</span>
					<span>
						<label className="container">
							<input
								onChange={changeHandlerCheckbox}
								id="text2"
								type="checkbox"
								checked={value[11]}
								name="checkText"
								value="11"
							/>
							Rapporten, adviezen (indien bekend)
							<br />
							<div className="checkmark"></div>{" "}
						</label>
					</span>
					{value[11] && (
						<div>
							<span className="subForm">
								<label>
									Benoem de rapporten
									<input
										size="50"
										id="subjectRapportText"
										value={value.subjectRapportText}
										onChange={changeHandlerUser}
										type="text"
										placeholder="Bijvoorbeeld project- en programmaplannen"
									/>
									<br />
								</label>
							</span>
						</div>
					)}
					<span>
						<label className="container">
							<input
								onChange={changeHandlerCheckbox}
								id="text6"
								type="checkbox"
								checked={value[15]}
								name="checkText"
								value="15"
							/>{" "}
							Financieële documenten
							<br />
							<div className="checkmark"></div>
						</label>
					</span>
					{value[15] && (
						<div>
							<span className="subForm">
								<label>
									Benoem de financieële documenten
									<input
										size="50"
										id="subjectFinancialText"
										value={value.subjectFinancialText}
										onChange={changeHandlerUser}
										type="text"
										placeholder="Bijvoorbeeld begrotingen, jaarverslagen"
									/>
									<br />
								</label>
							</span>
						</div>
					)}
					<span>
						<label className="container">
							<input
								onChange={changeHandlerCheckbox}
								id="text7"
								type="checkbox"
								checked={value[16]}
								name="checkText"
								value="16"
							/>{" "}
							Datasets
							<br />
							<div className="checkmark"></div>
						</label>
					</span>
					<span>
						<label className="container">
							<input
								onChange={changeHandlerCheckbox}
								id="text8"
								type="checkbox"
								checked={value[17]}
								name="checkText"
								value="17"
							/>{" "}
							Anders
							<br />
							<div className="checkmark"></div>
						</label>
					</span>
					{value[17] && (
						<div>
							<span className="subForm">
								<label>
									Andere documentsoorten
									<input
										size="50"
										id="subjectElseText"
										value={value.subjectElseText}
										onChange={changeHandlerUser}
										type="text"
										placeholder="Bijvoorbeeld: proces-verbaal of boetes"
									/>
									<br />
								</label>
							</span>
						</div>
					)}
					{value.subjectType === "all" && (
						<div>
							<h1>Periode kiezen</h1>
							<span>
								<p>
									Selecteer hier de periode waarbinnen je denkt dat er voor jou interessante informatie beschikbaar is.
								</p>
								<PopupButton number="17" />
							</span>
							<br />
							<span className="objectInput">
								<label>
									Van <br />
									<input
										value={value.subjectDateStart}
										onChange={changeHandlerUser}
										id="subjectDateStart"
										type="textarea"
										name="subjectDate"
										placeholder="22-11-2019"
									/>
								</label>

								<label>
									Tot <br />
									<input
										value={value.subjectDateEnd}
										onChange={changeHandlerUser}
										id="subjectDateEnd"
										type="textarea"
										name="subjectDate"
										placeholder="31-12-2019"
									/>
								</label>
								<button type="button" className="buttonStyle" onClick={clickHandlerClearPeriodDate}>
									Verwijder
								</button>
							</span>
						</div>
					)}
				</div>
			</form>

			<Link to="/Stap3">Terug</Link>
			<Link to="/StapExtra" onClick={() => clickHandlerStep("step9")}>
				Volgende
			</Link>
			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default Stap3_3;
