import React from "react";
import bg from "./../../../assets/icons/orange-single-line.png";

function HomepageWaarom() {
    return (
        <div className="sectionWaarom">
            <div className="sectionBlock">
                <div>
                    <h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
                        Pakico un peticion di revelacion?
                    </h1>
                    <p>
                        Tur hende tin e derecho pa pidi informacion registra den dokumentonan for di gobèrnu. 
						Ley di transparencia gubernamental BES (Wet openbaarheid van bestuur BES, Wob BES) ta regula kico ta exigi di un peticion pa divulga documentonan. 
						Un peticion Wob BES ta crucial pa por haya acceso
                        na informacion cu gobierno no ta libera di su mes. Wak {""}
                        <a href="https://wetten.overheid.nl/BWBR0028154/2010-10-10" className="plaintext" target="_blank">
                        aki
                        </a>{" "}
                        pa Ley di transparencia gubernamental BES.
                    </p>
                </div>
                <div>
                    <h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
                        Con mi por hasi un peticion pa divulga documentonan?
                    </h1>
                    <p>
                        Skirbi un peticion Woo no ta difícil, pero e peticion mester cumpli cu algun condicion. 
                        Cu e Wob BES generator, nos ta yuda bo redacta un peticion apropia y valido.
						Scoge cua dokumentonan bo kier pidi y di cua instancia gubernamental. 
                        Con bo por haya e instansia gubernamental? 
                        Afortunadamente por busca den nos lista di instancianan gubernamental den Reino Hulandes. 
                        Cla ta! Awor bo por warda bo peticion Wob BES y mand'e via mail of digitalmente.
                    </p>
                </div>
                <div>
                    <h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
                        Pakico un generado Wob BES?
                    </h1>
                    <p>
							Hopi hende y periodista no ta conoci cu na e islanan Caribense den Reino publico tin derecho sa tur loke nan gobierno ta haci. 
							Esey no ta nan culpa, pasobra gobierno no ta ehecuta e derecho aki casi. Kiermen no tin casi transparencia, mientras cu e derecho si ta existi! 
							Na Hulanda periodistanan y publico sa saca revelacion regularmente a base di Hulanda su ley di transparencia. Asina nan ta pone gobierno responsabilisa nan mes pa e maneho cu nan ta implementa. 
							Cu e website aki nos kier traha riba emancipacion di e derecho di informacion den Caribe Hulandes. 
							Pa facilita emancipacion di e derecho aki, e generador Lob t'ey pa percura pa bo peticion ta completo y valido.
							</p>
                            <br></br>
                            <p>Kiermen haci uzo di bo derecho y cuminsa un peticion!
                    </p>
                </div>
                <div>
                    <h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
                        Ki ora no mester entrega un peticion Wob BES?
                    </h1>
                    <p>
                        Bo ta uza un peticion Wob BES solamente pa documentonan cu ainda no ta publiko. Prome
                        cu bo entrega un peticion Woo, bo mester check si kico bo ta busca ya ta publiko. Por ehempel, bo por wak {""}
                        <a href="https://open.overheid.nl/" className="plaintext" target="_blank">
                        aki
                        </a>{" "}
						{" "}Aki un tip, documentonan cu ya a wordo divulga ta kompasnan praktiko pa haya informacion relaciona cu ainda no ta publico!
								Por ehempel, si bo sa di existencia di otorgamento di un permiso pa construi un hotel, y bo kier sa kico e ministernan y ambtenaarnan a papia cu e desaroyadornan, bo por pidi e corespondencia cu a bin den cuadro di otorgamento di e permiso pa construi. {""}
                    </p>
                    <br></br>
                    <p>
					Fuera di esey, tene cuenta cu gobiero no mester divulga tur informacion: e Lob tin algun
                                motibo pa rechasa manera confidencialidad di negoshi y respet pa privacidad. 
                                Algun di e excepcionnan aki ta exigi cu henter un dokumento keda sin divulga, 
                                mientras cu otro exemptionnan ta exigi cu e instancia gubernamental aplica e excepcion riba parti di un documento. 
                                Esakinan por wordo redacta mientras otro partinan ta wordo divulga. Finalmente, ora gobierno rechasa un documento a base e excepcionnan, e mester motiva esaki bon.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default HomepageWaarom;