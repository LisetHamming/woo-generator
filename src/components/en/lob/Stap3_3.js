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
			<p className="logo">Lob generator</p>

			<h2>
				Step 3:
				{value.subjectType === "specific"
					? " What information are you looking for? (specific documents)"
					: " What information are you looking for? (all documents)"}
			</h2>
			{value.subjectType === "specific" && (
				<p>
					Describe as accurately as possible the title, author and date of the document you are looking for and add
					them. You can add multiple documents.
				</p>
			)}
			{value.subjectType === "all" && (
				<div>
					<p>
						Here, choose the type of documents you would like to receive on the subject. Then you can further delineate
						your request by indicating the time period you are interested in.
					</p>
					<br />
					<span>
						<p>Why would I indicate the time period and document types I am interested in?</p>
						<PopupButton number="14" />
					</span>
				</div>
			)}

			<form>
				{value.subjectType === "specific" && (
					<div>
						<span className="objectInput">
							<label>
								Title and author
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
								Date <br />
								<input
									id="subjectSpecificDate"
									value={value.subjectSpecificDate}
									onChange={changeHandlerUser}
									type="textarea"
								/>
								<br />
							</label>
							<button type="button" className="buttonStyle" onClick={clickHandlerSubjectText}>
								Add more
							</button>
						</span>
						{value.subjectTextObject.map((item, index) => (
							<span className="object" key={index}>
								<p>
									{item.subjectText} {item.subjectDate && item.subjectDate}
								</p>
								<button type="button" className="buttonStyle" value={index} onClick={clickHandlerEmptySubjectText}>
									Remove
								</button>
							</span>
						))}
					</div>
				)}
				{value.subjectType === "specific" && (
					<div>
						<h1>Underlying documents</h1>
						<p>If you also want underlying documents, check which ones.</p>
						<br />
						<span className="nieuwietje">
							<p>
								Think carefully about which documents, such as e-mails, are useful or not.
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
							Meeting documents
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
									Invitations, attendance lists
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
									Agendas
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
									Incoming documents
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
									Decisions, decision lists and meeting minutes
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
							Correspondence, interview/call records
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
								Within the government agency
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
									Letters
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
									Emails
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
											All emails, including attachments
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
											Only the emails that have an attachment, including those attachments
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
									Messages through communication channels other than email (such as SMS, WhatsApp, Signal, Slack)
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
								With other persons or organizations
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
									Letters
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
									Emails
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
											All emails, including attachments
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
											Only the emails that have an attachment, including those attachments
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
									Messages through communication channels other than e-mail (such as SMS, WhatsApp, Signal, Slack)
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
									Organizations or individuals (if known)
									<input
										size="40"
										id="subjectLongOrganisation"
										value={value.subjectLongOrganisation}
										onChange={changeHandlerUser}
										type="text"
										placeholder="For example Shell or J. Jansen"
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
							Notes, memos, memorandums
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
							Reports, advices
							<br />
							<div className="checkmark"></div>{" "}
						</label>
					</span>
					{value[11] && (
						<div>
							<span className="subForm">
								<label>
									Name the reports or advices (if known)
									<input
										size="50"
										id="subjectRapportText"
										value={value.subjectRapportText}
										onChange={changeHandlerUser}
										type="text"
										placeholder="For example, project and program plans"
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
							Financial documents
							<br />
							<div className="checkmark"></div>
						</label>
					</span>
					{value[15] && (
						<div>
							<span className="subForm">
								<label>
									Name the financial documents (if known)
									<input
										size="50"
										id="subjectFinancialText"
										value={value.subjectFinancialText}
										onChange={changeHandlerUser}
										type="text"
										placeholder="For example budgets, annual reports"
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
							Other
							<br />
							<div className="checkmark"></div>
						</label>
					</span>
					{value[17] && (
						<div>
							<span className="subForm">
								<label>
									Other types of documents
									<input
										size="50"
										id="subjectElseText"
										value={value.subjectElseText}
										onChange={changeHandlerUser}
										type="text"
										placeholder="For example: court records or fines"
									/>
									<br />
								</label>
							</span>
						</div>
					)}
					{value.subjectType === "all" && (
						<div>
							<h1>Select period</h1>
							<span>
								<p>Select here the period during which you think the information of interest to you comes from.</p>
								<PopupButton number="17" />
							</span>
							<br />
							<span className="objectInput">
								<label>
									From <br />
									<input
										value={value.subjectDateStart}
										onChange={changeHandlerUser}
										id="subjectDateStart"
										type="text"
										placeholder="For example 01-01-2015"
									/>
								</label>

								<label>
									Until <br />
									<input
										value={value.subjectDateEnd}
										onChange={changeHandlerUser}
										id="subjectDateEnd"
										type="text"
										placeholder="For example 31-10-2020"
									/>
								</label>
							</span>
						</div>
					)}
				</div>
			</form>
			<span className="extraPadding"></span>
			<Link to="/EN/lob/Stap3">Go back</Link>
			<Link to="/EN/lob/StapExtra" onClick={() => clickHandlerStep("step9")}>
				Next
			</Link>
			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default Stap3_3;
