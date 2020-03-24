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

function Stap3_4({ changeHandlerSubjectCheckbox, changeHandlerSubjectText, value, clickHandlerStep, filteredDataText }) {


    return (
        <div className="formLetter">
         <img className="logoWob" src={logo}/>
      <h2>Alles over je onderwerp - Welke documenttypes?</h2>
       
         <form>
                      
              <input onChange={changeHandlerSubjectCheckbox} id="subjectMeeting" type="checkbox" checked={value.subjectMeeting} name="subjectMeeting" value="subjectSpecific" /> Vergaderstukken<br/>
              {value.subjectMeeting&&
                <div>
                    <input onChange={changeHandlerSubjectCheckbox} id="subjectInvitations" type="checkbox" checked={value.subjectInvitations} name="subjectInvitations" value="subjectSpecific" />Uitnodigingen en presentielijsten<br/>
                    <input onChange={changeHandlerSubjectCheckbox} id="subjectDetermines" type="checkbox" checked={value.subjectDetermines} name="subjectDetermines" value="subjectSpecific" />Besluiten en besluitenlijsten<br/>
                     <input onChange={changeHandlerSubjectCheckbox} id="subjectMinutes" type="checkbox" checked={value.subjectMinutes} name="subjectMinutes" value="subjectSpecific" />Notulen<br/>

                </div>
                }
              <input onChange={changeHandlerSubjectCheckbox} id="subjectReports" type="checkbox" checked={value.subjectReports} name="subjectReports" value="subjectAll" /> Rapporten & presentaties<br/>
              <input onChange={changeHandlerSubjectCheckbox} id="subjectMeeting" type="checkbox" checked={value.subjectCorrespondance} name="subjectCorrespondance" value="subjectSpecific" /> Correspondentie en gespreksverslagen<br/>
               {value.subjectCorrespondance&&
                <div>
                    <input onChange={changeHandlerSubjectCheckbox} id="subjectInside" type="checkbox" checked={value.subjectInside} name="subjectInside" value="subjectSpecific" />Binnen de overheidsinstantie<br/>
                     {value.subjectCorrespondance&&
                      <div>
                      <input onChange={changeHandlerSubjectCheckbox} id="subjectInside1" type="checkbox" checked={value.subjectInside1} name="subjectInside1" value="subjectSpecific" />Brieven<br/>
                      <input onChange={changeHandlerSubjectCheckbox} id="subjectInside2" type="checkbox" checked={value.subjectInside2} name="subjectInside2" value="subjectSpecific" />Emails inclusief bijlagen<br/>
                      <input onChange={changeHandlerSubjectCheckbox} id="subjectInside3" type="checkbox" checked={value.subjectInside3} name="subjectInside3" value="subjectSpecific" />Emails zonder bijlagen<br/>
                      <input onChange={changeHandlerSubjectCheckbox} id="subjectInside4" type="checkbox" checked={value.subjectInside4} name="subjectInside4" value="subjectSpecific" />SMS-jes en WhatsApp-berichten<br/>
                      <input onChange={changeHandlerSubjectCheckbox} id="subjectInside5" type="checkbox" checked={value.subjectInside5} name="subjectInside5" value="subjectSpecific" />Memo's en notities<br/>
                      <input onChange={changeHandlerSubjectCheckbox} id="subjectInside6" type="checkbox" checked={value.subjectInside6} name="subjectInside6" value="subjectSpecific" />Gespreksverslagen<br/>
                      <label> Naam
                       <input onChange={changeHandlerSubjectText} id="subjectCorrespondancePerson" type="text" name="subjectCorrespondancePerson" value={value.subjectCorrespondancePerson} placeholder="Naam van persoon of instantie" /><br/>
                      </label>
                      </div>

                      
                     }


                    <input onChange={changeHandlerSubjectCheckbox} id="subjectOutside" type="checkbox" checked={value.subjectOutside} name="subjectOutside" value="subjectSpecific" />Met andere personen of organisaties<br/>
                </div>
              }
              <input onChange={changeHandlerSubjectCheckbox} id="subjectReports" type="checkbox" checked={value.subjectFinancial} name="subjectFinancial" value="subjectAll" /> Financiele documenten<br/>
              {value.subjectFinancial&&
                <div>
                  <input onChange={changeHandlerSubjectCheckbox} id="subjectReports" type="checkbox" checked={value.subjectFinancial1} name="subjectFinancial1" value="subjectAll" /> Jaarverslagen<br/>
                  <input onChange={changeHandlerSubjectCheckbox} id="subjectReports" type="checkbox" checked={value.subjectFinancial2} name="subjectFinancial2" value="subjectAll" /> Begrotingen<br/>
                  <input onChange={changeHandlerSubjectCheckbox} id="subjectReports" type="checkbox" checked={value.subjectFinancial3} name="subjectFinancial3" value="subjectAll" /> Transactieoverzichten<br/>
                </div>
              }
              <input onChange={changeHandlerSubjectCheckbox} id="subjectMeeting" type="checkbox" checked={value.subjectDataset} name="subjectDataset" value="subjectSpecific" /> Datasets<br/>
              {value.subjectDataset&&
                <div>
                <input onChange={changeHandlerSubjectCheckbox} id="subjectMeeting" type="checkbox" checked={value.subjectDataset1} name="subjectDataset1" value="subjectSpecific" /> Ruwe data<br/>
                <input onChange={changeHandlerSubjectCheckbox} id="subjectMeeting" type="checkbox" checked={value.subjectDataset2} name="subjectDataset2" value="subjectSpecific" /> Overzicht<br/>
                <label> Veldnaam ? nieuwe naam verzinnen
                  <input onChange={changeHandlerSubjectText} id="subjectMeeting" type="text" name="subjectDataset3" value={value.subjectDataset3} placeholder="Noem specifieke data" /> <br/>
                </label>
                </div>

              }
              <input onChange={changeHandlerSubjectCheckbox} id="subjectReports" type="checkbox" checked={value.subjectElse} name="subjectElse" value="subjectAll" /> Anders<br/>
              {value.subjectElse&&
                <label> Veldnaam ? nieuwe naam verzinnen
                  <input onChange={changeHandlerSubjectText} id="subjectMeeting" type="text" name="subjectElse1" value={value.subjectElse1} placeholder="Noem specifieke data" /> <br/>
                </label>
              }

          </form> 
 
             
        <p>Welke informatie moet de overheid openbaar maken.<button>ietje</button></p>
        <p>Denk goed na welke documenten, zoals e-mails, wel of niet nuttig zijn.<button>ietje</button></p>
        <Link to="/Stap3_3">vorige pagina</Link>
        <Link to="/StapExtra" onClick={()=>clickHandlerStep("step9")}>volgende pagina</Link>
        <LetterUI value={value} 
                   filteredDataText={filteredDataText}
                   />
      </div>
    )
}
export default Stap3_4