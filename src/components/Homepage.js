import React, { Component, useState } from "react"
import Homepage_Wat from "./Homepage_Wat"
import Homepage_Waarom from "./Homepage_Waarom"
import Homepage_Opgeslagen from "./Homepage_Opgeslagen"
import Homepage_Overgenerator from "./Homepage_Overgenerator"
import LetterUI from "./LetterUI"
import DataText from "./DataText"

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
			<div>
				<form>
					<h2>Voor wie en waarom WOB je?</h2>
					<label>Ik ben een journalist
						<input id="userJournalist" value="userJournalist" checked={value.userJournalist} onChange={changeHandlerCheckbox} type="checkbox" /><br/>
					</label>
					<label>Ik Wob namens een (media-) organisatie
						<input id="userCompany" value="userCompanyName" checked={value.userCompanyName} onChange={changeHandlerCheckbox} type="checkbox" /><br/>
					</label>
					{value.userCompanyName&&
					<label>Naam organisatie
						<input id="userCompanyNameInput" value={value.userCompanyNameInput} onChange={changeHandlerUser} type="text"/><br/>
					</label>
					}
					<label>Ik wil mijn doel toelichten
						<input id="userNeedsGoal" value="userNeedsGoal" checked={value.userNeedsGoal} onChange={changeHandlerCheckbox} type="checkbox" /><br/>
					</label>
					{value.userNeedsGoal&&		
					<label>Journalistieke doel (verplicht)
						<input id="userGoalInput" value={value.userGoalInput} onChange={changeHandlerUser} type="text"/><br/>
					</label>
					}								
				</form>

				<form>
					<h2>Contactgegevens</h2>
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

      			 <form>
					<h2>Welke overheidsinstantie wil je om informatie vragen?</h2>
					<input id="searchBarAuthority" type="search" value={searchValue} placeholder="zoek op naam of plaats" onChange={event=>setSearchValue(event.target.value)}/>
					{value.selectedAuthority &&
						 	<div>
						 		<p>Controleer de instantie aan wie je Wobt</p>	
						 		<p>{value.selectedAuthority.types}</p>
					       		<p>{value.selectedAuthority.naam}</p>
					       		<p>{value.selectedAuthority.url}</p>
								<p>{value.selectedAuthority.postAdres.postbus}</p>
								<p>{value.selectedAuthority.postAdres.postcode + " " + value.selectedAuthority.postAdres.plaats}</p>
								<p>{value.selectedAuthority.value}</p>
								<div>
									<button onClick={()=>clickHandlerClearSelectedAuthority(value.selectedAuthority)}>zoek opnieuw</button>
								</div>
							</div>
							}
					<ul id="authorities">
						{//while(value.selectedAuthority = !null){
							props.authorities.filter(item=>item.naam.toLowerCase().includes(searchValue.toLowerCase())||
											   item.postAdres?.plaats?.toLowerCase().includes(searchValue.toLowerCase())||
											   item.bezoekAdres?.plaats?.toLowerCase().includes(searchValue.toLowerCase()) //||
											  // item.types.toLowerCase().includes(searchValue.toLowerCase())
												).map(item => (	
						<li key={item.systemid}><button type="button" onClick={()=>clickHandlerAuthority(item)}><p>{item.naam}</p><p>{item.postAdres?.plaats||item.bezoekAdres?.plaats}</p><p>{item.types}</p></button></li>	                      
				          ))} 
			      	</ul>

      			 </form>
      			 <form>
				 	<h2>Welke informatie zoek je?</h2>
				 	<label> Onderwerp in trefwoorden (verplicht)
			           <input value={value.subjectShort} onChange={changeHandlerUser} id="subjectShort" type="text" name="subjectinfo" placeholder="trefwoord 1" /><br/>
			        </label>
			        <label> Onderwerp in lopende tekst (verplicht)
			           <input value={value.subjectLong} onChange={changeHandlerUser}id="subjectLong" type="text" name="subjectinfo" placeholder="Vul hier je onderwerp kort en bondig in, bijvoorbeeld 'boetes voor snelheidsovertredingen in Friesland'  "/><br/>
			        </label>
			        <label>
			        	<input onChange={changeHandlerCheckbox} id="subjectMilieu" type="checkbox" checked={value.subjectMilieu} name="subjectInfo" value="subjectMilieu" /> Dit onderwerp gaat over milieu<br/>
			        </label>   
      			 </form>	
      			 <form>
      			 	<h2>Alles of specifiek?</h2>
      			 	<input onChange={changeHandlerCheckbox} id="subjectSpecific" type="radio" checked={value.subjectSpecific} name="checkSubject" value="subjectSpecific" /> Ik wil specifieke documenten opvragen<br/>
			           <input onChange={changeHandlerCheckbox} id="subjectAll" type="radio" checked={value.subjectAll} name="checkSubject" value="subjectAll" /> Ik wil alles over het onderwerp<br/>
      			 </form>
				 <form>
				 	<h2>Extra opties</h2>
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
      			<div className="adressAuthority">
				{console.log(value.selectedAuthority, "dit is de geselecteerde instantie")}
				 {value.selectedAuthority &&
				 	<div>
			        <p>
			          {value.selectedAuthority.naam} 
			        </p>
			        <p>{value.selectedAuthority.postAdres?value.selectedAuthority.postAdres.postbus:value.selectedAuthority.bezoekAdres.straat}</p>
					<p>{value.selectedAuthority.postAdres?value.selectedAuthority.postAdres.postcode + " " + value.selectedAuthority.postAdres.plaats:value.selectedAuthority.bezoekAdres.postcode + " " + value.selectedAuthority.bezoekAdres.plaats}</p>
					</div>
			      }
					
					
				</div>
				<div>
					 <p>Betreft: Wob-verzoek inzake {value.subjectShort}</p>
            		<p>Zeer geachte heer/mevrouw,</p>
            		<p>Met een beroep op de Wet openbaarheid van bestuur (hierna: Wob) verzoek ik, {value.userName}, {value.userJournalist?"journalist,":""} {value.userCompanyNameInput.length?`u namens ${value.userCompanyNameInput}`:""} om openbaarmaking van of inzage in hieronder nader te specificeren documenten of informatie bij of onder u{value.userGoalInput.length?` over ${value.userGoalInput}`:""}.`</p>
    				<p>In de afhandeling van dit verzoek vraag ik u rekening te houden met het publieke belang van de journalistiek als controleur van een goede en democratische bestuursvoering.</p>
    				<p>Concreet vraag ik u om:</p>
    				{/*<p>1.{titel document 1} OF {omschrijving} EN/OF, {datum}, alsmede: alle {voorbereidende stukken en concepten met betrekking tot dit document}; {interne correspondentie} (incl./excl. brieven, e-mails, memo’s en gespreksnotities, smsjes en WhatsAppjes) met betrekking tot dit document; {externe correspondentie} (incl./excl. E-mails, memo’s en gespreksnotities, smsjes en WhatsAppjes) met betrekking tot dit document tussen {bestuursorgaan} en derden, waaronder in ieder geval de navolgende partijen (personen, organisaties): i. {partij 1} ii. {partij 2} iii. {partij enz}</p>*/}
    				{/*<p>2.{titel doc 2} opgesteld op <datum>, alsmede (enz</p>
    				<p>3.{titel doc 3} (enz)</p> */}
    				{/*<p>Een overzicht van {eenheid waar de dataset over gaat} in de periode {jaartal}. Een overzicht zou minstens de volgende velden moeten bevatten: o {datum} o {locatie} o {gemeten snelheid} o {enzovoorts} Indien zo’n overzicht niet bestaat dan zou ik graag kopieën willen ontvangen van brondocumenten zodat ik zelf een overzicht kan maken.</p>
    				<p>Alsmede: Alle bij of onder u rustende documenten inzake {onderwerp} over de periode {jaar} OF {jaar-jaar} OF {datum-datum} EN over de periode {blabla}, waaronder: </p>
    				<p>{Vergaderstukken, waaronder: uitnodigingen, agenda’s, presentielijsten, ingekomen stukken, adviezen, besluiten, besluitenlijsten en notulen}; {Gespreksverslagen}; {Rapporten}, waaronder: project- en programmaplannen; adviezen, zowel extern als intern; onderzoeksrapporten en auditrapportages; voortgangsrapportages; evaluaties; {presentaties}; {Begrotingen}, jaarverslagen en andere financiële documentatie>; {Dataset} {Alle interne correspondentie} (incl./excl. brieven, e-mails, memo’s en gespreksnotities, smsjes en WhatsAppjes) met betrekking tot {onderwerp}>; {Alle correspondentie} (e-mails, brieven, memo’s, nota’s, notities en anderszins schriftelijk gewisselde stukken) met derden met betrekking tot {onderwerp} tussen {bestuursorgaan} en in ieder geval de navolgende partijen (organisaties, personen): </p>
    				<p>{partij 1}{partij 2}{partij enz. } </p>   */} 
    				<p>Mocht u beschikken over andere documenten die – aanvullend of in plaats van gevraagde documenten - inzicht in deze bestuurlijke aangelegenheid te kunnen geven, dan verzoek ik u die documenten ook te verstrekken. </p>

				</div>
      			 <LetterUI value={value} 
      			 		   filteredDataText={filteredDataText}
      			 		   />
      			<div> 
	            	<p>Met vriendelijke groet, </p>
		     		<p className="userSignature"></p>
		     		<p>{value.userName}</p>
		     		<p>{value.userCompanyName}</p>
		     		<p>{value.userAdress}{value.userAdressNumber}</p>
		     		<p>{value.userZipcode}{value.userCityName}</p>
		     		<p>{value.userEmail}</p>
		     		<p>{value.userPhoneNumber}</p>
     			</div>		   
 			</div>	

		)
}
export default Homepage