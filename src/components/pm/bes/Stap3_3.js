import React from "react";
// import TagManager from "react-gtm-module";
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
	// const tagManagerArgs = {
	// 	dataLayer: {
	// 		page: "Stap3_3"
	// 	},
	// 	dataLayerName: "PageDataLayer"
	// };
	// TagManager.dataLayer(tagManagerArgs);
	return (
		<div className="formLetter">
			<p className="logo">Generado Wob BES</p>

			<h2>
				Stap 3:
				{value.subjectType === "specific"
					? " Cua informacion bo ta buscando? (documentonan specifico)"
					: " Cua informacion bo ta buscando? (tur documento)"}
			</h2>
			{value.subjectType === "specific" && (
				<p>
					Describi lo mas specificamente posibel e titulo, autor, y fecha di e documento(nan) cu bo ta pidiendo. Bo mag
					di agrega varios documento.
				</p>
			)}
			{value.subjectType === "all" && (
				<div>
					<p>
						Aki bo ta scoge e tipo di documento cu bo kier ricibi cu tin di ber cu e topico. Ta recomendabel pa indica
						un periodo den e peticion, di cual e documentonan ta bin. Por ehempel: tur documento tocante topico x, entre
						periodo 12 di december 2002 te 14 di januari 2005.
					</p>
					<br />
					<span>
						<p>Pakico mi lo indica cua periodo y cua tipo di documento ta interesa mi? </p>
						<PopupButton number="14" />
					</span>
				</div>
			)}

			<form>
				{value.subjectType === "specific" && (
					<div>
						<span className="objectInput">
							<label>
								Titulo y autor
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
								Agrega
							</button>
						</span>
						{value.subjectTextObject.map((item, index) => (
							<span className="object" key={index}>
								<p>
									{item.subjectText} {item.subjectDate && item.subjectDate}
								</p>
								<button type="button" className="buttonStyle" value={index} onClick={clickHandlerEmptySubjectText}>
									Kita
								</button>
							</span>
						))}
					</div>
				)}
				{value.subjectType === "specific" && (
					<div>
						<h1>Documentonan cu ta resorta bou otro documentonan</h1>
						<p>Si bo tambe kier documentonan cu ta resorta bou otro documentonan, marca cuanan bo kier.</p>
						<br />
						<span className="nieuwietje">
							<p>
								Pensa bon tocante cua documentonan, manera e-mailnan, ta deseabel of no.
								<PopupButton number="14" />
							</p>
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
							Documentonan di reunionnan
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
									Invitacionnan, listanan di presencia
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
									Agendanan
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
									Decisionnan, lista di decisionnan, notulen
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
							Corespondencia, informenan di combersacionnan
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
								Denter di e instancia gubernamental
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
									E-mailnan
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
											Tur e-mailnan, incluyendo filenan adhunta
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
											Solamente e-mailnan cu ta inclui un file adhunto, incluyendo e filenan adhunta
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
									Mensahenan cu ta cana via otro canalnan cu no ta e-mail (manera mensahenan via sms, WhatsApp, Signal,
									Slack)
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
								Cu otro personanan of organisacionnan
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
									Cartanan
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
									E-mailnan
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
											Tur e-mail, incluyendo filenan adhunta
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
											Solamente e-mailnan cu ta inclui un file adhunto, incluyendo e filenan adhunta
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
										id="subjectOutside4"
										value="subjectOutside4"
										checked={value.subjectOutside4}
										onChange={changeHandlerCheckbox}
										name="checkText"
										type="checkbox"
									/>
									Mensahenan cu ta cana via otro canalnan cu no ta e-mail (manera mensahenan via sms, WhatsApp, Signal,
									Slack)
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
									Organisacionnan of personanan (den caso cu nan ta conoci)
									<input
										size="40"
										id="subjectLongOrganisation"
										value={value.subjectLongOrganisation}
										onChange={changeHandlerUser}
										type="text"
										placeholder="Por ehempel SETAR, of Juan Perez"
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
							Memonan, anotacionnan.
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
							Rapportnan, consehonan
							<br />
							<div className="checkmark"></div>{" "}
						</label>
					</span>
					{value[11] && (
						<div>
							<span className="subForm">
								<label>
									Yena e nomber di e rapportnan y consehonan (den caso cu nan ta conoci)
									<input
										size="50"
										id="subjectRapportText"
										value={value.subjectRapportText}
										onChange={changeHandlerUser}
										type="text"
										placeholder="Por ehempel, Mer-rapportnan"
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
							Documentonan financiero
							<br />
							<div className="checkmark"></div>
						</label>
					</span>
					{value[15] && (
						<div>
							<span className="subForm">
								<label>
									Nombra e documentonan financiero (en caso cu nan ta conoci)
									<input
										size="50"
										id="subjectFinancialText"
										value={value.subjectFinancialText}
										onChange={changeHandlerUser}
										type="text"
										placeholder="Por ehempel presupuestonan, cuentanan anual"
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
							Otro
							<br />
							<div className="checkmark"></div>
						</label>
					</span>
					{value[17] && (
						<div>
							<span className="subForm">
								<label>
									Otro sorto di documento
									<input
										size="50"
										id="subjectElseText"
										value={value.subjectElseText}
										onChange={changeHandlerUser}
										type="text"
										placeholder="Por ehempel, proces-verbaalnan of boetnan"
									/>
									<br />
								</label>
							</span>
						</div>
					)}
					{value.subjectType === "all" && (
						<div>
							<h1>Scoge periodo</h1>
							<span>
								<p>Selecciona un periodo cu bo ta kere lo tin documentonan interesante pa bo.</p>
								<PopupButton number="17" />
							</span>
							<br />
							<span className="objectInput">
								<label>
									Di <br />
									<input
										value={value.subjectDateStart}
										onChange={changeHandlerUser}
										id="subjectDateStart"
										type="text"
										placeholder="Por ehempel 01-01-2015"
									/>
								</label>

								<label>
									Te cu <br />
									<input
										value={value.subjectDateEnd}
										onChange={changeHandlerUser}
										id="subjectDateEnd"
										type="text"
										placeholder="Por ehempel 31-10-2020"
									/>
								</label>
							</span>
						</div>
					)}
				</div>
			</form>
			<span className="extraPadding"></span>
			<Link to="/PM/bes/Stap3">Bay bek</Link>
			<Link to="/PM/bes/StapExtra" onClick={() => clickHandlerStep("step9")}>
				Proximo paso
			</Link>
			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default Stap3_3;
