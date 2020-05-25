import React from "react"
import DataPopup from "./DataPopup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


function Popup({ clickHandler, number }) {
    const popup = DataPopup[number]

    return (
        <div className="popup">	
        <button className="popupClose" type="button"onClick={clickHandler}><FontAwesomeIcon icon={faTimes} /></button>
			<div>

				<h1>{popup.h1}</h1>
				<p>{popup.p}</p>
				<p>{popup.p2}</p>
				<p>{popup.p3}</p>
				<p>{popup.p4}</p>
				<p>{popup.p5}</p>
			</div>
			
		</div>
    )
}
export default Popup