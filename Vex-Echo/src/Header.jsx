import { worldData, asiaData, northAmericaData, southAmericaData, 
	africaData, oceaniaData, europeData } from './assets/data.js'
import './style/Header.css'

export default function Header({ region, score, onPlay }) {
	return (
		<div className='header-con'>
		<div className='header-btn header-item' onClick={onPlay}>&#8249;</div>
		<div><h1 className='header-h1 header-item'>Vex-Echo</h1></div>
		<div className='header-score header-item'>
		   <div className='header-score-item'>Best Score: {score}/{score}</div>
		   <div className='header-score-item'>Current Score: {score}/{score}</div>
		</div>
		</div>
	);	
}
