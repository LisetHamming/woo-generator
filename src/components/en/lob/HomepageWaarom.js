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
						Everyone has the right to request information that lay in documents from the government. 
						Aruba, Curaçao and Sint Maarten all have a law that regulates how the governments should disclose information. </p> <br></br>
						
						<p> The National Ordinance Open Government
						Government (the Lob) regulates what such a request must meet, and each of these islands has a version of it. A Lob request is crucial in order to gain access
						access to information that the government does not release of its own accord. </p>
						<br></br>
						<p> Look {""}
						<a href="https://cuatro.sim-cdn.nl/arubaoverheid2858bd/uploads/0206ab99.012.pdf" className="plaintext" target="_blanc">
						here  
						</a>{" "} for the Lob of Aruba,  {" "}
						<a href="https://gobiernu.cw/wp-content/uploads/2010/09/T.-Landsverordening-openbaarheid-van-bestuur-Cura%C3%A7ao.pdf" className="plaintext" target="_blanc">
						here 
						</a>{" "} for the Lob of Curaçao, {" "}
						<a href="https://lokaleregelgeving.overheid.nl/CVDR155440/1" className="plaintext" target="_blanc">
						and here {" "}
						</a>{" "} for the Lob of Sint Maarten.
					</p>
				</div>
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						How do I make a disclosure request?
					</h1>
					<p>
					Drafting a Lob request is not difficult, but the request must meet a number of conditions. 
					With the Lob generator, we help you draft a proper and valid Woo request. </p>
					<br></br>
					<p>Choose which documents you want to request and from which government agency. 
					How do you find the government agency?</p>
					<br></br> 
					<p> Luckily you can search our list of government agencies in the Kingdom of the Netherlands. 
					Done! You can now save your Lob request and send it by mail or digitally.
					</p>
				</div>
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Why a Lob generator?
					</h1>
					<p>
						Quite a few journalists think filing a Woo petition is a mysterious legal trick. That is
						exaggerated, but there is a grain of truth to it: there are quite a few points to watch out for. With the
						Lob generator you don't have to worry about overlooking anything. </p>
						<br></br>
						<p>Just get started!
					</p>
				</div>
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						When shouldn't I file a Lob request?
					</h1>
					<p>
						You use a Lob request only for documents that are not yet public. Before
						you submit a Woo request, you should then check if what you're looking for is already public. </p>
						<br></br>
						<p>For example, you can look {""}
						<a href="https://publico.aw/" className="plaintext" target="_blanc">
						here
						</a>{" "}
						for documents which (a subset of) the Aruban government has made public. <a href="https://open.overheid.nl/" className="plaintext" target="_blanc">
						The Dutch government also has a site where they make documents public.
						</a>{" "}By the way, documents that have already been made public are handy compasses to find related information that isn't public yet! {""}
					</p>
					<br></br>
					<p>
						Further, keep in mind that the government does not have to disclose all information: the Woo has a number of
						grounds for refusal such as business confidentiality and respect for privacy. 
						Some of these exemptions require that a whole document be kept undisclosed, 
						while others require that the government agency apply the exemption on parts of a document. 
						These parts of the document can be redacted out while other parts are made public.
					</p>
				</div>
			</div>
		</div>
	);
}
export default HomepageWaarom;
