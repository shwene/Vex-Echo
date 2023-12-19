import './style/Menu.css'
import { useState } from 'react';

export default function Menu({ onRegion, onPlay}) {
	const [tempRegion, setTempRegion] = useState('World');	

	function handleSubmit(e) {
	    e.preventDefault();
	    onRegion(tempRegion);	    
	    onPlay();
	}

	return (
		<div className='menu-con'>
			<h1>Vex-Echo
			    <span>Vexillology Memory Game</span>
			</h1>
			<form onSubmit={handleSubmit}>
			    <select
				id="menu-select"
				value={tempRegion}
				onChange={e => setTempRegion(e.target.value)}>
				<option value="World">World</option>
				<option value="Asia">Asia</option>
				<option value="North America">North America</option>
				<option value="South America">South America</option>
				<option value="Europe">Europe</option>
				<option value="Africa">Africa</option>
				<option value="Oceania">Oceania</option>
			    </select>
			    <button type="submit">Play</button>
			</form>
		</div>
	);
}
