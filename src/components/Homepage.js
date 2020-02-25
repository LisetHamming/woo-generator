import React, { Component, useState } from "react"
import Homepage_Wat from "./Homepage_Wat"
import Homepage_Waarom from "./Homepage_Waarom"
import Homepage_Opgeslagen from "./Homepage_Opgeslagen"
import Homepage_Overgenerator from "./Homepage_Overgenerator"
import LetterUI from "./LetterUI"
import Step1 from "./Step1"
import DataText from "./DataText"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const initialState = {	1:true, 
						2:true, 
						3:true, 
						4:true, 
						5:true, 
						6:true, 
						7:true, 
						8:true, 
						9:true, 
						userName:"", 
						userAdress:"", 
						userAdressNumber:"", 
						userZipcode:"", 
						userCityName:"", 
						userEmail:"", 
						userPhoneNumber:"", 
						userGoalInput:"", 
						userCompanyNameInput:"", 
						userJournalist:false,
						userCompanyName:false,
						userNeedsGoal:false,
						selectedAuthority: null,
						subjectShort:"",
						subjectLong:"",
						subjectMilieu: false,
						subjectSpecific:false,
						subjectAll:false,
						subjectDateStart:false,
						subjectDateEnd:false,
					}
const Homepage = (props) => {
	const[ value, setValue] = useState(initialState)
	const[ searchValue, setSearchValue] = useState("")

	const changeHandlerCheckbox = ({ currentTarget: { value, checked } }) => {
	  setValue(current =>({...current, [value]: checked}))

	}
	const filteredDataText = DataText(value).filter((item) =>{
			return value[item.id]

	})

	const clickHandlerAuthority = (selectedAuthority) =>{
		setValue(current =>({...current, selectedAuthority}))
	}
	const clickHandlerClearSelectedAuthority = (selectedAuthority) =>{
		selectedAuthority = null
		setValue(current =>({...current, selectedAuthority}))
		const searchbar = document.getElementById("searchBarAuthority")
		// ook de searchbar value moet nog gewist worden. Dit werkt nog niet.
		//searchbar.value = ""
		
	}

	console.log(filteredDataText)

	const changeHandlerUser = ({currentTarget: { value, id }}) =>{
			setValue(current =>({...current, [id]: value}))
		}
			const changeHandlerSubject = ({currentTarget: { value, id }}) =>{
			setValue(current =>({...current, [id]: value}))
		}

	return(
		 <Switch>
        <Route exact path="/">
            <div>
				<h1>Schrijf in 3 simpele stappen je eigen Wob-verzoek</h1>
				<p>Je bent hier omdat je informatie wilt opvragen bij een overheidsinstantie. Dat noemen we een Wob-verzoek. Met de Wob-generator is dat een koud kunstje.</p>
				<Link to="/Step1">Start je Wob-verzoek</Link>
				

      			 <LetterUI value={value} 
      			 		   filteredDataText={filteredDataText}
      			 		   />
		   
 			</div>	
          </Route>
             <Route path="/Step1" >
              <Step1 />
             </Route>  
             <Route path="/Step2" >
              <Step2 />
             </Route> 
             <Route path="/Step3" >
              <Step3 />
             </Route> 
             <Route path="/Step4" >
              <Step4 />
             </Route> 
                          <Route path="/Step5" >
              <Step5 />
             </Route> 

                          <Route path="/Step6" >
              <Step6 />
             </Route> 
                          <Route path="/Step7" >
              <Step7 />
             </Route> 
                          <Route path="/Step8" >
              <Step8 />
             </Route> 
                          <Route path="/Step9" >
              <Step9 />
             </Route> 
                                       <Route path="/Step10" >
              <Step10 />
             </Route> 
        </Switch>

		

			

		)
}
export default Homepage