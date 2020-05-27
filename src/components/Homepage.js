import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import logo_vvoj from "../assets/logo_vvoj.png";
import machine from "../assets/machine.png";
import AlgemeneVoorwaarden from "./AlgemeneVoorwaarden";
import DataText from "./DataText";
import HomepageOvergenerator from "./HomepageOvergenerator";
import HomepageWaarom from "./HomepageWaarom";
import HomepageWaaromTool from "./HomepageWaaromTool";
import PrivacyVoorwaarden from "./PrivacyVoorwaarden";
import Stap1 from "./Stap1";
import Stap2 from "./Stap2";
import Stap3 from "./Stap3";
import Stap3_2 from "./Stap3_2";
import Stap3_3 from "./Stap3_3";
import StapEinde from "./StapEinde";
import StapExtra from "./StapExtra";

const initialState = {
	1: true,
	2: true,
	3: true,
	4: true,
	5: true,
	6: true,
	7: true,
	8: true,
	9: true,
	10: false,
	11: false,
	12: false,
	13: false,
	14: false,
	15: false,
	16: false,
	17: false,
	18: false,
	19: false,
	20: false,
	21: false,
	22: false,
	23: false,
	24: false,
	userName: "",
	userAdress: "",
	userAdressNumber: "",
	userZipcode: "",
	userCityName: "",
	userEmail: "",
	userPhoneNumber: "",
	userGoalInput: "",
	userCompanyNameInput: "",
	userJournalist: false,
	userCompanyName: false,
	userNeedsGoal: false,
	selectedAuthority: null,
	subjectMilieu: false,
	subjectLong: "",
	subjectType: "",
	subjectSpecificDate: "",
	subjectSpecificText: "",
	subjectTextObject: [],
	subjectAllDate: "",
	subjectAllText: "",
	subjectDateStart: false,
	subjectDateEnd: false,
	subjectMeeting: {
		Uitnodigingen: false,
		Agenda: false,
		Presentielijsten: false,
		IngekomenStukken: false,
		Adviezen: false,
		Besluiten: false,
		Besluitenlijsten: false
	},

	subjectLongOrganisation: "",
	subjectReports: false,
	subjectCorrespondance: false,
	subjectFinancial: false,
	subjectDataset: false,
	subjectElse: false,
	subjectElseText: "",
	subjectInvitations: true,
	subjectDetermines: true,
	subjectMinutes: true,
	subjectInside: false,
	subjectOutside: false,
	subjectInside1: true,
	subjectInside2: true,
	subjectInside2inclusive: "",
	subjectInside4: true,
	subjectInside5: true,
	subjectInside6: true,
	subjectCorrespondanceName: [],
	subjectFinancial1: true,
	subjectFinancial2: true,
	subjectFinancial3: true,
	subjectDataset1: true,
	subjectDataset2: true,
	subjectDataset3: [],
	subectElse: [],
	step6: false,
	step9: false
};

const useLocalStorageState = (key, initialState) => {
	const [state, setState] = useState(() => {
		const fromStorage = window.localStorage.getItem(key);
		if (fromStorage !== null) {
			return JSON.parse(fromStorage);
		}
		return initialState;
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
	}, [state]);

	return [state, setState];
};

