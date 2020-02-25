import React, { Component, useState } from "react"


function LetterUI({value, filteredDataText}){
	return (
		<div>
			
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
			{filteredDataText.map(item => (
		    <div key={item.id}>
		      <div>
		        <p>{item.sentence}</p> 
		      </div>  
		    </div>       
		      ))}
			
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
export default LetterUI