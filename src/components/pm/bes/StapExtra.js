import React from "react";
// import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";

function StapExtra({ value, changeHandlerCheckbox, filteredDataText, getCurrentDate }) {
	// const tagManagerArgs = {
	// 	dataLayer: {
	// 		page: "StapExtra"
	// 	},
	// 	dataLayerName: "PageDataLayer"
	// };
	// {
	// 	TagManager.dataLayer(tagManagerArgs);
	// }
	return (
		<div className="formLetter">
			<p className="logo">Generado Wob BES</p>

			<h2>Opcionnan extra</h2>
			<p>
				E opcionnan aki bou generalmente ta agranda e chens cu e informacion cu bo ta pidiendo ta wordo haci publico
				pasobra nan ta anticipa riba obstaculonan cu por wordo confronta den e proceso di haci e peticion pa divulga
				documentonan y recibi contesta. Ora bo selecta e opcionnan bo por mira ki texto e ta genera den bo peticion den
				concepto. Lesa e blokinan di texto bon pa sa kico e opcionnan ta nifica pa bo peticion. No ta mal idea pa
				selecta un par, pero wak bon si nan ta aplicabel den bo situacion, of si e lo ta un beneficio pa bo.
			</p>
			<form>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text1"
							type="checkbox"
							checked={value[1]}
							name="checkText"
							value="1"
						/>{" "}
						Coordinacion
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text2"
							type="checkbox"
							checked={value[2]}
							name="checkText"
							value="2"
						/>{" "}
						Splicacion verbal
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text3"
							type="checkbox"
							checked={value[3]}
							name="checkText"
							value="3"
						/>{" "}
						Informacion cu ya ta publico
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text4"
							type="checkbox"
							checked={value[4]}
							name="checkText"
							value="4"
						/>{" "}
						Peticion cu ta posibelmente amplio
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text5"
							type="checkbox"
							checked={value[5]}
							name="checkText"
							value="5"
						/>{" "}
						Duna e informacion den forma anonimo
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text6"
							type="checkbox"
							checked={value[6]}
							name="checkText"
							value="6"
						/>{" "}
						Opinionnan administrativo personal, loke den Hulandes yama persoonlijke beleidsopvattingen
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
							checked={value[7]}
							name="checkText"
							value="7"
						/>{" "}
						Resumen di documentonan
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
							checked={value[8]}
							name="checkText"
							value="8"
						/>{" "}
						Splicacion ora documentonan ta rechasa
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text9"
							type="checkbox"
							checked={value[9]}
							name="checkText"
							value="9"
						/>{" "}
						Preferencia pa haci e documentonan publico den forma digital
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
				<span>
					<label className="container">
						<input
							onChange={changeHandlerCheckbox}
							id="text10"
							type="checkbox"
							checked={value[10]}
							name="checkText"
							value="10"
						/>{" "}
						Agrega lista di documento
						<br />
						<div className="checkmark"></div>
					</label>
				</span>
			</form>
			<span className="extraPadding"></span>
			<Link to="/PM/bes/Stap3_3">Bay bek</Link>
			<Link to="/PM/bes/StapEinde">Ultimo paso</Link>
			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default StapExtra;