const Homepage = props => {
	const [value, setValue] = useLocalStorageState("data", initialState);
	const [searchValue, setSearchValue] = useState("");
	const [dateToday, setDateToday] = useState("");

	const changeHandlerCheckbox = ({ currentTarget: { value, checked } }) => {
		setValue(current => ({ ...current, [value]: checked }));
	};
	const filteredDataText = DataText(value).filter(item => {
		return value[item.id];
	});

	const clickHandlerAuthority = selectedAuthority => {
		setValue(current => ({ ...current, selectedAuthority }));
	};
	const clickHandlerClearSelectedAuthority = () => {
		setValue(current => ({ ...current, selectedAuthority: null }));
	};
	const changeHandlerSubjectType = ({ currentTarget: { value, name } }) => {
		setValue(current => ({ ...current, [name]: value }));
	};
	const changeHandlerRadio = ({
		currentTarget: {
			value,
			name,
			dataset: { subject }
		}
	}) => {
		setValue(current => ({
			...current,
			subjectState: {
				...current.subjectState,
				[subject]: {
					...current.subjectState[subject],
					[name]: value
				}
			}
		}));
	};
	const resetState = () => {
		setValue(initialState);
	};

	const changeHandlerSubjectCheckbox = ({
		currentTarget: {
			checked,
			name,
			dataset: { subject }
		}
	}) => {
		setValue(current => ({
			...current,
			subjectState: {
				...current.subjectState,
				[subject]: {
					...current.subjectState[subject],
					[name]: checked
				}
			}
		}));
	};
	const changeHandlerSubjectMeeting = ({ currentTarget: { checked, name } }) => {
		setValue(current => ({
			...current,
			subjectMeeting: {
				...current.subjectMeeting,
				[name]: checked
			}
		}));
	};
	const changeHandlerSubjectText = ({
		currentTarget: {
			value,
			name,
			dataset: { subject }
		}
	}) => {
		setValue(current => ({
			...current,
			subjectState: {
				...current.subjectState,
				[subject]: {
					...current.subjectState[subject],
					[name]: value
				}
			}
		}));
	};

	const clickHandlerSubjectText = () => {
		setValue(current => ({
			...current,
			subjectTextObject: [
				...current.subjectTextObject,
				{ subjectText: current.subjectSpecificText, subjectDate: current.subjectSpecificDate }
			],
			subjectSpecificText: "",
			subjectSpecificDate: ""
		}));
	};
	const clickHandlerEmptySubjectText = ({ currentTarget: { value } }) => {
		const index = Number(value);
		setValue(current => ({
			...current,
			subjectTextObject: [...current.subjectTextObject.slice(0, index), ...current.subjectTextObject.slice(1 + index)]
		}));
	};
	const clickHandlerStep = value => {
		setValue(current => ({ ...current, [value]: true }));
	};

	const changeHandlerUser = ({ currentTarget: { value, id } }) => {
		setValue(current => ({ ...current, [id]: value }));
	};
	const changeHandlerSubject = ({ currentTarget: { value, id } }) => {
		setValue(current => ({ ...current, [id]: value }));
	};
	const changeHandlerCompanyName = ({ currentTarget: { checked } }) => {
		setValue(current => ({ ...current, userCompanyName: checked, userCompanyNameInput: "" }));
	};

	const exportHTMLDoc = () => {
		var header =
			"<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
			"xmlns:w='urn:schemas-microsoft-com:office:word' " +
			"xmlns='http://www.w3.org/TR/REC-html40'>" +
			"<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
		var footer = "</body></html>";
		var sourceHTML = header + document.getElementById("letterUI").innerHTML + footer;

		var source = "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(sourceHTML);
		var fileDownload = document.createElement("a");
		document.body.appendChild(fileDownload);
		fileDownload.href = source;
		fileDownload.download = `Wob-verzoek ${value.selectedAuthority.naam}.doc`;
		fileDownload.click();
		document.body.removeChild(fileDownload);
	};

	const getCurrentDate = () => {
		let monthNames = [
			"januari",
			"februari",
			"maart",
			"april",
			"mei",
			"juni",
			"juli",
			"augustus",
			"september",
			"oktober",
			"november",
			"december"
		];
		let date = new Date().getDate(); //Current Date
		let month = monthNames[new Date().getMonth()]; //Current Month
		let year = new Date().getFullYear(); //Current Year
		let dateToday = date + " " + month + " " + year;
		return dateToday;
	};

	return (
		<Switch>
			<Route exact path="/">
				<div className="homepageBlock">
					<div className="blockText">
						<p className="logo">Wob-generator</p>
						<h1>Schrijf in 3 simpele stappen je eigen Wob-verzoek</h1>
						<p>
							Je bent hier omdat je informatie wilt opvragen bij een overheidsinstantie. Dat noemen we een Wob-verzoek.
							Met de Wob-generator is dat een koud kunstje.
						</p>

						<ol>
							<li>1. Je vult een aantal gegevens over jezelf in</li>
							<li>2. Je selecteert een overheidsinstantie</li>
							<li>3. Je kiest wat voor documenten of informatie je zoekt</li>
						</ol>

						<p>Voilà!</p>
						<Link to="/Stap1">Start je Wob-verzoek</Link>
					</div>
					<div>
						<img src={machine} />
					</div>
				</div>
				<div className="extra_content">
					<p>Een initiatief van de </p>
					<img src={logo_vvoj} className="logo_vvoj" />
				</div>
				<div className="extra_content">
					{" "}
					<hr className="horizontalRule"></hr>
				</div>
				<HomepageWaarom />
				<div className="extra_content"></div>
				<HomepageWaaromTool />
				<div className="extra_content">
					{" "}
					<hr className="horizontalRule"></hr>
				</div>
				<HomepageOvergenerator />
			</Route>
			<Route path="/Stap1">
				<Stap1
					value={value}
					changeHandlerUser={changeHandlerUser}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerCompanyName={changeHandlerCompanyName}
					filteredDataText={filteredDataText}
					getCurrentDate={getCurrentDate}
				/>
			</Route>
			<Route path="/Stap2">
				<Stap2
					value={value}
					changeHandlerUser={changeHandlerUser}
					authorities={props.authorities}
					clickHandlerAuthority={clickHandlerAuthority}
					clickHandlerClearSelectedAuthority={clickHandlerClearSelectedAuthority}
					filteredDataText={filteredDataText}
					getCurrentDate={getCurrentDate}
				/>
			</Route>
			<Route path="/Stap3">
				<Stap3
					getCurrentDate={getCurrentDate}
					value={value}
					clickHandlerStep={clickHandlerStep}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerUser={changeHandlerUser}
				/>
			</Route>

			<Route path="/Stap3_2">
				<Stap3_2
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerSubjectType={changeHandlerSubjectType}
					changeHandlerUser={changeHandlerUser}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
				/>
			</Route>
			<Route path="/Stap3_3">
				<Stap3_3
					clickHandlerEmptySubjectText={clickHandlerEmptySubjectText}
					clickHandlerSubjectText={clickHandlerSubjectText}
					getCurrentDate={getCurrentDate}
					value={value}
					clickHandlerStep={clickHandlerStep}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerUser={changeHandlerUser}
					changeHandlerRadio={changeHandlerRadio}
					changeHandlerSubjectType={changeHandlerSubjectType}
					changeHandlerSubjectMeeting={changeHandlerSubjectMeeting}
				/>
			</Route>
			<Route path="/StapExtra">
				<StapExtra
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerCheckbox={changeHandlerCheckbox}
					filteredDataText={filteredDataText}
				/>
			</Route>
			<Route path="/StapEinde">
				<StapEinde
					resetState={resetState}
					getCurrentDate={getCurrentDate}
					value={value}
					filteredDataText={filteredDataText}
					exportHTMLDoc={exportHTMLDoc}
				/>
			</Route>
			<Route path="/PrivacyVoorwaarden">
				<PrivacyVoorwaarden />
			</Route>
			<Route path="/AlgemeneVoorwaarden">
				<AlgemeneVoorwaarden />
			</Route>
		</Switch>
	);
};
export default Homepage;
