import './style/Body.css'
import { useReducer, createContext } from 'react'
import { shuffleArrayN } from './util.jsx'
import { worldData, asiaData, northAmericaData, southAmericaData, 
	africaData, oceaniaData, europeData } from './assets/data.js'
import FlagCon from './FlagCon.jsx'
import FlagCard from './FlagCard.jsx'

export const CountriesDispatchContext = createContext(null);

export default function Body({ region, score, onChange, onReset }) {
	let initCountries, maxScore;
	switch(region) {
	  case 'World': {
	    initCountries = worldData;
	    maxScore = worldData.length;
	    break;
	  }
	  default:
	    alert("No Countries Loaded");
	    break;
	}
	
	const [listCountries, dispatch] = useReducer(countryReducer, initCountries);
	onChange(listCountries.filter(c => c.seen === 'T').length);

	console.log(listCountries.filter(c => c.seen !== 'T' && c.seen !== 'F').length);

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
    switch (action.type) {
	case 'selected': {
		return countries.map(c => {
			if (c.iso_code === action.iso_code) {
			    if (c.seen === 'F') {
				return {
				    name: action.name,
				    iso_code: action.iso_code,
				    seen: 'T'
				}
			    } else {
				return {
				    name: action.name,
				    iso_code: action.iso_code,
			            seen: 'D'
			        }
			    }
			} else {
				return c;
			}
		});
	}
	default: {
		alert("No matching country found");
	}
    }
}

