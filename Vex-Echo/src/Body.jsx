import './style/Body.css'
import { useState, useEffect, useRef, useReducer, createContext } from 'react'
import { shuffleArrayN, getMaxScoreByRegion, getDataByRegion } from './util.jsx'
import FlagCon from './FlagCon.jsx'
import FlagCard from './FlagCard.jsx'

export const CountriesDispatchContext = createContext(null);

export default function Body({ region, score, onChange, onReset }) {
	const scoreRef = useRef(null);
	const [roundWins, setRoundWins] = useState(0);

	let initCountries, maxScore;
	initCountries = getDataByRegion(region);
	maxScore = getMaxScoreByRegion(region);
	
	const [listCountries, dispatch] = useReducer(countryReducer, initCountries);
	if (listCountries.filter(c => c.seen === 'D').length) {
		scoreRef.current = 0;
		dispatch({type:'reset'});
	} else {
		scoreRef.current = roundWins * 12 + listCountries.filter(c => c.seen === 'T').length;
	}
	//onChange(scoreRef.current);
	useEffect(() => {
		onChange(scoreRef.current);
		if (scoreRef.current === maxScore) {;
			setRoundWins(roundWins + 1);
			dispatch({type:'reset'});
			alert("Nice!");
		}
	}, [scoreRef.current]);

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
				};
			    } else {
				return {
				    name: action.name,
				    iso_code: action.iso_code,
			            seen: 'D'
			        };
			    }
			} else {
				return c;
			}
		});
	}
	case 'reset': {
		return countries.map(c => {
			return {
				name: c.name,
				iso_code: c.iso_code,
				seen: 'F'
			};
		});
	}
	default: {
		alert("No matching country found");
	}
    }
}

