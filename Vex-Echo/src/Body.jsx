import './style/Body.css'
import { useReducer, createContext } from 'react'
import { shuffleArrayN } from './util.jsx'
import { worldData, asiaData, northAmericaData, southAmericaData, 
	africaData, oceaniaData, europeData } from './assets/data.js'
import FlagCon from './FlagCon.jsx'
import FlagCard from './FlagCard.jsx'

export const CountriesDispatchContext = createContext(null);

export default function Body({ region, score, onChange}) {
	let initCountries, maxScore;
	switch(region) {
	  case 'World': {
	    initCountries = worldData;
	    maxScore = initCountries.length;
	    break;
	  }
	  default:
	    alert("No Countries Loaded");
	    break;
	}
	
	const [listCountries, dispatch] = useReducer(countryReducer, initCountries);
	
	const displayCountries = shuffleArrayN(listCountries, score, maxScore).map(country =>
		<FlagCard 
		  key={country.name} 
		  name={country.name} 
		  iso_code={country.iso_code}
		/>);
	
	return (
		<div className='bodyCon'>
		<h2>{region}</h2>
		<CountriesDispatchContext.Provider value={dispatch}>
		<FlagCon className='con' items={displayCountries} />
		</CountriesDispatchContext.Provider>
		</div>
	);
}

function countryReducer(countries, action) {

}

