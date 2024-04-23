import React from "react";

function Cookiemelding({ showCookie, value }) {
	return (
		<div className="cookie">
			<div className="cookieBlock">
				<p className="logo">Wob BES generator</p>
				<h1>The Wob BES generator uses only functional and analytical cookies</h1>
				<p>
					The Wob BES Generator uses only functional cookies and an analytical cookie. If you disable the functional
					cookies the Woo generator will not work: after clicking an option or filling in an input field the
					corresponding paragraph does not appear in the letter, for example. Therefore, you cannot use the Woo
					generator without accepting the functional cookies. With the analytical cookie we can see how often and where
					in the Netherlands the Woo generator is used. We consider this important for the improvement of the
					Woo-generator.
				</p>
				<br />
				<p>
					Explanation about the functional cookies:
					<br />
					What you click and enter is stored in the browser by the functional cookie, so the browser can use the
					information to run the Woo generator. This is convenient because even if you close your browser tab, the data
					you entered will not be forgotten. If you want to erase the information you entered, for example, because you
					logged into a public computer, then you can click "Clear All" at the end. But for the sake of clarity, again:
					the VVOJ itself does not store the information you entered or clicked on. The VVOJ cannot see what you have
					entered or clicked on.
					<br />
					<br />
				</p>

				<button
					className="buttonStyle"
					type="button"
					onClick={() => {
						showCookie(value.showCookie);
					}}
				>
					I agree to the cookies
				</button>
			</div>
		</div>
	);
}
export default Cookiemelding;
