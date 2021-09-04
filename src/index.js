import React from "react";
import ReactDOM from "react-dom";
import TagManager from "react-gtm-module";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ScrollToTop } from "./components/ScrollToTop";
import * as serviceWorker from "./serviceWorker";

const tagManagerArgs = {
	gtmId: "GTM-MZS2ZCP",
	dataLayerName: "PageDataLayer"
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
	<Router>
		<App />
		<ScrollToTop />
	</Router>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
