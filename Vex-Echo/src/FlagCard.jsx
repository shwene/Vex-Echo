
import './style/FlagCard.css'

export default function FlagCard({ name, iso_code }){
	return (
	    <div className='card'>
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
