import React from "react";
import bg from "./../../../assets/icons/orange-single-line.png";

function HomepageWaarom() {
	return (
		<div className="sectionWaarom">
			<div className="sectionBlock">
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Why a disclosure request?
					</h1>
					<p>
						Everyone has the right to request information filed in documents from the government. The Open Government
						Government Act BES (the Wob BES) regulates what such a request must meet. A Wob request is crucial in order
						to gain access access to information that the government does not release of its own accord. Look{""}
						<a href="https://wetten.overheid.nl/BWBR0028154/2010-10-10" className="plaintext" target="_blanc">
							here
						</a>{" "}
						for the Open Government Act BES.
					</p>
				</div>
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						How do I make a disclosure request?
					</h1>
					<p>
						Drafting a Woo request is not difficult, but the request must meet a number of conditions. With the Wob BES
						generator, we help you draft a proper and valid Woo request. Choose which documents you want to request and
						from which government agency. How do you find the government agency? Luckily you can search our list of
						government agencies in the Kingdom of the Netherlands. Done! You can now save your Wob BES request and send
						it by mail or digitally.
					</p>
				</div>
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Why a Wob BES generator?
					</h1>
					<p>
						Quite a few journalists think filing a Woo petition is a mysterious legal trick. That is exaggerated, but
						there is a grain of truth to it: there are quite a few points to watch out for. With the Woo generator you
						don't have to worry about overlooking anything. Just get started!
					</p>
				</div>
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						When shouldn't I file a Wob BES request?
					</h1>
					<p>
						You use a Wob BES request only for documents that are not yet public. Before you submit a Woo request, you
						should then check if what you're looking for is already public. For example, you can look {""}
						<a href="https://open.overheid.nl/" className="plaintext" target="_blanc">
							here
						</a>{" "}
						for documents which the Dutch government has made public. By the way, documents that have already been made
						public are handy compasses to find related information that isn't public yet! {""}
					</p>
					<br></br>
					<p>
						Further, keep in mind that the government does not have to disclose all information: the Woo has a number of
						grounds for refusal such as business confidentiality and respect for privacy. Some of these exemptions
						require that a whole document be kept undisclosed, while others require that the government agency apply the
						exemption on parts of a document. These parts of the document can be redacted out while other parts are made
						public.
					</p>
				</div>
			</div>
		</div>
	);
}
export default HomepageWaarom;
