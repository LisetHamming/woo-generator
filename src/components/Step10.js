import React, { Component, useState } from "react"


function Step10(){
	return(
			<div>
				<h2>Extra opties</h2>
				<p>Schakel eventueel opties uit waarvan je denkt dat ze niet van toepassing zijn op jouw verzoek.</p>
				<form>
				 	
			           <input onChange={changeHandlerCheckbox} id="text1" type="checkbox" checked={value[1]} name="checkText" value="1" /> Geanonimiseerde documenten<br/>
			           <input onChange={changeHandlerCheckbox} id="text2" type="checkbox" checked={value[2]} name="checkText" value="2" /> Samenvattingen van documenten<br/>
			           <input onChange={changeHandlerCheckbox} id="text3" type="checkbox" checked={value[3]} name="checkText" value="3" /> Digitaal toezenden heeft mijn voorkeur<br/>
			           <input onChange={changeHandlerCheckbox} id="text4" type="checkbox" checked={value[4]} name="checkText" value="4" /> Informatie i.p.v. documenten<br/>
			           <input onChange={changeHandlerCheckbox} id="text5" type="checkbox" checked={value[5]} name="checkText" value="5" /> Insluiting alle formaten<br/>
			           <input onChange={changeHandlerCheckbox} id="text6" type="checkbox" checked={value[6]} name="checkText" value="6" /> Doorgeleiding<br/>
			           <input onChange={changeHandlerCheckbox} id="text7" type="checkbox" checked={value[7]} name="checkText" value="7" /> Motivering bij gedaging<br/>
			           <input onChange={changeHandlerCheckbox} id="text8" type="checkbox" checked={value[8]} name="checkText" value="8" /> Mondelinge toelichting<br/>
			           <input onChange={changeHandlerCheckbox} id="text9" type="checkbox" checked={value[9]} name="checkText" value="9" /> Bevestiging beslistermijn<br/>
      			 </form>	
				<link to="/Step9">vorige pagina</link>
				<link to="/LetterUI">volgende pagina</link>
			</div>
		)
}
export default Step10