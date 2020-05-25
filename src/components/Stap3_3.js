import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import formatDate from "./FormatDate";
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
	changeHandlerRadio
}) {
	return (
		<div className="formLetter">
			<img className="logoWob" src={logo} />
			<h2>
				{" "}
				Stap 3:
				{value.subjectType === "specific"
					? " Welke informatie zoek je? (Specifieke documenten)"
					: " Welke informatie zoek je? (Alle documenten)"}
			</h2>
			<span>
				<p>
					Omschrijf zo nauwkeurig mogelijk de titel, auteur en datum van het document of de documenten waar je naar op
					zoek bent.
				</p>
			</span>
			<form>
				{value.subjectType === "specific" && (
					<div>
						<span className="objectInput">
							<label>
								Titel en auteur
								<input
									size="30"
									id="subjectSpecificText"
									value={value.subjectSpecificText}
									onChange={changeHandlerUser}
									type="textarea"
								/>
								<br />
							</label>

							<label>
								Datum of jaar <br />
								<input
									id="subjectSpecificDate"
									value={value.subjectSpecificDate}
									onChange={changeHandlerUser}
									type="date"
								/>
								<br />
							</label>
							<button type="button" className="buttonStyle" onClick={clickHandlerSubjectText}>
								<FontAwesomeIcon className="fontIcon" icon={faPlus} />
							</button>
						</span>
						{value.subjectTextObject.map((item, index) => (
							<span className="object" key={index}>
								<p>
									{item.subjectText} {formatDate(new Date(item.subjectDate))}
								</p>
								<button type="button" className="buttonStyle" value={index} onClick={clickHandlerEmptySubjectText}>
									<FontAwesomeIcon className="fontIcon" icon={faTimes} />
								</button>
							</span>
						))}
					</div>
				)}
				<span>
					<h1>Onderliggende stukken</h1>
					<br />
				</span>
				<span>
					<p>Als je ook onderliggende stukken wil, vink dan hieronder aan welke.</p>
				</span>
				<br />
				<span>
					<p className="extraPadding">Denk goed na over welke documenten, zoals e-mails, wel of niet nuttig zijn.</p>
					<PopupButton number="14" />
				</span>
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
										onChange={changeHandlerCheckbox}
										id="textUitnodiging"
										type="checkbox"
										checked={value[18]}
										name="checkText"
										value="18"
									/>
									Uitnodigingen, presentielijsten
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
							<span className="subForm ">
								<label className="container">
									<input
										onChange={changeHandlerCheckbox}
										id="textAgenda"
										type="checkbox"
										checked={value[19]}
										name="checkText"
										value="19"
									/>
									Agenda’s
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
							<span className="subForm ">
								<label className="container">
									<input
										onChange={changeHandlerCheckbox}
										id="textIngekomen"
										type="checkbox"
										checked={value[21]}
										name="checkText"
										value="21"
									/>
									Ingekomen stukken
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
							<span className="subForm ">
								<label className="container">
									<input
										onChange={changeHandlerCheckbox}
										id="textBesluiten"
										type="checkbox"
										checked={value[23]}
										name="checkText"
										value="23"
									/>
									Besluiten, besluitenlijsten, notulen
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
							Correspondentie en gespreksverslagen
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
					{value[14] && (
						<div>
							<span className="subsubForm">
								<label>
									Organisatie of persoon (meerdere mogelijk)
									<input
										size="40"
										id="subjectLongOrganisation"
										value={value.subjectLongOrganisation}
										onChange={changeHandlerUser}
										type="text"
										placeholder="Shell N.V., de heer J. Jansen, Saudische ambassade"
									/>
									<br />
								</label>
							</span>
						</div>
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
												value="subjectInside2inclusive"
												checked={value.subjectInside2inclusive}
												onChange={changeHandlerRadio}
												name="checkText"
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
												value="subjectInside2exclusive"
												checked={value.subjectInside2exclusive}
												onChange={changeHandlerRadio}
												name="checkText"
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
										id="subjectInside5"
										value="subjectInside5"
										checked={value.subjectInside5}
										onChange={changeHandlerCheckbox}
										name="checkText"
										type="checkbox"
									/>
									Memo's en notities
									<br />
									<div className="checkmark"></div>{" "}
								</label>
							</span>
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
						</div>
					)}

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

					<span>
						<label className="container">
							<input
								onChange={changeHandlerCheckbox}
								id="text7"
								type="checkbox"
								checked={value[11]}
								name="checkText"
								value="16"
							/>{" "}
							Rapporten en adviezen
							<br />
							<div className="checkmark"></div>
						</label>
					</span>

					<span>
						<label className="container">
							<input
								onChange={changeHandlerCheckbox}
								id="text7"
								type="checkbox"
								checked={value[15]}
								name="checkText"
								value="16"
							/>{" "}
							Financiële documenenten
							<br />
							<div className="checkmark"></div>
						</label>
					</span>

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
									<input
										size="50"
										id="subjectElseText"
										value={value.subjectElseText}
										onChange={changeHandlerUser}
										type="text"
										placeholder="Bijvoorbeeld 'Jaarrekening' of 'Proces-verbaal'"
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
							<span>
								<label>
									Van <br />
									<input
										value={value.subjectDateStart}
										onChange={changeHandlerUser}
										id="subjectDateStart"
										type="date"
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
										type="date"
										name="subjectDate"
										placeholder="31-12-2019"
									/>
								</label>
							</span>
						</div>
					)}
				</div>
			</form>

			<Link to="/Stap3_2">Terug</Link>
			<Link to="/StapExtra" onClick={() => clickHandlerStep("step9")}>
				Volgende
			</Link>
			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default Stap3_3;
