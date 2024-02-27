import { set } from "lodash/fp";
import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import machine from "../assets/images/WOO_knop_animatie.gif";
import gifLogo from "../assets/logo/Spoon_Logo_animatie_BlackonWhite_Gif.gif";
import vvojLogo from "../assets/logo/VVOJ_Logo_RGB.png";
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
import HomepageENFooter from "./en/HomepageFooter";
import HomepageENWaarom from "./en/HomepageWaarom";
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
import HomepageNLBES from "./nl/bes/Homepage";
import HomepageOvergeneratorNLBES from "./nl/bes/HomepageOvergenerator";
import HomepageWaaromNLBES from "./nl/bes/HomepageWaarom";
import NLBesStap1 from "./nl/bes/Stap1";
import NLBesStap2 from "./nl/bes/Stap2";
import NLBesStap3 from "./nl/bes/Stap3";
import NLBesStap3_2 from "./nl/bes/Stap3_2";
import NLBesStap3_3 from "./nl/bes/Stap3_3";
import NLBesStapEinde from "./nl/bes/StapEinde";
import NLBesStapExtra from "./nl/bes/StapExtra";
import NLBesStapVoorAf from "./nl/bes/StapVoorAf";
import HomepageNLFooter from "./nl/HomepageFooter";
import HomepageNLWaarom from "./nl/HomepageWaarom";
import HomepageNLLOB from "./nl/lob/Homepage";
import HomepageOvergeneratorNLLOB from "./nl/lob/HomepageOvergenerator";
import HomepageWaaromNLLOB from "./nl/lob/HomepageWaarom";
import NLLobStap1 from "./nl/lob/Stap1";
import NLLobStap2 from "./nl/lob/Stap2";
import NLLobStap3 from "./nl/lob/Stap3";
import NLLobStap3_2 from "./nl/lob/Stap3_2";
import NLLobStap3_3 from "./nl/lob/Stap3_3";
import NLLobStapEinde from "./nl/lob/StapEinde";
import NLLobStapExtra from "./nl/lob/StapExtra";
import NLLobStapVoorAf from "./nl/lob/StapVoorAf";
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
import PmBesStap1 from "./pm/bes/Stap1";
import PmBesStap2 from "./pm/bes/Stap2";
import PmBesStap3 from "./pm/bes/Stap3";
import PmBesStap3_2 from "./pm/bes/Stap3_2";
import PmBesStap3_3 from "./pm/bes/Stap3_3";
import PmBesStapVoorAf from "./pm/bes/StapVoorAf";
import HomepagePMFooter from "./pm/HomepageFooter";
import HomepagePMWaarom from "./pm/HomepageWaarom";
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
				<div className="homepageLogos">
					<img src={gifLogo} className="logo_SPOON" alt="logo expertisecentrum spoon" />
					<img src={vvojLogo} className="logo_VVOJ" alt="logo vvoj" />
				</div>
				<div className="homepageBlock">
					<div className="blockText">
						<h1>Welkom bij de generator om overheidsinformatie op te vragen!</h1>
						<p> </p>
						<p>
							Je bent hier omdat je informatie wilt opvragen bij een overheidsinstantie in het Koninkrijk der
							Nederlanden.
						</p>
						<p>
							Jawel! Vanaf nu is er niet alleen de <b>Woo-generator</b> voor Nederland, maar ook een{" "}
							<b>WOB/BES-generator</b> voor Bonaire, St. Eustatius en Saba en een <b>LOB-generator</b> voor Curacao,
							Aruba en St. Maarten (CAS-eilanden).
						</p>
						<p>Met onze generator is een openbaarmakingsverzoek indienen een koud kunstje.</p>
						<h1>Schrijf in 3 simpele stappen je eigen verzoek om overheidsinformatie</h1>
						<ol>
							<li>1. Je vult een aantal gegevens over jezelf in</li>
							<li>2. Je selecteert een overheidsinstantie</li>
							<li>3. Je kiest wat voor documenten of informatie je zoekt</li>
							<li>Indienen maar!</li>
						</ol>
						<p>
							Klik op een van de knoppen hieronder om te kiezen tussen Nederland, BES-eilanden of de CAS-eilanden.
							Rechtsboven kun je op elk moment de taal van je voorkeur wijzigen.
						</p>

						<div className="nextButtons">
							<Link to="/NL/woo/" onClick={e => clickHandlerSetLaw("Woo")}>
								WOO
							</Link>
							<Link to="/NL/bes/" onClick={e => clickHandlerSetLaw("Wob BES")}>
								WOB-BES
							</Link>
							<Link to="/NL/lob/" onClick={e => clickHandlerSetLaw("Lob")}>
								LOB
							</Link>
						</div>
					</div>
					<div>
						<img src={machine} alt="" />
					</div>
				</div>
				<HomepageNLWaarom />
				<HomepageNLFooter />
			</Route>
			<Route exact path="/EN/">
				{value.showCookie && <Cookiemelding showCookie={showCookie} value={value} />}
				<div className="selectLanguage">
					<Link to="/">NL</Link>
					<Link to="/EN/">EN</Link>
					<Link to="/PM/">PAP</Link>
				</div>
				<div className="homepageLogos">
					<img src={gifLogo} className="logo_SPOON" alt="logo expertisecentrum spoon" />
					<img src={vvojLogo} className="logo_VVOJ" alt="logo vvoj" />
				</div>
				<div className="homepageBlock">
					<div className="blockText">
						<h1>Write your own request</h1>
						<p>Welcome to the FOI generator! </p>
						<p>
							{" "}
							You are here because you want to request information from a government agency in the Kingdom of the
							Netherlands.{" "}
						</p>
						<p>
							Yes! From now on there is not only the Woo generator for the Netherlands, but also a WOB-BES generator for
							Bonaire, St. Eustatius and Saba (BES islands) and a LOB generator for Curaçao, Aruba and St. Maarten (CAS
							islands).
						</p>
						<p>And that's not all: the generator is available in multiple languages.</p>
						<p>With our generator, submitting a disclosure request in all parts of the Kingdom is a breeze. </p>

						<ol>
							<li>1. You fill in a number of details about yourself </li>
							<li>2. You select a government agency </li>
							<li>3. You choose what kind of documents or information you are looking for… </li>
							<li>4. …file it!</li>
						</ol>
						<p>
							Click on one of the buttons below to choose between the Netherlands, BES islands or the CAS islands. At
							the top right, you can change your preferred language at any time.{" "}
						</p>
						<div className="nextButtons">
							<Link to="/EN/woo/" onClick={e => clickHandlerSetLaw("Woo")}>
								WOO
							</Link>
							<Link to="/EN/lob/" onClick={e => clickHandlerSetLaw("Lob")}>
								LOB
							</Link>
							<Link to="/EN/bes/" onClick={e => clickHandlerSetLaw("Wob BES")}>
								WOB-BES
							</Link>
						</div>
					</div>
					<div>
						<img src={machine} alt="" />
					</div>
				</div>
				<HomepageENWaarom />
				<HomepageENFooter />
			</Route>
			<Route exact path="/PM/">
				{value.showCookie && <Cookiemelding showCookie={showCookie} value={value} />}
				<div className="selectLanguage">
					<Link to="/">NL</Link>
					<Link to="/EN/">EN</Link>
					<Link to="/PM/">PAP</Link>
				</div>
				<div className="homepageLogos">
					<img src={gifLogo} className="logo_SPOON" alt="logo expertisecentrum spoon" />
					<img src={vvojLogo} className="logo_VVOJ" alt="logo vvoj" />
				</div>
				<div className="homepageBlock">
					<div className="blockText">
						<h1>
							Bo kier sa kico bo gobierno ta haciendo? Skirbi bo prome peticion pa divulga informacion gubernamental den
							3 paso!
						</h1>
						<p>Bon bini na e generador pa divulga informacion gubernamental! </p>
						<p> Bo t’aki pasobra bo kier pidi informacion cerca un instancia gubernamental den Reino Hulandes. </p>
						<p>
							Asina mes! Desde awo, e Woo-generator no ta solamente disponibel pa pidi informacion gubernamental na
							Hulanda, pero bo por haci un peticion na e gobiernonan tanto na e paisnan den Reino Aruba, Kòrsou y Sint
							Maarten (Lob) como na e islanan cu ta parti di Hulanda; Boneiro, Saba y Sint Eustatius (Wob-BES).
						</p>
						<p>Cu nos generador, entrega un peticion na cualkier pais of isla den Reino Hulandes ta masha facil mes.</p>

						<ol>
							<li>1. Prome, bo ta yena informacion manera bo nomber y detayenan di contacto</li>
							<li>2. Djey bo ta selecta un instancia gubernamental</li>
							<li>3. Finalmente, bo ta scoge ki tipo di documento of informacion bo ta buscando</li>
							<li>4. Ki bo ta warda? Bo ta cla pa entrega e peticion!</li>
						</ol>
						<p>
							Primi riba un di e botonnan aki bou pa scoge na unda bo kier pidi pa divulga informacion gubernamental,
							sea cu ta na Hulanda, Aruba, Kòrsou of Sint Maarten, of Boneiro, Statia of Saba. Ariba na banda drechi bo
							por scoge pa cambia di idioma.{" "}
						</p>

						<div className="nextButtons">
							<Link to="/EN/woo/" onClick={e => clickHandlerSetLaw("Woo")}>
								WOO
							</Link>
							<Link to="/PM/lob/" onClick={e => clickHandlerSetLaw("Lob")}>
								LOB
							</Link>
							<Link to="/PM/bes/" onClick={e => clickHandlerSetLaw("Wob BES")}>
								WOB-BES
							</Link>
						</div>
					</div>
					<div>
						<img src={machine} alt="" />
					</div>
				</div>
				<HomepagePMWaarom />
				<HomepagePMFooter />
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
			<Route exact path="/NL/BES/">
				{value.showCookie && <Cookiemelding showCookie={showCookie} value={value} />}
				<HomepageNLBES wet={wet} clickHandlerSetLaw={clickHandlerSetLaw} />
				<HomepageWaaromNLBES />

				<div className="extra_content"></div>
				<div className="extra_content"></div>
				<HomepageOvergeneratorNLBES />
			</Route>
			<Route exact path="/NL/LOB/">
				{value.showCookie && <Cookiemelding showCookie={showCookie} value={value} />}
				<HomepageNLLOB wet={wet} clickHandlerSetLaw={clickHandlerSetLaw} />
				<HomepageWaaromNLLOB />

				<div className="extra_content"></div>
				<div className="extra_content"></div>
				<HomepageOvergeneratorNLLOB />
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

			<Route path="/NL/lob/StapVoorAf">
				<NLLobStapVoorAf />
			</Route>
			<Route path="/NL/lob/Stap1">
				<NLLobStap1
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
			<Route path="/NL/lob/Stap2">
				<NLLobStap2
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
			<Route path="/NL/lob/Stap3">
				<NLLobStap3
					getCurrentDate={getCurrentDate}
					value={value}
					clickHandlerStep={clickHandlerStep}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerUser={changeHandlerUser}
					changeHandlerSubjectType={changeHandlerSubjectType}
				/>
			</Route>

			<Route path="/NL/lob/Stap3_2">
				<NLLobStap3_2
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerSubjectType={changeHandlerSubjectType}
					changeHandlerUser={changeHandlerUser}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
				/>
			</Route>
			<Route path="/NL/lob/Stap3_3">
				<NLLobStap3_3
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
			<Route path="/NL/lob/StapExtra">
				<NLLobStapExtra
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerCheckbox={changeHandlerCheckbox}
					filteredDataText={filteredDataText}
				/>
			</Route>
			<Route path="/NL/lob/StapEinde">
				<NLLobStapEinde
					resetState={resetState}
					getCurrentDate={getCurrentDate}
					value={value}
					filteredDataText={filteredDataText}
					exportHTMLDoc={exportHTMLDoc}
				/>
			</Route>

			<Route path="/NL/bes/StapVoorAf">
				<NLBesStapVoorAf />
			</Route>
			<Route path="/NL/bes/Stap1">
				<NLBesStap1
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
			<Route path="/NL/bes/Stap2">
				<NLBesStap2
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
			<Route path="/NL/bes/Stap3">
				<NLBesStap3
					getCurrentDate={getCurrentDate}
					value={value}
					clickHandlerStep={clickHandlerStep}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerUser={changeHandlerUser}
					changeHandlerSubjectType={changeHandlerSubjectType}
				/>
			</Route>

			<Route path="/NL/bes/Stap3_2">
				<NLBesStap3_2
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerSubjectType={changeHandlerSubjectType}
					changeHandlerUser={changeHandlerUser}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
				/>
			</Route>
			<Route path="/NL/bes/Stap3_3">
				<NLBesStap3_3
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
			<Route path="/NL/bes/StapExtra">
				<NLBesStapExtra
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerCheckbox={changeHandlerCheckbox}
					filteredDataText={filteredDataText}
				/>
			</Route>
			<Route path="/NL/bes/StapEinde">
				<NLBesStapEinde
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
			<Route path="/PM/bes/StapVoorAf">
				<PmBesStapVoorAf />
			</Route>
			<Route path="/PM/bes/Stap1">
				<PmBesStap1
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
			<Route path="/PM/bes/Stap2">
				<PmBesStap2
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
			<Route path="/PM/bes/Stap3">
				<PmBesStap3
					getCurrentDate={getCurrentDate}
					value={value}
					clickHandlerStep={clickHandlerStep}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
					changeHandlerUser={changeHandlerUser}
					changeHandlerSubjectType={changeHandlerSubjectType}
				/>
			</Route>

			<Route path="/PM/bes/Stap3_2">
				<PmBesStap3_2
					getCurrentDate={getCurrentDate}
					value={value}
					changeHandlerSubjectType={changeHandlerSubjectType}
					changeHandlerUser={changeHandlerUser}
					filteredDataText={filteredDataText}
					changeHandlerCheckbox={changeHandlerCheckbox}
				/>
			</Route>
			<Route path="/PM/bes/Stap3_3">
				<PmBesStap3_3
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
