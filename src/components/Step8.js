import React, { Component, useState } from "react"
import LetterUI from "./LetterUI"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Step8({ changeHandlerSubjectCheckbox, changeHandlerSubjectText, value, filteredDataText }) {
    const shouldShowOptions = value.subjectShort.filter(subject => value.subjectState[subject].subjectSpecific === "subjectSpecific")

    return (
        <div>
      <h2>Alles over je onderwerp - Welke documenttypes?</h2>
        {shouldShowOptions.map(subjectShort =>
         <form>
                      
              <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectMeeting" type="checkbox" checked={value.subjectState[subjectShort].subjectMeeting} name="subjectMeeting" value="subjectSpecific" /> Vergaderstukken<br/>
              {value.subjectMeeting&&
                <div>
                    <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectInvitations" type="checkbox" checked={value.subjectState[subjectShort].subjectInvitations} name="subjectInvitations" value="subjectSpecific" />Uitnodigingen en presentielijsten<br/>
                    <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectDetermines" type="checkbox" checked={value.subjectState[subjectShort].subjectDetermines} name="subjectDetermines" value="subjectSpecific" />Besluiten en besluitenlijsten<br/>
                     <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectMinutes" type="checkbox" checked={value.subjectState[subjectShort].subjectMinutes} name="subjectMinutes" value="subjectSpecific" />Notulen<br/>

                </div>
                }
              <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectReports" type="checkbox" checked={value.subjectState[subjectShort].subjectReports} name="subjectReports" value="subjectAll" /> Rapporten & presentaties<br/>
              <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectMeeting" type="checkbox" checked={value.subjectState[subjectShort].subjectCorrespondance} name="subjectCorrespondance" value="subjectSpecific" /> Correspondentie en gespreksverslagen<br/>
               {value.subjectCorrespondance&&
                <div>
                    <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectInside" type="checkbox" checked={value.subjectState[subjectShort].subjectInside} name="subjectInside" value="subjectSpecific" />Binnen de overheidsinstantie<br/>
                     {value.subjectCorrespondance&&
                      <div>
                      <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectInside1" type="checkbox" checked={value.subjectState[subjectShort].subjectInside1} name="subjectInside1" value="subjectSpecific" />Brieven<br/>
                      <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectInside2" type="checkbox" checked={value.subjectState[subjectShort].subjectInside2} name="subjectInside2" value="subjectSpecific" />Emails inclusief bijlagen<br/>
                      <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectInside3" type="checkbox" checked={value.subjectState[subjectShort].subjectInside3} name="subjectInside3" value="subjectSpecific" />Emails zonder bijlagen<br/>
                      <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectInside4" type="checkbox" checked={value.subjectState[subjectShort].subjectInside4} name="subjectInside4" value="subjectSpecific" />SMS-jes en WhatsApp-berichten<br/>
                      <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectInside5" type="checkbox" checked={value.subjectState[subjectShort].subjectInside5} name="subjectInside5" value="subjectSpecific" />Memo's en notities<br/>
                      <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectInside6" type="checkbox" checked={value.subjectState[subjectShort].subjectInside6} name="subjectInside6" value="subjectSpecific" />Gespreksverslagen<br/>
                      <label> Naam
                       <input data-subject={subjectShort} onChange={changeHandlerSubjectText} id="subjectCorrespondancePerson" type="text" name="subjectCorrespondancePerson" value={value.subjectState[subjectShort].subjectCorrespondancePerson} placeholder="Naam van persoon of instantie" /><br/>
                      </label>
                      </div>

                      
                     }


                    <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectOutside" type="checkbox" checked={value.subjectState[subjectShort].subjectOutside} name="subjectOutside" value="subjectSpecific" />Met andere personen of organisaties<br/>
                </div>
              }
              <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectReports" type="checkbox" checked={value.subjectState[subjectShort].subjectFinancial} name="subjectFinancial" value="subjectAll" /> Financiele documenten<br/>
              {value.subjectFinancial&&
                <div>
                  <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectReports" type="checkbox" checked={value.subjectState[subjectShort].subjectFinancial1} name="subjectFinancial1" value="subjectAll" /> Jaarverslagen<br/>
                  <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectReports" type="checkbox" checked={value.subjectState[subjectShort].subjectFinancial2} name="subjectFinancial2" value="subjectAll" /> Begrotingen<br/>
                  <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectReports" type="checkbox" checked={value.subjectState[subjectShort].subjectFinancial3} name="subjectFinancial3" value="subjectAll" /> Transactieoverzichten<br/>
                </div>
              }
              <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectMeeting" type="checkbox" checked={value.subjectState[subjectShort].subjectDataset} name="subjectDataset" value="subjectSpecific" /> Datasets<br/>
              {value.subjectDataset&&
                <div>
                <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectMeeting" type="checkbox" checked={value.subjectState[subjectShort].subjectDataset1} name="subjectDataset1" value="subjectSpecific" /> Ruwe data<br/>
                <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectMeeting" type="checkbox" checked={value.subjectState[subjectShort].subjectDataset2} name="subjectDataset2" value="subjectSpecific" /> Overzicht<br/>
                <label> Veldnaam ? nieuwe naam verzinnen
                  <input data-subject={subjectShort} onChange={changeHandlerSubjectText} id="subjectMeeting" type="text" name="subjectDataset3" value={value.subjectState[subjectShort].subjectDataset3} placeholder="Noem specifieke data" /> <br/>
                </label>
                </div>

              }
              <input data-subject={subjectShort} onChange={changeHandlerSubjectCheckbox} id="subjectReports" type="checkbox" checked={value.subjectState[subjectShort].subjectElse} name="subjectElse" value="subjectAll" /> Anders<br/>
              {value.subjectElse&&
                <label> Veldnaam ? nieuwe naam verzinnen
                  <input data-subject={subjectShort} onChange={changeHandlerSubjectText} id="subjectMeeting" type="text" name="subjectElse1" value={value.subjectState[subjectShort].subjectElse1} placeholder="Noem specifieke data" /> <br/>
                </label>
              }

          </form> 
        )}
             
        <p>Welke informatie moet de overheid openbaar maken.<button>ietje</button></p>
        <p>Denk goed na welke documenten, zoals e-mails, wel of niet nuttig zijn.<button>ietje</button></p>
        <Link to="/Step7">vorige pagina</Link>
        <Link to="/Step9">volgende pagina</Link>
        <LetterUI value={value} 
                   filteredDataText={filteredDataText}
                   />
      </div>
    )
}
export default Step8