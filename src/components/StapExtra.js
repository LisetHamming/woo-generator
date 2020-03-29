import React, { Component, useState } from "react"
import Popup from "./popups/Popup"
import PopupButton from "./popups/PopupButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import LetterUI from "./LetterUI"
import logo from "../assets/logo.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function StapExtra({ value, changeHandlerCheckbox, filteredDataText }) {
    return (
        <div className="formLetter">
         <img className="logoWob" src={logo}/>
				<h2>Extra opties</h2>
				<p>Schakel eventueel opties uit waarvan je denkt dat ze niet van toepassing zijn op jouw verzoek.</p>
				<form>
				 	<span><label className="container">
			           <input onChange={changeHandlerCheckbox} id="text1" type="checkbox" checked={value[1]} name="checkText" value="1" /> Geanonimiseerde documenten<br/>
			        <div class="checkmark"></div></label></span>
			        <span><label className="container">
			           <input onChange={changeHandlerCheckbox} id="text2" type="checkbox" checked={value[2]} name="checkText" value="2" /> Samenvattingen van documenten<br/>
			        <div class="checkmark"></div></label></span>
			        <span><label className="container"> 
			           <input onChange={changeHandlerCheckbox} id="text3" type="checkbox" checked={value[3]} name="checkText" value="3" /> Digitaal toezenden heeft mijn voorkeur<br/>
			        <div class="checkmark"></div></label></span>
			       <span><label className="container">
			           <input onChange={changeHandlerCheckbox} id="text4" type="checkbox" checked={value[4]} name="checkText" value="4" /> Informatie i.p.v. documenten<br/>
			        <div class="checkmark"></div></label></span>
			        <span><label className="container">
			           <input onChange={changeHandlerCheckbox} id="text5" type="checkbox" checked={value[5]} name="checkText" value="5" /> Insluiting alle formaten<br/>
			        <div class="checkmark"></div></label></span>
			        <span><label className="container">
			           <input onChange={changeHandlerCheckbox} id="text6" type="checkbox" checked={value[6]} name="checkText" value="6" /> Doorgeleiding<br/>
			        <div class="checkmark"></div></label></span>
			        <span><label className="container">
			           <input onChange={changeHandlerCheckbox} id="text7" type="checkbox" checked={value[7]} name="checkText" value="7" /> Motivering bij gedaging<br/>
			        <div class="checkmark"></div></label></span>
			        <span><label className="container">
			           <input onChange={changeHandlerCheckbox} id="text8" type="checkbox" checked={value[8]} name="checkText" value="8" /> Mondelinge toelichting<br/>
			        <div class="checkmark"></div></label></span>
			        <span><label className="container">
			           <input onChange={changeHandlerCheckbox} id="text9" type="checkbox" checked={value[9]} name="checkText" value="9" /> Bevestiging beslistermijn<br/>
      				<div class="checkmark"></div></label></span>
      			 </form>	
				<Link to="/Stap3_4">Terug</Link>
				<Link to="/StapEinde">Laatste stap</Link>
								<LetterUI value={value} 
      			 		   filteredDataText={filteredDataText}
      			 		   />
			</div>
    )
}
export default StapExtra