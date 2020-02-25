import React, { Component, useState } from "react"


function Step4(){
	return(
			<div>
				<h2>Welke overheidsinstantie wil je om informatie vragen?</h2>
				<p>Wob-verzoeken kunnen alleen bij overheidsinstanties worden <link>ietje</link></p>
				<form>
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
	      		 <p>Hoe kies ik de juiste overheidsinstantie?<link>ietje</link></p>
	      		 <p>Aan wie adresseer ik mijn verzoek?<link>ietje</link></p>
				<link to="/Step3">vorige pagina</link>
				<link to="/Step5">volgende pagina</link>
			</div>
		)
}
export default Step4