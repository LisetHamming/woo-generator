import React, {useState, useEffect} from 'react';
import './App.css';
import Homepage from "./components/Homepage"

function App() {
	const [authorities, setAuthorities] = useState(null)

	useEffect(()=>{
		fetch("https://rest-api.allmanak.nl/v1/overheidsorganisatie?types=cd.{Gemeente,Ministerie,Zelfstandig bestuursorgaan, Provincie, Rechterlijke macht,Politie en brandweer}&select=url:contact->internet->value, contact->postAdres,contact->bezoekAdres,naam,types,systemid,contact->emailadres->value")
		.then(response=>response.json())
		.then(data=>setAuthorities(data))
		.catch(error=>setAuthorities(error))
	},[])
	if (authorities === null){
		return <div> bezig met gegevens ophalen</div>
	}
 	if (authorities instanceof Error){
 		return <div>Er is iets misgegaan met ophalen van gegevens</div>
 	}

  return (
    <div>
      <Homepage authorities={authorities} />
    </div>
  );
}

export default App;
