import { useState, useEffect } from 'react'
import { getMaxScoreByRegion, getRegionCode } from './util.jsx'
import './style/Header.css'

export default function Header({ region, score, onPlay }) {
	let maxScore = getMaxScoreByRegion(region);
	let regionCode = getRegionCode(region);
	const [highScores, setHighScores] = useState({
		W: 0, AS: 0, NA: 0, SA: 0, AF: 0, OA: 0, EU: 0});

	if (score > highScores[regionCode]) {
		const copyScores = {...highScores};
		copyScores[regionCode] = score;
		setHighScores(copyScores);
	}

	return (
		<div className='header-con'>
		<div className='header-btn header-item' onClick={onPlay}>&#8249;</div>
		<div>
		   <h1 className='header-h1 header-item' onClick={() => alert("Good Day!")}>
		   Vex-Echo
		   </h1>
		</div>
		<div className='header-score header-item'>
		   <div className='header-score-item'>Best Score: {highScores[regionCode]}</div>
		   <div className='header-score-item'>Current Score: {score}/{maxScore}</div>
		</div>
		</div>
	);	
}
