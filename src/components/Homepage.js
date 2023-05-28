import { set } from "lodash/fp";
import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import logo_vvoj from "../assets/logo_vvoj.png";
import machine from "../assets/machine.png";
import Cookiemelding from "./Cookiemelding";
import DataText from "./DataText";
import HomepageOvergenerator from "./HomepageOvergenerator";
import HomepageWaarom from "./HomepageWaarom";
import HomepageWaaromTool from "./HomepageWaaromTool";
import Lancering from "./Lancering";
import PrivacyVoorwaarden from "./PrivacyVoorwaarden";
import Stap1 from "./Stap1";
import Stap2 from "./Stap2";
import Stap3 from "./Stap3";
import Stap3_2 from "./Stap3_2";
import Stap3_3 from "./Stap3_3";
import StapEinde from "./StapEinde";
import StapExtra from "./StapExtra";
import StapVoorAf from "./StapVoorAf";

const initialState = {
	1: true,
	2: true,
	3: true,
	4: false,
	5: true,
	6: true,
	7: true,
	8: true,
	9: true,
	25: true,
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
	showCookie: "true",
	userName: "",
	userAdress: "",
	userAdressNumber: "",
	userZipcode: "",
	userCityName: "",
	userEmail: "",
	userPhoneNumber: "",
	userCompanyNameInput: "",
	userOnBehalfInput: "",
	userJournalist: false,
	userCompanyName: false,
	userOnBehalf: false,
	selectedAuthority: null,
	subjectMilieu: false,
	subjectLong: "",
	subjectType: "specific",
	subjectSpecificDate: "",
	subjectSpecificText: "",
	subjectTextObject: [],
	subjectAllDate: "",
	subjectAllText: "",
	subjectDateStart: "",
	subjectDateEnd: "",
	subjectMeeting: {
		Uitnodigingen: false,
		Agenda: false,
		IngekomenStukken: false,
		Besluiten: false
	},
	subjectLongOrganisation: "",
	subjectReports: false,
	subjectCorrespondance: false,
	subjectFinancial: false,
	subjectDataset: false,
	subjectElse: false,
	subjectElseText: "",
	subjectRapportText: "",
	subjectFinancialText: "",
	subjectInvitations: true,
	subjectDetermines: true,
	subjectMinutes: true,
	subjectInside: false,
	subjectOutside: false,
	subjectInside1: true,
	subjectInside2: true,
	subjectInside2inclusive: "exclusief",
	subjectInside4: true,
	subjectInside5: false,
	subjectInside6: true,
	subjectOutside1: true,
	subjectOutside2: true,
	subjectOutside2inclusive: "exclusief",
	subjectOutside4: true,
	subjectOutside5: false,
	subjectOutside6: true,
	subjectCorrespondanceName: [],
	subjectFinancial1: true,
	subjectFinancial2: true,
	subjectFinancial3: true,
	subjectDataset1: true,
	subjectDataset2: true,
	subjectDataset3: [],
	// deze key is dubbel
	// subjectElse: [],
	step6: false,
	step9: false,

	// bump this number if the shape of the state changes in a way that will break compatibility with any data already in localStorage
	version: 2
};

