import React from "react";
import { Link } from "react-router-dom";
import PopupButton from "../../popups/PopupButton";

function StapVoorAf() {
	return (
		<div className="formLetter central">
			<p className="logo">Lob-generator</p>
			<h2>Bon pa sa</h2>
			<br />
			<br />

			<p>
				E Lob-generator no ta traha pa wordo uza riba bo telefon. P'esey ta miho si bo uz'e riba bo computer of laptop.
			</p>
			<br />
			<p>
				Riba e parti robes di e pantaya bo por wak ki informacion nos mester pa por traha bo peticion y e veldnan pa
				yena e informacion aki.
			</p>
			<span className="nieuwietje">
				<p>Pa mas splicacion bo por primi riba e icononan cu e i'nan riba dje.</p>
				<PopupButton number="19" />
				<br />
			</span>

			<p>
				Bo contestanan riba e preguntanan ta wordo procesa automaticamente y ta aparece den e peticion riba e banda
				drechi di e pantaya. Asina bo por wak si e texto ta core bon. Tur cos cu bo yena den bo navegador ta wordo warda
				localmente, kiermen cu niun otro hende por wak e informacion cu bo yena, ni nos mes.
			</p>
			<br />
			<p>
				Ora bo ta cla cu yena tur e informacion, bo por warda bo peticion den forma di un .doc file y cambia e texto
				despues si bo ta desea.
			</p>
			<br />
			<p className="extraPadding">
				Bo kier cambia par di cos, of duna un tiki mas splicacion den bo peticion? Bo por haci cambionan den e file cu
				nos ta duna bo despues.
			</p>
			<Link to="/">Bay bek</Link>

			<Link to="/PM/lob/Stap1">Mi ta compronde</Link>
		</div>
	);
}
export default StapVoorAf;
