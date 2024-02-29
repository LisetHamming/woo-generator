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
			<p className="logo">Woo generator</p>
			<h2 className="hidePrint">Final check!</h2>
			<p className="extraPadding hidePrint">Woo request with subject: {value.subjectLong}</p>
			<p className="hidePrint">
				Although the Woo generator has been developed with the utmost care, preparing a good Woo request is
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
				Your draft Woo request
				<br />
				Check that the sentences in your request flow well. Also think about whether any specific information is needed to add to your
				request. You can make these additions and changes yourself after you have downloaded the .doc file. If you are satisfied, print the letter and sign it. For a Woo request by letter
				this is mandatory. Don't forget to make a copy of your signed letter before sending it by mail.
				<br />
				<br />
				Sending digitally?
				<br />
				Under the Woo, government agencies must accept Woo requests submitted digitally. But
				government agencies may specify by which digital means a Woo request must be submitted,
				For example, by using a specific e-mail address or an online Woo form. Always check this beforehand!
				If the government body has posted a Woo form on its website, you can also upload the letter (which may have been signed) or
				upload or copy and paste the text.
			</p>
			<br />
			<div>
				<p>
					Questions and comments: woo-generator@vvoj.org
					<br />
					The Woo generator was made with love and joy and we will continue to develop it. 
					So please let us know if you are missing something or you prefer that we do something differently. 
					Of course we would also love to hear if you are happy with it!{" "}
				</p>
				<br />
				<p>
					{" "}
					Tell others about the Woo generator?
					<br /> #woogenerator{" "}
				</p>
				<br />
				<br />
			</div>
			<br />
			<Link to="/EN/woo/StapExtra">Terug</Link>
			<Link to="/EN/" onClick={resetState}>
				Clear everything
			</Link>

			<LetterUI value={value} filteredDataText={filteredDataText} getCurrentDate={getCurrentDate} />
		</div>
	);
}
export default StapEinde;
