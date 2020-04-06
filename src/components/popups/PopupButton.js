import React, { useState } from "react"
import DataPopup from "./DataPopup"
import Popup from "./Popup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


function PopupButton({ number }) {
    const [popUp, setPopUp] = useState(false)
    return (
        <div>	
       
			<button type="button" className="popupI" onClick={()=>setPopUp(curr=>!curr)}><FontAwesomeIcon className="fontIcon" icon={faInfoCircle} /></button>{popUp&& <Popup number={number} clickHandler={()=>setPopUp(false)} />}<br />
		</div>
    )
}
export default PopupButton