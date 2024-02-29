import React from "react";
// import TagManager from "react-gtm-module";
import { Link } from "react-router-dom";
import LetterUI from "./LetterUI";
// const tagManagerArgs = {
// 	dataLayer: {
// 		page: "Print-brief"
// 	},
// 	dataLayerName: "PageDataLayer"
// };

function StapEinde({ value, filteredDataText, exportHTMLDoc, getCurrentDate, resetState }) {
	// TagManager.dataLayer(tagManagerArgs);
	return (
		<div className="formLetter">
			<p className="logo">Lob generator</p>
			<h2 className="hidePrint">Final check!</h2>
			<p className="extraPadding hidePrint">Lob request with subject: {value.subjectLong}</p>
			<p className="hidePrint">
				Although the Lob generator has been developed with the utmost care, preparing a good Wob BES request is
				human work, so your mileage may vary. Moreover, you remain responsible for what you send to the governing body.
				<br />
				<br />
			</p>
			<p className="extraPadding">
				<button
					className="buttonStyle2"
					onClick={() => {
						window.dataLayer.push({ event: "print bes EN brief" });
						exportHTMLDoc();
					}}
				>
					Save as .Doc file
				</button>
			</p>
			<p>
				Your draft Lob request
				<br />
				Check that the sentences in your request flow well. Also think about whether any specific information is needed to add to your
				request. You can make these additions and changes yourself after you have downloaded the .doc file. If you are satisfied, print the letter and sign it. For a Wob BES request by letter
				this is mandatory. Don't forget to make a copy of your signed letter before sending it by mail.
				<br />
				<br />
				Sending digitally?
				<br />
				The Lob does not say anything about filing a request digitally, or via email. 
				So, you are not guaranteed that your request will be accepted if you send it via email. 
				However, some governments will indeed have a prescribed way to file the request digitally. 
				Make sure to check this beforehand. 
			</p>
			<br />
			<div>
				<p>
					Questions and comments: woo-generator@vvoj.org
					<br />
					The Lob generator was made with love and joy and we will continue to develop it. 
					So please let us know if you are missing something or you prefer that we do something differently. 
					Of course we would also love to hear if you are happy with it!{" "}
				</p>
				<br />
				<p>
					{" "}
					Tell others about the Lob generator?
					<br /> #lobgenerator{" "}
				</p>
				<br />
				<br />
			</div>
			<br />
			<Link to="/EN/lob/StapExtra">Terug</Link>
			<Link to="/EN/" onClick={resetState}>
				Clear everything
			</Link>

			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default StapEinde;
