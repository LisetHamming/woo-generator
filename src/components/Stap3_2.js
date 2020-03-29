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

function Stap3_2({ value, filteredDataText, changeHandlerCheckbox, changeHandlerUser, changeHandlerSubjectType }) {

    return (
        <div className="formLetter">
         <img className="logoWob" src={logo}/>
      <h2>Stap 3: Welke informatie zoek je?</h2>
      <span><p>Wil je alle documenten die de overheidsinstantie heeft over je onderwerp? Of weet je al precies welke documenten je wilt hebben. Maak je keuze.</p><PopupButton number="10" />
      </span>
        
        

        <form>  
              <span>
              <label  className="container">
              <input onChange={changeHandlerSubjectType} id="subjectSpecific" type="radio" checked={value.subjectType==="specific"} name="subjectSpecific" value="specific" /> Ik wil specifieke documenten opvragen 
               <div class="checkmark"></div>
              </label><PopupButton number="11" />
             
              </span>
          
            <span><label className="container"> <input onChange={changeHandlerSubjectType} id="subjectAll" type="radio" checked={value.subjectType==="all"} name="subjectSpecific" value="all" /> Ik wil alles over het onderwerp
             <div class="checkmark"></div></label><PopupButton number="12" /></span>
           



        </form>

       <span> <p>Welke informatie moet de overheid openbaar maken</p><PopupButton number="13" /></span>
       <span className="extraPadding"> <p>Denk goed na welke documenten, zoals e-mails, wel of niet nuttig zijn.</p><PopupButton number="14" /> </span>
        <Link to="/Stap3">vorige pagina</Link>
        <Link to="/Stap3_3">volgende pagina</Link>        
        <LetterUI value={value} 
                   filteredDataText={filteredDataText}
                   />
      </div>
    )
}
export default Stap3_2