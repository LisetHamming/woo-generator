import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";

function App() {
	const [authorities, setAuthorities] = useState(null);

	useEffect(() => {
		let id = 0;
		fetch("/adreslijst.json")
			.then(response => response.json())
			.then(data => data.map(item => ({ ...item, id: id++ })))
			.then(data => setAuthorities(data))
			.catch(error => setAuthorities(error));
	}, []);
	if (authorities === null) {
		return <div> bezig met gegevens ophalen</div>;
	}
	if (authorities instanceof Error) {
		return (
			<div>
				<Homepage />
				{console.log(authorities)}
			</div>
		);
	}

	return (
		<div>
			<Homepage authorities={authorities} />
		</div>
	);
}

export default App;
