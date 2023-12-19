import { useState } from 'react'
import './style/App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Body from './Body.jsx'
import Menu from './Menu.jsx'

function App() {
  const [region, setRegion] = useState('World');
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleScoreChange(n) {
      setScore(n);
  }

  function handleRegionChange(r) {
      setRegion(r);
  }

  return (
    <>
    <div id="unsupported-message">
	Application is unsupported for screen widths below 1280 pixels
    </div>
    <div className='mainCon' id="content-container">
        {!isPlaying ? (
		<Menu onRegion={handleRegionChange} onPlay={() => setIsPlaying(true)} /> 
	) : (
	     <>
	     <Header 
		region={region} 
		score={score} 
		onPlay={() => setIsPlaying(false)} 
	      />
	      <Body id='ggame' 
	        key={region} 
	        region={region} 
	        score={score} 
	        onChange={handleScoreChange}
		onReset={() => setReset(0)}
	      />
	      <Footer />
	      </>
	)}
      </div>
    </>
  )
}

export default App
