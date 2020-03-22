import React, { Component, useState } from "react"
import Popup from "./popups/Popup"
import PopupButton from "./popups/PopupButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import LetterUI from "./LetterUI"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Step6({ value, filteredDataText, changeHandlerCheckbox, changeHandlerUser, changeHandlerSubjectType }) {

    return (
        <div>
      <h2>Alles of specifiek?</h2>
      <p>Wil je alle documenten die de overheidsinstantie heeft over je onderwerp? Of weet je al precies welke documenten je wilt hebben. Maak je keuze.</p><PopupButton number="10" />
        
        

        <form>  
              
              <input onChange={changeHandlerSubjectType} id="subjectSpecific" type="radio" checked={value.subjectType==="specific"} name="subjectSpecific" value="specific" /> Ik wil specifieke documenten opvragen <PopupButton number="11" /><br/>
            {value.subjectType==="specific"&&
              <div>
                <label>Omschrijving van document
                  <input id="subjectSpecificText" value={value.subjectSpecificText} onChange={changeHandlerUser} type="textarea"/><br/>
                </label>
                <label>Datum van document
                  <input id="subjectSpecificDate" value={value.subjectSpecificDate} onChange={changeHandlerUser} type="date"/><br/>
                </label>
              </div>
          }
             <input onChange={changeHandlerSubjectType} id="subjectAll" type="radio" checked={value.subjectType==="all"} name="subjectSpecific" value="all" /> Ik wil alles over het onderwerp<PopupButton number="12" /><br/>
            {value.subjectType==="all"&&
              <div>
                  <input onChange={changeHandlerCheckbox} id="text1" type="checkbox" checked={value[10]} name="checkText" value="10" />Vergaderstukken<br/>
                 <input onChange={changeHandlerCheckbox} id="text2" type="checkbox" checked={value[11]} name="checkText" value="11" /> Rapporten en presentaties<br/>
                 <input onChange={changeHandlerCheckbox} id="text3" type="checkbox" checked={value[12]} name="checkText" value="12" /> Correspondentie en gespreksverslagen<br/>
                 <input onChange={changeHandlerCheckbox} id="text4" type="checkbox" checked={value[13]} name="checkText" value="13" /> Binnen de overheidsinstantie<br/>
                 <input onChange={changeHandlerCheckbox} id="text5" type="checkbox" checked={value[14]} name="checkText" value="14" /> Met andere personen of organisaties<br/>
                 {value[14]&&
              <div>
                <label>Organisatie of persoon
                  <input id="subjectLongOrganisation" value={value.subjectLongOrganisation} onChange={changeHandlerUser} type="text"/><br/>
                </label>
                </div>
              }
                 <input onChange={changeHandlerCheckbox} id="text6" type="checkbox" checked={value[15]} name="checkText" value="15" /> Financiele documenten<br/>
                 <input onChange={changeHandlerCheckbox} id="text7" type="checkbox" checked={value[16]} name="checkText" value="16" /> Datasets<br/>
                 <input onChange={changeHandlerCheckbox} id="text8" type="checkbox" checked={value[17]} name="checkText" value="17" /> Anders<br/>
                 <label>Waaronder: Omschrijving van document
                  <input id="subjectSpecificText" value={value.subjectAllText} onChange={changeHandlerUser} type="textarea"/><br/>
                  </label>
                  <label>Datum van document
                  <input id="subjectSpecificDate" value={value.subjectAllDate} onChange={changeHandlerUser} type="date"/><br/>
               </label> 

              </div>
             }



        </form>

        <p>Welke informatie moet de overheid openbaar maken</p><PopupButton number="13" />
        <p>Denk goed na welke documenten, zoals e-mails, wel of niet nuttig zijn.</p><PopupButton number="14" /> 
        <Link to="/Step5">vorige pagina</Link>
         {value.subjectSpecific?
        <Link to="/Step9">volgende pagina</Link>:
        <Link to="/Step7">volgende pagina</Link>}
        <LetterUI value={value} 
                   filteredDataText={filteredDataText}
                   />
      </div>
    )
}
export default Step6