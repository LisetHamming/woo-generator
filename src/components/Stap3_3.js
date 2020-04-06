import React from "react"
import Popup from "./popups/Popup"
import PopupButton from "./popups/PopupButton"
import LetterUI from "./LetterUI"
import logo from "../assets/logo.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Stap3_3({ value, filteredDataText, changeHandlerCheckbox, changeHandlerUser, changeHandlerSubjectType, clickHandlerStep, getCurrentDate }) {


    return (
        <div className="formLetter">
         <img className="logoWob" src={logo}/>
      <h2>Stap 3: Welke documenttypes?</h2>
       
         <form>
              {value.subjectType==="specific"&&
               <div>
              <span>
                <label>Omschrijving van het specifieke document
                  <input size="50" id="subjectSpecificText" value={value.subjectSpecificText} onChange={changeHandlerUser} type="textarea"/><br/>
                </label></span>
                <span>
                <label>Datum van document <br/>
                  <input id="subjectSpecificDate" value={value.subjectSpecificDate} onChange={changeHandlerUser} type="date"/><br/>
                </label>
                </span>
              </div>
            }
                      {value.subjectSpecificText&&
            <p>{value.subjectSpecificText} {value.subjectSpecificDate?value.subjectSpecificDate:""}<button className="buttonStyle">verwijder</button></p>
          }

            
 
              <div>
              <span><label className="container">
                  <input onChange={changeHandlerCheckbox} id="text1" type="checkbox" checked={value[10]} name="checkText" value="10" />Vergaderstukken<br/>
             <div class="checkmark"></div> </label></span>
              <span><label className="container"> 
                 <input onChange={changeHandlerCheckbox} id="text2" type="checkbox" checked={value[11]} name="checkText" value="11" /> Rapporten en presentaties<br/>
             <div class="checkmark"></div> </label></span>
              <span><label className="container">
                 <input onChange={changeHandlerCheckbox} id="text3" type="checkbox" checked={value[12]}  name="checkText" value="12" /> Correspondentie en gespreksverslagen<br/>
              <div class="checkmark"></div></label></span>
               {value[12]&&
              <div>
              <span  >
                <label className="container">
                  <input size="50" id="subjectInside1" value="subjectInside1" checked={value.subjectInside1}  onChange={changeHandlerCheckbox} name="checkText" type="checkbox"/>Brieven<br/>
               <div class="checkmark"></div> </label>
                </span>
                <span className="subForm">
                <label className="container">
                  <input size="50" id="subjectInside2" value="subjectInside2" checked={value.subjectInside2} onChange={changeHandlerCheckbox} name="checkText" type="checkbox"/>E-mails exclusief bijlagen<br/>
               <div class="checkmark"></div> </label>
                </span>
                <span className="subForm">
                <label className="container">
                  <input size="50" id="subjectInside3" value="subjectInside3" checked={value.subjectInside3} onChange={changeHandlerCheckbox} name="checkText" type="checkbox"/>E-mails inclusief bijlagen<br/>
               <div class="checkmark"></div> </label>
                </span>
                <span className="subForm">
                <label className="container">
                  <input size="50" id="subjectInside4" value="subjectInside4" checked={value.subjectInside4} onChange={changeHandlerCheckbox} name="checkText" type="checkbox"/>SMS-jes en Whatsapp-berichten<br/>
              <div class="checkmark"></div>  </label>
                </span>

                <span className="subForm">
                <label className="container">
                  <input size="50" id="subjectInside5" value="subjectInside5" checked={value.subjectInside5} onChange={changeHandlerCheckbox} name="checkText" type="checkbox"/>Memo's en notities<br/>
               <div class="checkmark"></div> </label>
                </span>
                <span className="subForm">
                <label className="container">
                  <input size="50" id="subjectInside6" value="subjectInside6" checked={value.subjectInside6} onChange={changeHandlerCheckbox} name="checkText" type="checkbox"/>Gespreksverslagen<br/>
              <div class="checkmark"></div>  </label>
                </span>
                </div>
              }

              <span><label className="container">
                 <input onChange={changeHandlerCheckbox} id="text4" type="checkbox" checked={value[13]} name="checkText" value="13" /> Binnen de overheidsinstantie<br/>
             <div class="checkmark"></div> </label></span>
              <span><label className="container">
                 <input onChange={changeHandlerCheckbox} id="text5" type="checkbox" checked={value[14]} name="checkText" value="14" /> Met andere personen of organisaties<br/>
              <div class="checkmark"></div> </label></span>
                 {value[14]&&
              <div>
              <span className="subForm">
                <label>Organisatie of persoon
                  <input size="50" id="subjectLongOrganisation" value={value.subjectLongOrganisation} onChange={changeHandlerUser} type="text"/><br/>
                </label>
                </span>
                </div>
              }
                 <span>
                    <label className="container">
                       <input onChange={changeHandlerCheckbox} id="text6" type="checkbox" checked={value[15]} name="checkText" value="15" /> Financiele documenten<br/>
                       <div class="checkmark"></div>
                    </label>
                  </span>
                  <span>
                    <label className="container">
                      <input onChange={changeHandlerCheckbox} id="text7" type="checkbox" checked={value[16]} name="checkText" value="16" /> Datasets<br/>
                      <div class="checkmark"></div>
                    </label>
                 </span>
                 <span>
                    <label className="container">
                      <input onChange={changeHandlerCheckbox} id="text8" type="checkbox" checked={value[17]} name="checkText" value="17" /> Anders<br/>
                      <div class="checkmark"></div>
                    </label>
                </span>
                {value[17]&&
                  <div>
                      <span className="subForm">
                        <label>Andere documentsoorten
                          <input size="50" id="subjectElseText" value={value.subjectElseText} onChange={changeHandlerUser} type="text"/><br/>
                        </label>
                        </span>
                   </div>
                }
                {value.subjectType==="all"&& 
                <div>
                  <p>Selecteer hier de periode waarbinnen je denkt dat er voor jou interessante informatie beschikbaar is. Door de periode in te perken voorkom je dat je irrelevante informatie ontvangt en de wob-ambtenaren nodeloos lang bezig zijn met je verzoek. </p>
          <span>
          <label> Van                 <br/>
                 <input value={value.subjectDateStart} onChange={changeHandlerUser} id="subjectDateStart" type="date" name="subjectDate" placeholder="22-11-2019" />
              </label></span>
              <span>
              <label> Tot                  <br/>
                 <input value={value.subjectDateEnd} onChange={changeHandlerUser}id="subjectDateEnd" type="date" name="subjectDate" placeholder="31-12-2019"/>
              </label>
             </span>
                </div>

}

   {value.subjectType==="all"&&
              <div>
              <span>
                <label>Waaronder: Omschrijving van document
                  <input size="50" id="subjectAllText" value={value.subjectAllText} onChange={changeHandlerUser} type="textarea"/><br/>
                </label></span>
                <span>
                <label>Datum van document <br/>
                  <input id="subjectAllDate" value={value.subjectAllDate} onChange={changeHandlerUser} type="date"/><br/>
                </label>
                </span>
              </div>
          }
          {value.subjectAllText&&
            <p>{value.subjectAllText} {value.subjectAllDate?value.subjectAllDate:""}<button className="buttonStyle">verwijder</button></p>
          }




              </div>






          </form> 
 
             
        <span><p>Welke informatie moet de overheid openbaar maken.</p><PopupButton number="13" /></span>
        <span><p className="extraPadding">Denk goed na welke documenten, zoals e-mails, wel of niet nuttig zijn.</p><PopupButton number="14" /></span>
        <Link to="/Stap3_2">vorige pagina</Link>
        <Link to="/StapExtra" onClick={()=>clickHandlerStep("step9")}>volgende pagina</Link>
        <LetterUI value={value} 
                   filteredDataText={filteredDataText}
                   getCurrentDate={getCurrentDate}
                   />
      </div>
    )
}
export default Stap3_3