import React, { Component, useState } from "react"
import LetterUI from "./LetterUI"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Step6({ value, filteredDataText, changeHandlerRadio }) {
    const shouldGoToStep7 = value.subjectShort.every(subject => value.subjectState[subject].subjectSpecific === "subjectAll")
    return (
        <div>
      <h2>Alles of specifiek?</h2>
      <p>Wil je alle documenten die de overheidsinstantie heeft over je onderwerp: {}? Of weet je al precies welke documenten je wilt hebben. Maak je keuze. <button>ietje</button> </p>
        
        {value.subjectShort.map(subjectShort=>

        <form>  
              <p>Voor onderwerp: {subjectShort}</p>
              <input onChange={changeHandlerRadio} id="subjectSpecific" type="radio" checked={value.subjectState[subjectShort].subjectSpecific==="subjectSpecific"} name="subjectSpecific" data-subject={subjectShort} value="subjectSpecific" /> Ik wil specifieke documenten opvragen<br/>
              <input onChange={changeHandlerRadio} id="subjectAll" type="radio" checked={value.subjectState[subjectShort].subjectSpecific==="subjectAll"} name="subjectSpecific" data-subject={subjectShort} value="subjectAll" /> Ik wil alles over het onderwerp<br/>
        </form>

             )}
        <Link to="/Step5">vorige pagina</Link>
        
        <Link to="/Step7">volgende pagina</Link>
        <LetterUI value={value} 
                   filteredDataText={filteredDataText}
                   />
      </div>
    )
}
export default Step6