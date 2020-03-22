import React, { Component, useState } from "react"
import Homepage_Waarom_Tool from "./Homepage_Waarom_Tool"
import Homepage_Waarom from "./Homepage_Waarom"
import Homepage_Overgenerator from "./Homepage_Overgenerator"
import PrivacyVoorwaarden from "./PrivacyVoorwaarden"
import AlgemeneVoorwaarden from "./AlgemeneVoorwaarden"
import LetterUI from "./LetterUI"
import Start from "./Start"
import Stap1 from "./Stap1"
import Stap1_2 from "./Stap1_2"
import Stap2 from "./Stap2"
import Stap3 from "./Stap3"
import Step6 from "./Step6"
import Step7 from "./Step7"
import Step9 from "./Step9"
import Step10 from "./Step10"
import machine from "../assets/machine.png"
import DataText from "./DataText"
import Popup from "./popups/Popup"
import logo from "../assets/logo.png"
import logo_vvoj from "../assets/logo_vvoj.png"
import line_yellow from "../assets/line_yellow.png"
import line_black from "../assets/line_black.png"
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
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
    16: true,
    17: false,
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
    subjectMilieu: false,
    subjectLong: "",
    subjectType: "all",
    subjectSpecificDate: "",
    subjectSpecificText: "",
    subjectAllDate: "",
    subjectAllText: "",
    subjectDateStart: false,
    subjectDateEnd: false,
    subjectMeeting: false,
    subjectLongOrganisation: "",
    subjectReports: false,
    subjectCorrespondance: false,
    subjectFinancial: false,
    subjectDataset: false,
    subjectElse: false,
    subjectInvitations: true,
    subjectDetermines: true,
    subjectMinutes: true,
    subjectInside: false,
    subjectOutside: false,
    subjectInside1: true,
    subjectInside2: true,
    subjectInside3: true,
    subjectInside4: true,
    subjectInside5: true,
    subjectInside6: true,
    subjectCorrespondanceName: [],
    subjectFinancial1: true,
    subjectFinancial2: true,
    subjectFinancial3: true,
    subjectDataset1: true,
    subjectDataset2: true,
    subjectDataset3: [],
    subectElse: [],
    step6: false,
    step9: false,

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
    const changeHandlerSubjectType = ({ currentTarget: { value } }) => {
        setValue(current => ({ ...current, subjectType: value }))

    }
    const changeHandlerRadio = ({ currentTarget: { value, name, dataset: { subject } } }) => {
        setValue(current => ({ ...current,
            subjectState: { ...current.subjectState,
                [subject]: {
                    ...current.subjectState[subject],
                    [name]: value
                }
            }
        }))

    }

    const changeHandlerSubjectCheckbox = ({ currentTarget: { checked, name, dataset: { subject } } }) => {
        setValue(current => ({ ...current,
            subjectState: { ...current.subjectState,
                [subject]: {
                    ...current.subjectState[subject],
                    [name]: checked
                }
            }
        }))

    }

    const changeHandlerSubjectText = ({ currentTarget: { value, name, dataset: { subject } } }) => {
        setValue(current => ({ ...current,
            subjectState: { ...current.subjectState,
                [subject]: {
                    ...current.subjectState[subject],
                    [name]: value
                }
            }
        }))

    }
    const clickHandlerStep = (value) => {
        setValue(current => ({ ...current, [value]: true }))
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
        fileDownload.download = `wob-verzoek-${value.selectedAuthority.naam}.doc`;
        fileDownload.click();
        document.body.removeChild(fileDownload);
    }




    return (
        <Switch>
        <Route exact path="/">
            <div className="homepageBlock">
            <div className="blockText">
                      <img src={logo}/>
                      <h1>Schrijf in 3 simpele stappen je eigen Wob-verzoek</h1>
                      <p>Je bent hier omdat je informatie wilt opvragen bij een overheidsinstantie. Dat noemen we een Wob-verzoek. Met de Wob-generator is dat een koud kunstje.</p>

                      <ol>
                          <li>1. Je vult een aantal gegevens over jezelf in</li>
                          <li>2. Je selecteert een overheidsinstantie.</li>
                          <li>3. Je kiest wat voor documenten of informatie je zoekt.</li>


                      </ol>

                      <p>Voilà!</p>
                      <Link to="/Stap1">Start je Wob-verzoek</Link>
                  </div>  
                  <div><img src={machine}/></div>

           </div>
           <div className="extra_content"><p>Een initiatief van de   </p><img src={logo_vvoj} className="logo_vvoj"/></div> 
           <div className="extra_content"> <img src={line_yellow} className="horizontalRule"/></div>
            <Homepage_Waarom />
            <div className="extra_content"> <img src={line_black} className="horizontalRule"/></div>
            <Homepage_Waarom_Tool />
            <div className="extra_content"> <img src={line_yellow} className="horizontalRule"/></div>
            <Homepage_Overgenerator />
          </Route>
             <Route path="/start" >
              <Start />
             </Route>  
             <Route path="/Stap1" >
              <Stap1 value={value} changeHandlerUser={changeHandlerUser} changeHandlerCheckbox={changeHandlerCheckbox} changeHandlerCompanyName={changeHandlerCompanyName}/>
             </Route> 
             <Route path="/Stap1_2" >
              <Stap1_2 value={value} changeHandlerUser={changeHandlerUser}/>
             </Route> 
             <Route path="/Stap2" >
              <Stap2 value={value} changeHandlerUser={changeHandlerUser} authorities={props.authorities} clickHandlerAuthority={clickHandlerAuthority} clickHandlerClearSelectedAuthority={clickHandlerClearSelectedAuthority}/>
             </Route> 
            <Route path="/Stap3" >
              <Stap3 value={value} clickHandlerStep={clickHandlerStep} filteredDataText={filteredDataText} changeHandlerCheckbox={changeHandlerCheckbox} changeHandlerUser={changeHandlerUser}/>
            </Route> 

            <Route path="/Step6" >
              <Step6 value={value} changeHandlerSubjectType={changeHandlerSubjectType} changeHandlerUser={changeHandlerUser} filteredDataText={filteredDataText} changeHandlerCheckbox={changeHandlerCheckbox}/>
             </Route> 
            <Route path="/Step7" >
              <Step7 value={value} clickHandlerStep={clickHandlerStep} filteredDataText={filteredDataText} changeHandlerUser={changeHandlerUser} />
             </Route> 
            <Route path="/Step9" >
              <Step9 value={value} changeHandlerCheckbox={changeHandlerCheckbox} filteredDataText={filteredDataText}/>
             </Route> 
            <Route path="/Step10" >
              <Step10 value={value} filteredDataText={filteredDataText} exportHTMLDoc={exportHTMLDoc}/>
             </Route>
            <Route path="/PrivacyVoorwaarden" >
              <PrivacyVoorwaarden />
             </Route>
            <Route path="/AlgemeneVoorwaarden" >
              <AlgemeneVoorwaarden />
            </Route>
        </Switch>





    )
}
export default Homepage