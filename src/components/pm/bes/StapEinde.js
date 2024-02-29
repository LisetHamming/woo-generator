import React from "react";
// import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";
// const tagManagerArgs = {
// 	dataLayer: {
// 		page: "Print-brief"
// 	},
// 	dataLayerName: "PageDataLayer"
// };

function StapEinde({ value, filteredDataText, exportHTMLDoc, getCurrentDate, resetState }) {
	// TagManager.dataLayer(tagManagerArgs);
	return (
		<div className="formLetter">
			<p className="logo">Generado Wob BES</p>
			<h2 className="hidePrint">Ultimo check!</h2>
			<p className="extraPadding hidePrint">Peticion Lob cu topico: {value.subjectLong}</p>
			<p className="hidePrint">
				Aunke e generado Wob BES ta traha cu hopi cuido, bo mes ta keda responsabel pa kico bo ta manda un instancia
				gubernamental.
				<br />
				<br />
			</p>
			<p className="extraPadding">
				<button
					className="buttonStyle2"
					onClick={() => {
						window.dataLayer.push({ event: "print lob PAP brief" });
						exportHTMLDoc();
					}}
				>
					Warda como .doc file
				</button>
			</p>
			<p>
				Bo peticion pa informacion
				<br />
				Lesa bon si e zinnan den bo peticion ta core bon. Tamabe ta bon pa bo pensa si tin mester di agrega informacion
				mas specifico den e peticion. Bo mes por agrega e cambionan aki si ta necesario, despues cu bo a warda e file.
				Si bo ta satisfecho, imprimi e carta y firm'e. Corda pa pidi un copia di bo carta ora bo entreg'e, of traha un copia
				prome cu bo mand'e via post.
				<br />
				<br />
				Manda digitalmente?
				<br />
				Aunke riba niun di e islanan ABCSSS e ley ta regla con un peticion mester wordo haci digitalmente, practica ta
				mustra cu entrega un peticion via e-mail ta posibel. 
				Semper informa di antemano na e departamento concerni con un peticion digital por wordo haci pa preveni cu e
				peticion no ta wordo acepta.
			</p>
			<br />
			<div>
				<p>
					En caso di pregunta y comentarionan por manda un e-mail na: woo-generator@vvoj.org
					<br />E Woo-generator ta semper den desaroyo y ta wordo traha cu placer y cuido. Laga nos sa si bo ta haya cu
					falta algo, of si bo ta prefera pa nos haci algo diferente. Claro, si bo ta contento nos lo kier tende esey
					tambe!{" "}
				</p>
				<br />
				<p>
					{" "}
					Bo kier conta otro personanan di e generado Lob?
					<br /> #lobgenerator{" "}
				</p>
				<br />
				<br />
			</div>
			<br />
			<Link to="/PM/bes/StapExtra">Bay bek</Link>
			<Link to="/" onClick={resetState}>
					Cuminsa di nobo
			</Link>

			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default StapEinde;
