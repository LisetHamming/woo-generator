import React from "react";
import { Link } from "react-router-dom";
import HomepageOvergenerator from "./HomepageOvergenerator";

function PrivacyVoorwaarden(TagManager) {
	const tagManagerArgs = {
		dataLayer: {
			page: "Privacy-voorwaarden"
		},
		dataLayerName: "PageDataLayer"
	};
	return (
		<div className="conditions">
			<div className="block2">
				<div>
					<p className="logo">Wob-generator</p>
					{TagManager.dataLayer(tagManagerArgs)}
					<h1>Privacy policy</h1>
					<p>
						Privacy is very important to us. That is why we have created this page to make clear what we do with your
						data.
					</p>
					<div className="extra_content"> </div>
					<Link to="/">Go back</Link>
					<Link to="/Stap1">Start a Wob BES request</Link>
				</div>
			</div>
			<hr className="horizontalRule"></hr>
			<div className="textLongConditions">
				<p>
					The Wob BES generator only uses functional cookies and an analytical cookie. If you disable the functional
					cookies the Wob BES generator will not work: after clicking an option or filling in an input field the
					corresponding paragraph does not appear in the letter. That is why you cannot use the Wob BES generator
					Wob-generator without accepting the functional cookies. Using the analytical cookie we can see how often and
					where in the Kingdom of the Netherlands the Wob BES generator is used. We find this important for the
					improvement of the Wob BES generator.
				</p>
				<br />
				<p>
					Explanation functional cookie:
					<br />
					What you click and the information you fill in is stored in the browser through the functional cookie, so the
					browser can use the information to allow the wob generator to work. This is convenient if you leave while you
					were busy making your request, so you can always come back to it. If you want to delete the information you
					entered, for example, because you are on a public computer, then you can click "Clear All" at the end. But for
					the sake of clarity it bears repeating: the VVOJ itself does not store the information you entered or clicked
					on. The VVOJ cannot see what you have entered or clicked on through the Wob BES generator.
					<br />
					<br />
				</p>
			</div>

			<hr className="horizontalRule"></hr>
			<HomepageOvergenerator />
		</div>
	);
}
export default PrivacyVoorwaarden;
