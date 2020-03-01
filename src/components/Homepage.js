import React, { Component, useState } from "react"
import Homepage_Wat from "./Homepage_Wat"
import Homepage_Waarom from "./Homepage_Waarom"
import Homepage_Opgeslagen from "./Homepage_Opgeslagen"
import Homepage_Overgenerator from "./Homepage_Overgenerator"
import LetterUI from "./LetterUI"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import Step5 from "./Step5"
import Step6 from "./Step6"
import Step7 from "./Step7"
import Step8 from "./Step8"
import Step9 from "./Step9"
import Step10 from "./Step10"
import Step11 from "./Step11"
import DataText from "./DataText"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const initialState = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    userName: "",
    userAdress: "",
    userAdressNumber: "",
    userZipcode: "",
    userCityName: "",
    userEmail: "",
    userPhoneNumber: "",
    userGoalInput: "",
    userCompanyNameInput: "",
    userJournalist: false,
    userCompanyName: false,
    userNeedsGoal: false,
    selectedAuthority: null,
    subjectShort: [],
    subjectLong: "",
    subjectMilieu: false,
    subjectSpecific: false,
    subjectAll: false,
    subjectDateStart: false,
    subjectDateEnd: false,
}
const Homepage = (props) => {
    const [value, setValue] = useState(initialState)
    const [searchValue, setSearchValue] = useState("")

    const changeHandlerCheckbox = ({ currentTarget: { value, checked } }) => {
        setValue(current => ({ ...current, [value]: checked }))

    }
    const filteredDataText = DataText(value).filter((item) => {
        return value[item.id]

    })

    const clickHandlerAuthority = (selectedAuthority) => {
        setValue(current => ({ ...current, selectedAuthority }))
        console.log(selectedAuthority)
    }
    const clickHandlerClearSelectedAuthority = () => {
        setValue(current => ({ ...current, selectedAuthority: null }))


    }

    const changeHandlerUser = ({ currentTarget: { value, id } }) => {
        setValue(current => ({ ...current, [id]: value }))
    }
    const changeHandlerSubject = ({ currentTarget: { value, id } }) => {
        setValue(current => ({ ...current, [id]: value }))
    }
    const changeHandlerCompanyName = ({ currentTarget: { checked } }) => {
        setValue(current => ({ ...current, userCompanyName: checked, userCompanyNameInput: "" }))
    }
    const handleAddSubjectShort = (subject) => {
        setValue(current => ({ ...current, subjectShort: current.subjectShort.concat(subject) }))
    }
    const clickHandlerRemoveSubject = ({ currentTarget: { id } }) => {
        setValue(current => ({ ...current, subjectShort: current.subjectShort.filter((subject, index) => index != id) }))
    }
    const clickHandlerSubjectPeriod = () => {}


    const exportHTMLDoc = () => {
        var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
            "xmlns:w='urn:schemas-microsoft-com:office:word' " +
            "xmlns='http://www.w3.org/TR/REC-html40'>" +
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
        var footer = "</body></html>";
        var sourceHTML = header + document.getElementById("letterUI").innerHTML + footer;

        var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        var fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'wob-verzoek0.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
    }



    return (
        <Switch>
        <Route exact path="/">
            <div>
				<h1>Schrijf in 3 simpele stappen je eigen Wob-verzoek</h1>
				<p>Je bent hier omdat je informatie wilt opvragen bij een overheidsinstantie. Dat noemen we een Wob-verzoek. Met de Wob-generator is dat een koud kunstje.</p>
				<Link to="/Step1">Start je Wob-verzoek</Link>
 			</div>	
          </Route>
             <Route path="/Step1" >
              <Step1 />
             </Route>  
             <Route path="/Step2" >
              <Step2 value={value} changeHandlerUser={changeHandlerUser} changeHandlerCheckbox={changeHandlerCheckbox} changeHandlerCompanyName={changeHandlerCompanyName}/>
             </Route> 
             <Route path="/Step3" >
              <Step3 value={value} changeHandlerUser={changeHandlerUser}/>
             </Route> 
             <Route path="/Step4" >
              <Step4 value={value} authorities={props.authorities} clickHandlerAuthority={clickHandlerAuthority} clickHandlerClearSelectedAuthority={clickHandlerClearSelectedAuthority}/>
             </Route> 
            <Route path="/Step5" >
              <Step5 value={value} clickHandlerRemoveSubject={clickHandlerRemoveSubject} filteredDataText={filteredDataText} changeHandlerCheckbox={changeHandlerCheckbox} changeHandlerUser={changeHandlerUser} handleAddSubjectShort={handleAddSubjectShort}/>
            </Route> 

            <Route path="/Step6" >
              <Step6 value={value} filteredDataText={filteredDataText} changeHandlerCheckbox={changeHandlerCheckbox}/>
             </Route> 
            <Route path="/Step7" >
              <Step8 value={value} filteredDataText={filteredDataText} changeHandlerUser={changeHandlerUser} clickHandlerSubjectPeriod={clickHandlerSubjectPeriod}/>
             </Route> 
            <Route path="/Step8" >
              <Step9 value={value} changeHandlerCheckbox={changeHandlerCheckbox} filteredDataText={filteredDataText}/>
             </Route> 
            <Route path="/Step9" >
              <Step10 value={value} changeHandlerCheckbox={changeHandlerCheckbox} filteredDataText={filteredDataText}/>
             </Route> 
            <Route path="/Step10" >
              <Step11 value={value} filteredDataText={filteredDataText} exportHTMLDoc={exportHTMLDoc}/>
             </Route>
        </Switch>





    )
}
export default Homepage