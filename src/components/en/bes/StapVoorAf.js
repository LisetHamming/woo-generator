import React from "react";
import { Link } from "react-router-dom";
import PopupButton from "./popups/PopupButton";

function StapVoorAf() {
	return (
		<div className="formLetter central">
			<p className="logo">Wob BES generator</p>
			<h2>Good to know</h2>
			<br />
			<br />

			<p>
				The Wob BES generator is not designed to be used on your phone. It is best to open it on your computer or
				laptop.
			</p>
			<br />
			<p>
				On the left side of the screen, you will find the information we need for your request and boxes to fill in this
				information.
			</p>
			<span className="nieuwietje">
				<p>
					For more explanation, you can click on the i's.
					<PopupButton number="19" />
				</p>
				<br />
			</span>

			<p>
				Your answers are automatically processed and then appear in the draft Woo request on the right side. This way,
				you can always see if the text is flowing correctly. Everything you fill in is 'locally' saved through the
				browser you are using. That means no one else can see your answers, not even us.
			</p>
			<br />
			<p>Once you have answered all the questions, you can save your draft Woo request as a DOC and edit the text.</p>
			<br />
			<p className="extraPadding">
				If you want something a bit different or want to add an extra explanation to your request, you can still edit
				your Woo request in the saved Word document.
			</p>
			<Link to="/EN/">Back</Link>

			<Link to="/EN/bes/Stap1">I understand</Link>
		</div>
	);
}

export default StapVoorAf;
