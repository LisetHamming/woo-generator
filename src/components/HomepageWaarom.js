import React from "react";
import bg from "./../assets/icons/orange-single-line.png";

function HomepageWaarom() {
	return (
		<div className="sectionWaarom">
			<div className="sectionBlock">
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
					What is a FOI request and why would I submit one? 
					</h1>
					<p>
					Everyone has the right to request information contained in documents from the government. 
					Every part of the Kingdom has a law that regulates what such a request must comply with. 
					The government does not make a lot of information public on its own. 
					</p>
					<p>
					Submitting a request for government information is then crucial to hold the government accountable 
					for the consequences of policies, detect corruption or discover squandering of money. 
					</p>
				</div>
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
					Why a FOI generator? 
					</h1>
					<p>
					Quite a few journalists, activists, researchers and citizens think that filing a FOI request is a mysterious legal trick 
					that only a few insiders know how to do. 
					</p>
					<p>That's an exaggeration, but there's some truth to it: 
					there are quite a few points you should pay attention to in order to really get the information you're looking for. 
					With our generator, you don't have to worry about missing something. So let's get started!

					</p>
				</div>
			</div>
		</div>
	);
}
export default HomepageWaarom;
