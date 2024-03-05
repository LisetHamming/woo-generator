import React from "react";

function Cookiemelding({ showCookie, value }) {
	return (
		<div className="cookie">
			<div className="cookieBlock">
				<p className="logo">Generado Wob BES</p>
				<h1>E generado ta solamente haci uzo di un cookie funcional y uno analitico.</h1>
				<p>
				E generado ta solamente ta uza un cookie funcional y un cookie analitico. 
				Si bo paga e cookie funcional, e generador no lo funciona: despues di primi riba un opcion of yena un veld, por ehempel, e paragraf relaciona no lo aparece den e carta. 
				P'esey bo no por usa e generado sin acepta e cookie funcional. 
				Cu e cookie analitico nos por wak cuanto biaha y unda den Hulanda e generado ta wordo usa. 
				Nos ta kere cu esaki ta importante pa mehora e generado.
				</p>
				<br />
				<p>
					Toelichting functionele cookie:
					<br />
					E botonnan cu bo a primi y e veldnan cu bo a yena ta wordo warda den un cookie funcional den e navegado, pa asina e por reuza e informacion cu bo a yena den pasado. 
					Esaki ta agradabel durante e momento cu bo ta prepara bo peticion, pero pa un of otro rason, bo tin cu atende cu algo otro.
					Ora bo bay bek na e generado bo lo mira atrobe e informacion cu bo a yena prome. 
					Si bo kier haci e informacion yena limpi, por ehempel pasobra bo ta uzando un computer publico, na final bo por klik riba 'Cuminsa di nobo'. 
					Pero pa claridad atrobe: VVOJ mes no ta warda e informacion cu bo a yena of cua botonnan bo a primi.
					<br />
					<br />
				</p>

				<button
					className="buttonStyle"
					type="button"
					onClick={() => {
						showCookie(value.showCookie);
					}}
				>
					Mi ta di acuerdo
				</button>
			</div>
		</div>
	);
}
export default Cookiemelding;
