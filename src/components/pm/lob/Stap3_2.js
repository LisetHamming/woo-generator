import React from "react";
import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import PopupButton from "../../popups/PopupButton";
import LetterUI from "./LetterUI";

function Stap3_2({
	value,
	filteredDataText,
	changeHandlerCheckbox,
	changeHandlerUser,
	changeHandlerSubjectType,
	getCurrentDate
}) {
	const tagManagerArgs = {
		dataLayer: {
			page: "Stap3_2"
		},
		dataLayerName: "PageDataLayer"
	};
	{
		TagManager.dataLayer(tagManagerArgs);
	}
	return (
		<div className="formLetter">
			<p className="logo">Woo-generator</p>
			<h2>Paso 3: Ki informacion bo ta buscando?</h2>
			<p>Aki bo ta describi e topico di bo peticion. Esey kiermen cu bo ta describi ki informacion bo ta buscando.</p>
			<br />
			<span>
				<p>
					Tene cuenta cu bo solamente por pidi informacion cu ta warda den documentonan, riba papel of digital. Un
					documento por ta; un e-mail, un mensahe di WhatsApp, un rapport den forma di papel of un PDF. Tur loke ta
					wordo skirbi denter di un instancia gubernamental y tin relacion cu e maneho di e organisacion, por wordo pidi
					via e Lob.
				</p>
				<PopupButton number="10" />
			</span>

			<form>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerSubjectType}
							id="subjectSpecific"
							type="radio"
							checked={value.subjectType === "specific"}
							name="subjectType"
							value="specific"
						/>{" "}
						Mi kier pidi documentonan specifico
						<div className="checkmark"></div>
					</label>
					<PopupButton number="11" />
				</span>

				<span>
					<label className="container">
						{" "}
						<input
							onChange={changeHandlerSubjectType}
							id="subjectAll"
							type="radio"
							checked={value.subjectType === "all"}
							name="subjectType"
							value="all"
						/>{" "}
						Mi kier pidi tur e documentonan cu e instancia gubernamental tin riba e topico aki
						<div className="checkmark"></div>
					</label>
					<PopupButton number="12" />
				</span>
			</form>

			<span>
				{" "}
				<p>Cua documentonan gobierno mester haci publico</p>
				<PopupButton number="13" />
			</span>
			<span className="extraPadding">
				{" "}
				<p>Pensa bon tocante cua documentonan ta deseabel y cua no.</p>
				<PopupButton number="14" />{" "}
			</span>
			<Link to="/PM/lob/Stap3">Bay bek</Link>
			<Link to="/PM/lob/Stap3_3">Proximo paso</Link>
			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default Stap3_2;
