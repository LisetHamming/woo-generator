import React, { Component, useState } from "react"
import Homepage_Wat from "./Homepage_Wat"
import Homepage_Waarom from "./Homepage_Waarom"
import Homepage_Opgeslagen from "./Homepage_Opgeslagen"
import Homepage_Overgenerator from "./Homepage_Overgenerator"
import DataText from "./DataText"
import StudentsData from "./StudentsData"

const initialState = {1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true, userName:"", userAdress:"", userAdressNumber:"", userZipcode:"", userCityName:"", userEmail:"", userPhoneNumber:"",   }
const Homepage = () => {
	const[ value, setValue] = useState(initialState)

	const changeHandlerCheckbox = (event) => {
	  setValue(current =>({...current, [event.target.value]:event.target.checked}))

	}
	const filteredDataText = DataText(value).filter((item) =>{
			return value[item.id]

	})
	

	console.log(filteredDataText)

	const changeHandlerUser = (event) =>{
			setValue(current =>({...current, [event.target.id]:event.target.value}))
		}

	return(
			<div>
			<p>Voor wie en waarom WOB je?</p>
				<form>
					<label>
						<input type="checkbox" />
					</label>
					<label>
						<input type="checkbox" />
					</label>
					<label>
						<input type="checkbox" />
					</label>		
					<label>
						<input type="text"/>
					</label>								
				</form>
				<form>
					<label> Naam (verplicht)
			           <input value={value.userName} onChange={changeHandlerUser} id="userName" type="text" name="userInfo" placeholder="vul hier je naam in" /><br/>
			        </label>
			        <label> Postadres
			           <input value={value.userAdress} onChange={changeHandlerUser}id="userAdress" type="text" name="userInfo" placeholder="Vul hier je postadres in"/><br/>
			        </label>
			        <label> Nr.
			           <input value={value.userAdressNumber} onChange={changeHandlerUser} id="userAdressNumber" type="text" name="userInfo" placeholder="nummer" /><br/>
			        </label>
			        <label> Postcode
			           <input value={value.userZipcode} onChange={changeHandlerUser} id="userZipcode" type="text" name="userInfo" placeholder="Postcode" /><br/>
			        </label>
			        <label> Plaats
			           <input value={value.userCityName} onChange={changeHandlerUser} id="userCityName" type="text" name="userInfo" placeholder="Vul hier een plaats in Nederland in" /><br/>
			        </label>
			        <label> E-mail
			           <input value={value.userEmail} onChange={changeHandlerUser} id="userEmail" type="text" name="userInfo" placeholder="Vul hier je e-mailadres in" /><br/>
			        </label>
			        <label> Telefoon
			           <input value={value.userPhoneNumber} onChange={changeHandlerUser} id="userPhoneNumber" type="text" name="userInfo" placeholder="Vul hier je telefoonnummer in" /><br/>
			        </label>

      			 </form>	
				 <form >
			           <input onChange={changeHandlerCheckbox} id="text1" type="checkbox" checked={value[1]} name="checkText" value="1" /> Geanonimiseerde documenten<br/>
			           <input onChange={changeHandlerCheckbox} id="text2" type="checkbox" checked={value[2]} name="checkText" value="2" /> Samenvattingen van documenten<br/>
			           <input onChange={changeHandlerCheckbox} id="text3" type="checkbox" checked={value[3]} name="checkText" value="3" /> Digitaal toezenden heeft mijn voorkeur<br/>
			           <input onChange={changeHandlerCheckbox} id="text4" type="checkbox" checked={value[4]} name="checkText" value="4" /> Informatie i.p.v. documenten<br/>
			           <input onChange={changeHandlerCheckbox} id="text5" type="checkbox" checked={value[5]} name="checkText" value="5" /> Insluiting alle formaten<br/>
			           <input onChange={changeHandlerCheckbox} id="text6" type="checkbox" checked={value[6]} name="checkText" value="6" /> Doorgeleiding<br/>
			           <input onChange={changeHandlerCheckbox} id="text7" type="checkbox" checked={value[7]} name="checkText" value="7" /> Motivering bij gedaging<br/>
			           <input onChange={changeHandlerCheckbox} id="text8" type="checkbox" checked={value[8]} name="checkText" value="8" /> Mondelinge toelichting<br/>
			           <input onChange={changeHandlerCheckbox} id="text9" type="checkbox" checked={value[9]} name="checkText" value="9" /> Bevestiging beslistermijn<br/>
      			 </form>
				<div>
    				{filteredDataText.map(sentence => (
			        <div key={sentence.id}>
			          <div>
			            <p>{sentence.sentence}</p> 
			          </div>  
			        </div>       
			          ))}
 				</div>
 			</div>	

		)
}
export default Homepage