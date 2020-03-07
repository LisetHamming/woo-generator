import React, { Component, useState } from "react"
import formatDate from "./FormatDate"

function LetterUI({ value, filteredDataText }) {
    return (
        <div id="letterUI" style={{fontFamily: "Arial"}}>
			
			<div className="adressAuthority" >
				 {value.selectedAuthority &&
				 	<div >
			        <p>
			          {value.selectedAuthority.naam} 
			        </p>
			        <p>{value.selectedAuthority.adres.postbus??value.selectedAuthority.adres.straat + " " + value.selectedAuthority.adres.huisnummer}</p>
					<p>{value.selectedAuthority.adres.postcode + " " + value.selectedAuthority.adres.plaats}</p>
					</div>
			      }
					
					
			</div>
			<div>
					<p>Betreft: Wob-verzoek</p><br />
            		<p>Zeer geachte heer/mevrouw,</p><br />
            		<p>Met een beroep op de Wet openbaarheid van bestuur (hierna: Wob) verzoek ik, {value.userName}, {value.userJournalist?"journalist,":""} {value.userCompanyNameInput.length?`u namens ${value.userCompanyNameInput}`:""} om openbaarmaking van of inzage in hieronder nader te specificeren documenten of informatie bij of onder u{value.userGoalInput.length?` over ${value.userGoalInput}`:""}.`</p>
            		<p>Het betreft documenten of informatie in het kader van de bestuurlijke aangelegenheid {value.subjectLong}</p>
            		<p>Met documenten bedoel ik vastlegging ongeacht de gegevensdrager: dus naast klassieke papieren documenten bijvoorbeeld ook digitale (data-)bestanden, sms'jes, WhatsApp-berichten en audio- en videobestanden.</p>
    				<p>In de afhandeling van dit verzoek vraag ik u rekening te houden met het publieke belang van de journalistiek als controleur van een goede en democratische bestuursvoering.</p>
    				<p>Concreet vraag ik u om:</p>
    				{ value.subjectType==="specific" ?<React.Fragment>{value.subjectSpecificText} {value.subjectSpecificDate? ` met datum ${formatDate(new Date(value.subjectSpecificDate))}`:""}</React.Fragment> :
    				<React.Fragment>
    				<p>Alle bij of onder u rustende documenten inzake {value.subjectLong} {value.subjectDateStart?"over de periode" + formatDate(new Date(value.subjectDateStart)):""} {value.subjectDateEnd?"tot "+ formatDate(new Date(value.subjectDateEnd)):""}, waaronder:</p>
    				<p>{value[10]?"Vergaderstukken, waaronder: uitnodigingen, agenda’s, presentielijsten, ingekomen stukken, adviezen, besluiten, besluitenlijsten en notulen;": ""}</p>
					{ value[12] ? "Gespreksverslagen;" : "" } 
					{ value[11] ? "Rapporten, waaronder: project- en programmaplannen; adviezen, zowel extern als intern; onderzoeksrapporten en auditrapportages; voortgangsrapportages; evaluaties;" : "" } 
					{ value[11] ? "Presentaties;" : "" } 
					{ value[15] ? "Begrotingen, jaarverslagen en andere financiële documentatie;" : "" } 
					{ value[16] ? "Dataset;" : "" } 
					{ value[13] ? `Alle interne correspondentie (incl./excl. brieven, e-mails, memo’s en gespreksnotities, smsjes en WhatsAppjes) met betrekking tot ${value.subjectLong};` : "" } { value[14] ? `Alle correspondentie (e-mails, brieven, memo’s, nota’s, notities en anderszins schriftelijk gewisselde stukken) met derden met betrekking tot ${value.subjectLong} tussen u en in ieder geval de navolgende partijen ${value.subjectLongOrganisation};` : "" }
    				</React.Fragment> }



    				{/*value.subjectShort.map(subjectShort=>
    					value.subjectState[subjectShort].subjectSpecific==="subjectSpecific"?<p>{subjectShort}</p>:<p>{subjectShort}</p>

    					)*/}
    				{/*<p>1.{titel document 1} OF {value.subjectLong} EN/OF, {datum}, alsmede: alle {voorbereidende stukken en concepten met betrekking tot dit document}; {interne correspondentie} (incl./excl. brieven, e-mails, memo’s en gespreksnotities, smsjes en WhatsAppjes) met betrekking tot dit document; {externe correspondentie} (incl./excl. E-mails, memo’s en gespreksnotities, smsjes en WhatsAppjes) met betrekking tot dit document tussen {bestuursorgaan} en derden, waaronder in ieder geval de navolgende partijen (personen, organisaties): i. {partij 1} ii. {partij 2} iii. {partij enz}</p>*/}
    				{/*<p>2.{titel doc 2} opgesteld op <datum>, alsmede (enz</p>
    				<p>3.{titel doc 3} (enz)</p> */}
    				{/*<p>Een overzicht van {eenheid waar de dataset over gaat} in de periode {jaartal}. Een overzicht zou minstens de volgende velden moeten bevatten: o {datum} o {locatie} o {gemeten snelheid} o {enzovoorts} Indien zo’n overzicht niet bestaat dan zou ik graag kopieën willen ontvangen van brondocumenten zodat ik zelf een overzicht kan maken.</p>
    				<p>Alsmede: Alle bij of onder u rustende documenten inzake {onderwerp} over de periode {jaar} OF {jaar-jaar} OF {datum-datum} EN over de periode {blabla}, waaronder: </p>
    				<p>{Vergaderstukken, waaronder: uitnodigingen, agenda’s, presentielijsten, ingekomen stukken, adviezen, besluiten, besluitenlijsten en notulen}; {Gespreksverslagen}; {Rapporten}, waaronder: project- en programmaplannen; adviezen, zowel extern als intern; onderzoeksrapporten en auditrapportages; voortgangsrapportages; evaluaties; {presentaties}; {Begrotingen}, jaarverslagen en andere financiële documentatie>; {Dataset} {Alle interne correspondentie} (incl./excl. brieven, e-mails, memo’s en gespreksnotities, smsjes en WhatsAppjes) met betrekking tot {onderwerp}>; {Alle correspondentie} (e-mails, brieven, memo’s, nota’s, notities en anderszins schriftelijk gewisselde stukken) met derden met betrekking tot {onderwerp} tussen {bestuursorgaan} en in ieder geval de navolgende partijen (organisaties, personen): </p>
    				<p>{partij 1}{partij 2}{partij enz. } </p>   */} 
    				<p>Mocht u beschikken over andere documenten die – aanvullend of in plaats van gevraagde documenten - inzicht in deze bestuurlijke aangelegenheid te kunnen geven, dan verzoek ik u die documenten ook te verstrekken. </p>

			</div>		
			{filteredDataText.map(item => (
		    <div key={item.id}>
		      <div>
		      	<h3>{item.title}</h3>
		        <p>{item.sentence}</p> 
		        <br/>
		      </div>  
		    </div>       
		      ))}
			
			<div> 
	            	<p>Met vriendelijke groet, </p>
		     		<p className="userSignature"></p>
		     		<p>{value.userName}</p>
		     		<p>{value.userCompanyName}</p>
		     		<p>{value.userAdress} {value.userAdressNumber}</p>
		     		<p>{value.userZipcode} {value.userCityName}</p>
		     		<p>{value.userEmail}</p>
		     		<p>{value.userPhoneNumber}</p>
     		</div>

		</div>
    )
}
export default LetterUI