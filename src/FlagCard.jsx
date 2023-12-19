import { useContext } from 'react'
import { CountriesDispatchContext } from './Body.jsx'
import './style/FlagCard.css'

export default function FlagCard({ name, iso_code }){
	const dispatch = useContext(CountriesDispatchContext);
	return (
	    <div className='card' onClick={() => {
		    dispatch({
			    type: 'selected',
			    iso_code: iso_code,
			    name: name
		    });
	    }}>
		<img 
		  className='card-pic'
		  src={'https://flagcdn.com/' + iso_code.toLowerCase() + '.svg'}
		  alt={'flag of ' + name}
		  width="120"
		  height="80"
		  display="block"
		/>
		<h5>{name}</h5>
	    </div>
	);
}
