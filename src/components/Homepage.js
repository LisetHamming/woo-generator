import { set } from "lodash/fp";
import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import machine from "../assets/images/WOO_knop_animatie.gif";
import gifLogo from "../assets/logo/Spoon_Logo_animatie_BlackonWhite_Gif.gif";
import Cookiemelding from "./Cookiemelding";
import DataText from "./DataText";
import HomepageENBES from "./en/bes/Homepage";
import HomepageOvergeneratorENBES from "./en/bes/HomepageOvergenerator";
import HomepageWaaromENBES from "./en/bes/HomepageWaarom";
import EnBesStap1 from "./en/bes/Stap1";
import EnBesStap2 from "./en/bes/Stap2";
import EnBesStap3 from "./en/bes/Stap3";
import EnBesStap3_2 from "./en/bes/Stap3_2";
import EnBesStap3_3 from "./en/bes/Stap3_3";
import EnBesStapEinde from "./en/bes/StapEinde";
import EnBesStapExtra from "./en/bes/StapExtra";
import EnBesStapVoorAf from "./en/bes/StapVoorAf";
import HomepageENLOB from "./en/lob/Homepage";
import HomepageOvergeneratorENLOB from "./en/lob/HomepageOvergenerator";
import HomepageWaaromENLOB from "./en/lob/HomepageWaarom";
import EnLobStap1 from "./en/lob/Stap1";
import EnLobStap2 from "./en/lob/Stap2";
import EnLobStap3 from "./en/lob/Stap3";
import EnLobStap3_2 from "./en/lob/Stap3_2";
import EnLobStap3_3 from "./en/lob/Stap3_3";
import EnLobStapEinde from "./en/lob/StapEinde";
import EnLobStapExtra from "./en/lob/StapExtra";
import EnLobStapVoorAf from "./en/lob/StapVoorAf";
import HomepageENWOO from "./en/woo/Homepage";
import HomepageOvergeneratorENWOO from "./en/woo/HomepageOvergenerator";
import HomepageWaaromENWOO from "./en/woo/HomepageWaarom";
import EnStap1 from "./en/woo/Stap1";
import EnStap2 from "./en/woo/Stap2";
import EnStap3 from "./en/woo/Stap3";
import EnStap3_2 from "./en/woo/Stap3_2";
import EnStap3_3 from "./en/woo/Stap3_3";
import EnStapEinde from "./en/woo/StapEinde";
import EnStapExtra from "./en/woo/StapExtra";
import EnStapVoorAf from "./en/woo/StapVoorAf";
import HomepageOvergenerator from "./HomepageOvergenerator";
import HomepageWaarom from "./HomepageWaarom";
import HomepageNLWOO from "./nl/woo/Homepage";
import HomepageOvergeneratorNLWOO from "./nl/woo/HomepageOvergenerator";
import HomepageWaaromNLWOO from "./nl/woo/HomepageWaarom";
import Stap1 from "./nl/woo/Stap1";
import Stap2 from "./nl/woo/Stap2";
import Stap3 from "./nl/woo/Stap3";
import Stap3_2 from "./nl/woo/Stap3_2";
import Stap3_3 from "./nl/woo/Stap3_3";
import StapEinde from "./nl/woo/StapEinde";
import StapExtra from "./nl/woo/StapExtra";
import StapVoorAf from "./nl/woo/StapVoorAf";
import HomepagePMBES from "./pm/bes/Homepage";
import HomepageOvergeneratorPMBES from "./pm/bes/HomepageOvergenerator";
import HomepageWaaromPMBES from "./pm/bes/HomepageWaarom";
import HomepagePMLOB from "./pm/lob/Homepage";
import HomepageOvergeneratorPMLOB from "./pm/lob/HomepageOvergenerator";
import HomepageWaaromPMLOB from "./pm/lob/HomepageWaarom";
import PmLobStap1 from "./pm/lob/Stap1";
import PmLobStap2 from "./pm/lob/Stap2";
import PmLobStap3 from "./pm/lob/Stap3";
import PmLobStap3_2 from "./pm/lob/Stap3_2";
import PmLobStap3_3 from "./pm/lob/Stap3_3";
import PmLobStapEinde from "./pm/lob/StapEinde";
import PmLobStapExtra from "./pm/lob/StapExtra";
import PmLobStapVoorAf from "./pm/lob/StapVoorAf";
import PrivacyVoorwaarden from "./PrivacyVoorwaarden";

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
	const [wet, setWet] = useState("Woo");
	const [location, setLocation] = useState("Nederland");
	const [value, setValue] = useLocalStorageState("data", initialState);
	// const [searchValue, setSearchValue] = useState("");
	// const [dateToday, setDateToday] = useState("");

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
	const clickHandlerSetLaw = value => {
		setWet(value);
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

		fileDownload.download = "Wob-verzoek.doc";

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
				<div className="selectLanguage">
					<Link to="/">NL</Link>
					<Link to="/EN/">EN</Link>
					<Link to="/PM/">PAP</Link>
				</div>
				<img src={gifLogo} className="logo_SPOON" alt="logo expertisecentrum spoon" />
				<div className="homepageBlock">
					<div className="blockText">
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
						<div className="nextButtons">
							<Link to="/NL/woo/StapVoorAf" onClick={e => clickHandlerSetLaw("Woo")}>
								WOO
							</Link>
							<Link to="/EN/bes/StapVoorAf" onClick={e => clickHandlerSetLaw("Wob BES")}>
								WOB-BES (EN)
							</Link>
							<Link to="/EN/lob/StapVoorAf" onClick={e => clickHandlerSetLaw("Lob")}>
								LOB (EN)
							</Link>
						</div>
					</div>
					<div>
						<img src={machine} alt="" />
					</div>
				</div>

				<HomepageWaarom />

				<div className="extra_content"></div>

				<HomepageOvergenerator />
			</Route>
			<Route exact path="/EN/">
				{value.showCookie && <Cookiemelding showCookie={showCookie} value={value} />}
				<div className="selectLanguage">
					<Link to="/">NL</Link>
					<Link to="/EN/">EN</Link>
					<Link to="/PM/">PAP</Link>
				</div>
				<img src={gifLogo} className="logo_SPOON" alt="logo expertisecentrum spoon" />
				<div className="homepageBlock">
					<div className="blockText">
						<h1>Write your own request</h1>
						<p>Welkom bij de generator! </p>
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
						<div className="nextButtons">
							<Link to="/EN/woo/StapVoorAf" onClick={e => clickHandlerSetLaw("Woo")}>
								WOO EN
							</Link>
							<Link to="/EN/lob/StapVoorAf" onClick={e => clickHandlerSetLaw("Lob")}>
								LOB
							</Link>
							<Link to="/EN/bes/StapVoorAf" onClick={e => clickHandlerSetLaw("Wob BES")}>
								WOB-BES
							</Link>
						</div>
					</div>
					<div>
						<img src={machine} alt="" />
					</div>
				</div>

				<HomepageWaarom />

				<div className="extra_content"></div>

				<div className="extra_content"></div>
				<HomepageOvergenerator />
			</Route>
			<Route exact path="/PM/">
				{value.showCookie && <Cookiemelding showCookie={showCookie} value={value} />}
				<div className="selectLanguage">
					<Link to="/">NL</Link>
					<Link to="/EN/">EN</Link>
					<Link to="/PM/">PAP</Link>
				</div>
				<img src={gifLogo} className="logo_SPOON" alt="logo expertisecentrum spoon" />
				<div className="homepageBlock">
					<div className="blockText">
						<h1>Write your own request</h1>
						<p>Welkom bij de generator! </p>
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
						<div className="nextButtons">
							<Link to="/EN/woo/StapVoorAf" onClick={e => clickHandlerSetLaw("Woo")}>
								WOO EN
							</Link>
							<Link to="/PM/lob/StapVoorAf" onClick={e => clickHandlerSetLaw("Lob")}>
								LOB
							</Link>
							<Link to="/PM/bes/StapVoorAf" onClick={e => clickHandlerSetLaw("Wob BES")}>
								WOB-BES
							</Link>
						</div>
					</div>
					<div>
						<img src={machine} alt="" />
					</div>
				</div>

				<HomepageWaarom />

				<div className="extra_content"></div>

				<div className="extra_content"></div>
				<HomepageOvergenerator />
			</Route>
			<Route exact path="/PM/LOB/">
				{value.showCookie && <Cookiemelding showCookie={showCookie} value={value} />}
				<HomepagePMLOB wet={wet} clickHandlerSetLaw={clickHandlerSetLaw} />
				<HomepageWaaromPMLOB />

				<div className="extra_content"></div>

				<div className="extra_content"></div>
				<HomepageOvergeneratorPMLOB />
			</Route>
			<Route exact path="/PM/BES/">
				{value.showCookie && <Cookiemelding showCookie={showCookie} value={value} />}
				<HomepagePMBES wet={wet} clickHandlerSetLaw={clickHandlerSetLaw} />
				<HomepageWaaromPMBES />

				<div className="extra_content"></div>

				<div className="extra_content"></div>
				<HomepageOvergeneratorPMBES />
			</Route>
			<Route exact path="/EN/LOB/">
				{value.showCookie && <Cookiemelding showCookie={showCookie} value={value} />}
				<HomepageENLOB wet={wet} clickHandlerSetLaw={clickHandlerSetLaw} />
				<HomepageWaaromENLOB />

				<div className="extra_content"></div>

				<div className="extra_content"></div>
				<HomepageOvergeneratorENLOB />
			</Route>
			<Route exact path="/EN/WOO/">
				{value.showCookie && <Cookiemelding showCookie={showCookie} value={value} />}
				<HomepageENWOO wet={wet} clickHandlerSetLaw={clickHandlerSetLaw} />
				<HomepageWaaromENWOO />

				<div className="extra_content"></div>

				<div className="extra_content"></div>
				<HomepageOvergeneratorENWOO />
			</Route>

			<Route exact path="/EN/BES/">
				{value.showCookie && <Cookiemelding showCookie={showCookie} value={value} />}
				<HomepageENBES wet={wet} clickHandlerSetLaw={clickHandlerSetLaw} />
				<HomepageWaaromENBES />

				<div className="extra_content"></div>

				<div className="extra_content"></div>
				<HomepageOvergeneratorENBES />
			</Route>
			<Route exact path="/NL/WOO/">
				{value.showCookie && <Cookiemelding showCookie={showCookie} value={value} />}
				<HomepageNLWOO wet={wet} clickHandlerSetLaw={clickHandlerSetLaw} />
				<HomepageWaaromNLWOO />

				<div className="extra_content"></div>

				<div className="extra_content"></div>
				<HomepageOvergeneratorNLWOO />
			</Route>
			<Route path="/NL/woo/StapVoorAf">
				<StapVoorAf />
			</Route>
			<Route path="/NL/woo/Stap1">
				<Stap1
					value={value}
					wet={wet}
					changeHandlerUser={changeHandlerUser}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerCompanyName={changeHandlerCompanyName}
					changeHandlerOnBehalf={changeHandlerOnBehalf}
					filteredDataText={filteredDataText}
					getCurrentDate={getCurrentDate}
				/>
			</Route>
			<Route path="/NL/woo/Stap2">
				<Stap2
					value={value}
					wet={wet}
					changeHandlerUser={changeHandlerUser}
					authorities={props.authorities}
					setAuthority={setAuthority}
					clickHandlerClearSelectedAuthority={clickHandlerClearSelectedAuthority}
					filteredDataText={filteredDataText}
					getCurrentDate={getCurrentDate}
					handleKeypathChange={handleKeypathChange}
				/>
			</Route>
			<Route path="/NL/woo/Stap3">
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

			<Route path="/NL/woo/Stap3_2">
				<Stap3_2
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerSubjectType={changeHandlerSubjectType}
					changeHandlerUser={changeHandlerUser}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
				/>
			</Route>
			<Route path="/NL/woo/Stap3_3">
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
			<Route path="/NL/woo/StapExtra">
				<StapExtra
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerCheckbox={changeHandlerCheckbox}
					filteredDataText={filteredDataText}
				/>
			</Route>
			<Route path="/NL/woo/StapEinde">
				<StapEinde
					resetState={resetState}
					getCurrentDate={getCurrentDate}
					value={value}
					filteredDataText={filteredDataText}
					exportHTMLDoc={exportHTMLDoc}
				/>
			</Route>
			<Route path="/EN/woo/StapVoorAf">
				<EnStapVoorAf />
			</Route>
			<Route path="/EN/woo/Stap1">
				<EnStap1
					value={value}
					wet={wet}
					changeHandlerUser={changeHandlerUser}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerCompanyName={changeHandlerCompanyName}
					changeHandlerOnBehalf={changeHandlerOnBehalf}
					filteredDataText={filteredDataText}
					getCurrentDate={getCurrentDate}
				/>
			</Route>
			<Route path="/EN/woo/Stap2">
				<EnStap2
					value={value}
					wet={wet}
					changeHandlerUser={changeHandlerUser}
					authorities={props.authorities}
					setAuthority={setAuthority}
					clickHandlerClearSelectedAuthority={clickHandlerClearSelectedAuthority}
					filteredDataText={filteredDataText}
					getCurrentDate={getCurrentDate}
					handleKeypathChange={handleKeypathChange}
				/>
			</Route>
			<Route path="/EN/woo/Stap3">
				<EnStap3
					getCurrentDate={getCurrentDate}
					value={value}
					clickHandlerStep={clickHandlerStep}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerUser={changeHandlerUser}
					changeHandlerSubjectType={changeHandlerSubjectType}
				/>
			</Route>

			<Route path="/EN/woo/Stap3_2">
				<EnStap3_2
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerSubjectType={changeHandlerSubjectType}
					changeHandlerUser={changeHandlerUser}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
				/>
			</Route>
			<Route path="/EN/woo/Stap3_3">
				<EnStap3_3
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
			<Route path="/EN/woo/StapExtra">
				<EnStapExtra
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerCheckbox={changeHandlerCheckbox}
					filteredDataText={filteredDataText}
				/>
			</Route>
			<Route path="/EN/woo/StapEinde">
				<EnStapEinde
					resetState={resetState}
					getCurrentDate={getCurrentDate}
					value={value}
					filteredDataText={filteredDataText}
					exportHTMLDoc={exportHTMLDoc}
				/>
			</Route>
			<Route path="/EN/bes/StapVoorAf">
				<EnBesStapVoorAf />
			</Route>
			<Route path="/EN/bes/Stap1">
				<EnBesStap1
					value={value}
					wet={wet}
					changeHandlerUser={changeHandlerUser}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerCompanyName={changeHandlerCompanyName}
					changeHandlerOnBehalf={changeHandlerOnBehalf}
					filteredDataText={filteredDataText}
					getCurrentDate={getCurrentDate}
				/>
			</Route>
			<Route path="/EN/bes/Stap2">
				<EnBesStap2
					value={value}
					wet={wet}
					changeHandlerUser={changeHandlerUser}
					authorities={props.authorities}
					setAuthority={setAuthority}
					clickHandlerClearSelectedAuthority={clickHandlerClearSelectedAuthority}
					filteredDataText={filteredDataText}
					getCurrentDate={getCurrentDate}
					handleKeypathChange={handleKeypathChange}
				/>
			</Route>
			<Route path="/EN/bes/Stap3">
				<EnBesStap3
					getCurrentDate={getCurrentDate}
					value={value}
					clickHandlerStep={clickHandlerStep}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerUser={changeHandlerUser}
					changeHandlerSubjectType={changeHandlerSubjectType}
				/>
			</Route>

			<Route path="/EN/bes/Stap3_2">
				<EnBesStap3_2
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerSubjectType={changeHandlerSubjectType}
					changeHandlerUser={changeHandlerUser}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
				/>
			</Route>
			<Route path="/EN/bes/Stap3_3">
				<EnBesStap3_3
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
			<Route path="/EN/bes/StapExtra">
				<EnBesStapExtra
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerCheckbox={changeHandlerCheckbox}
					filteredDataText={filteredDataText}
				/>
			</Route>
			<Route path="/EN/bes/StapEinde">
				<EnBesStapEinde
					resetState={resetState}
					getCurrentDate={getCurrentDate}
					value={value}
					filteredDataText={filteredDataText}
					exportHTMLDoc={exportHTMLDoc}
				/>
			</Route>
			<Route path="/EN/lob/StapVoorAf">
				<EnLobStapVoorAf />
			</Route>
			<Route path="/EN/lob/Stap1">
				<EnLobStap1
					value={value}
					wet={wet}
					changeHandlerUser={changeHandlerUser}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerCompanyName={changeHandlerCompanyName}
					changeHandlerOnBehalf={changeHandlerOnBehalf}
					filteredDataText={filteredDataText}
					getCurrentDate={getCurrentDate}
				/>
			</Route>
			<Route path="/EN/lob/Stap2">
				<EnLobStap2
					value={value}
					wet={wet}
					changeHandlerUser={changeHandlerUser}
					authorities={props.authorities}
					setAuthority={setAuthority}
					clickHandlerClearSelectedAuthority={clickHandlerClearSelectedAuthority}
					filteredDataText={filteredDataText}
					getCurrentDate={getCurrentDate}
					handleKeypathChange={handleKeypathChange}
				/>
			</Route>
			<Route path="/EN/lob/Stap3">
				<EnLobStap3
					getCurrentDate={getCurrentDate}
					value={value}
					clickHandlerStep={clickHandlerStep}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerUser={changeHandlerUser}
					changeHandlerSubjectType={changeHandlerSubjectType}
				/>
			</Route>

			<Route path="/EN/lob/Stap3_2">
				<EnLobStap3_2
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerSubjectType={changeHandlerSubjectType}
					changeHandlerUser={changeHandlerUser}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
				/>
			</Route>
			<Route path="/EN/lob/Stap3_3">
				<EnLobStap3_3
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
			<Route path="/EN/lob/StapExtra">
				<EnLobStapExtra
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerCheckbox={changeHandlerCheckbox}
					filteredDataText={filteredDataText}
				/>
			</Route>
			<Route path="/EN/lob/StapEinde">
				<EnLobStapEinde
					resetState={resetState}
					getCurrentDate={getCurrentDate}
					value={value}
					filteredDataText={filteredDataText}
					exportHTMLDoc={exportHTMLDoc}
				/>
			</Route>
			<Route path="/PM/lob/StapVoorAf">
				<PmLobStapVoorAf />
			</Route>
			<Route path="/PM/lob/Stap1">
				<PmLobStap1
					value={value}
					wet={wet}
					changeHandlerUser={changeHandlerUser}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerCompanyName={changeHandlerCompanyName}
					changeHandlerOnBehalf={changeHandlerOnBehalf}
					filteredDataText={filteredDataText}
					getCurrentDate={getCurrentDate}
				/>
			</Route>
			<Route path="/PM/lob/Stap2">
				<PmLobStap2
					value={value}
					wet={wet}
					changeHandlerUser={changeHandlerUser}
					authorities={props.authorities}
					setAuthority={setAuthority}
					clickHandlerClearSelectedAuthority={clickHandlerClearSelectedAuthority}
					filteredDataText={filteredDataText}
					getCurrentDate={getCurrentDate}
					handleKeypathChange={handleKeypathChange}
				/>
			</Route>
			<Route path="/PM/lob/Stap3">
				<PmLobStap3
					getCurrentDate={getCurrentDate}
					value={value}
					clickHandlerStep={clickHandlerStep}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerUser={changeHandlerUser}
					changeHandlerSubjectType={changeHandlerSubjectType}
				/>
			</Route>

			<Route path="/PM/lob/Stap3_2">
				<PmLobStap3_2
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerSubjectType={changeHandlerSubjectType}
					changeHandlerUser={changeHandlerUser}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
				/>
			</Route>
			<Route path="/PM/lob/Stap3_3">
				<PmLobStap3_3
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
			<Route path="/PM/lob/StapExtra">
				<PmLobStapExtra
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerCheckbox={changeHandlerCheckbox}
					filteredDataText={filteredDataText}
				/>
			</Route>
			<Route path="/PM/lob/StapEinde">
				<PmLobStapEinde
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