const useLocalStorageState = (key, initialState) => {
	const [state, setState] = useState(() => {
		const fromStorage = window.localStorage.getItem(key);
		if (fromStorage !== null) {
			const data = JSON.parse(fromStorage);

			// perform version check
			if (data.version === initialState.version) {
				return data;
			}
		}
		return initialState;
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
};

const Homepage = props => {
	const [value, setValue] = useLocalStorageState("data", initialState);

	const handleKeypathChange = ({ currentTarget: { type, name, value, checked } }) => {
		setValue(set(name, type === "checkbox" ? checked : type === "number" ? Number(value) : value));
	};
	const showCookie = () => {
		setValue(current => ({ ...current, showCookie: false }));
	};
	const changeHandlerCheckbox = ({ currentTarget: { value, checked } }) => {
		setValue(current => ({ ...current, [value]: checked }));
	};
	const filteredDataText = DataText(value).filter(item => {
		return value[item.id];
	});

	const setAuthority = selectedAuthority => {
		setValue(current => ({ ...current, selectedAuthority }));
	};
	const clickHandlerClearSelectedAuthority = () => {
		setValue(current => ({ ...current, selectedAuthority: null }));
	};
	const clickHandlerClearPeriodDate = () => {
		setValue(current => ({ ...current, subjectDateStart: "", subjectDateEnd: "" }));
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

	const changeHandlerSubjectMeeting = ({ currentTarget: { checked, name } }) => {
		setValue(current => ({
			...current,
			subjectMeeting: {
				...current.subjectMeeting,
				[name]: checked
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

	const changeHandlerCompanyName = ({ currentTarget: { checked } }) => {
		setValue(current => ({ ...current, userCompanyName: checked, userCompanyNameInput: "" }));
	};

	const changeHandlerOnBehalf = ({ currentTarget: { checked } }) => {
		setValue(current => ({ ...current, userOnBehalf: checked, userOnBehalfInput: "" }));
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

		fileDownload.download = "Woo-verzoek.doc";

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
				{value.showCookie && <Cookiemelding showCookie={showCookie} value={value} />}
				<div className="homepageBlock">
					<div className="blockText">
						<p className="logo">Woo-generator</p>
						<h1>Schrijf in 3 simpele stappen je eigen Woo-verzoek</h1>
						<p>Welkom bij de Woo-generator! </p>
						<p> Je bent hier omdat je informatie wilt opvragen bij een overheidsinstantie.</p>
						<p>
							Op 1 mei 2022 is de Wet openbaarheid van bestuur (Wob) vervangen door de Wet open overheid (Woo). De
							Wob-generator is daarom de Woo-generator geworden en we hebben meteen de gelegenheid aangegrepen om de
							generator te verbeteren. Vanaf nu dien je dus een Woo-verzoek in als je overheidsinformatie wilt opvragen.
						</p>
						<p>Met de Woo-generator is dat een koud kunstje.</p>

						<ol>
							<li>1. Je vult een aantal gegevens over jezelf in</li>
							<li>2. Je selecteert een overheidsinstantie</li>
							<li>3. Je kiest wat voor documenten of informatie je zoekt</li>
						</ol>

						<Link to="/StapVoorAf">Start je Woo-verzoek</Link>
					</div>
					<div>
						<img src={machine} alt="" />
					</div>
				</div>
				<div className="extra_content">
					<p>Een initiatief van de </p>
					<a className="plaintext" href="https://www.vvoj.nl" target="_blank" rel="noopener noreferrer">
						<img src={logo_vvoj} className="logo_vvoj" alt="VVOJ" />
					</a>
				</div>
				<div className="extra_content">
					<hr className="horizontalRule"></hr>
				</div>
				<HomepageWaarom />
				<HomepageWaaromTool />

				<div className="extra_content"></div>

				<div className="extra_content">
					<hr className="horizontalRule"></hr>
				</div>
				<HomepageOvergenerator />
			</Route>
			<Route path="/StapVoorAf">
				<StapVoorAf />
			</Route>
			<Route path="/lancering">
				<Lancering />
			</Route>
			<Route path="/Stap1">
				<Stap1
					value={value}
					changeHandlerUser={changeHandlerUser}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerCompanyName={changeHandlerCompanyName}
					changeHandlerOnBehalf={changeHandlerOnBehalf}
					filteredDataText={filteredDataText}
					getCurrentDate={getCurrentDate}
				/>
			</Route>
			<Route path="/Stap2">
				<Stap2
					value={value}
					changeHandlerUser={changeHandlerUser}
					authorities={props.authorities}
					setAuthority={setAuthority}
					clickHandlerClearSelectedAuthority={clickHandlerClearSelectedAuthority}
					filteredDataText={filteredDataText}
					getCurrentDate={getCurrentDate}
					handleKeypathChange={handleKeypathChange}
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
					changeHandlerSubjectType={changeHandlerSubjectType}
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
					clickHandlerClearPeriodDate={clickHandlerClearPeriodDate}
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
		</Switch>
	);
};
export default Homepage;
