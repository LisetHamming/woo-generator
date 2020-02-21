import React, { Component, useState } from "react"


function LetterUI(value){
	return (
		<div>
			
			


			
			{value.filteredDataText.map(item => (
		    <div key={item.id}>
		      <div>
		        <p>{item.sentence}</p> 
		      </div>  
		    </div>       
		      ))}
			


		</div>
		)
}
export default LetterUI