import { useState } from 'react'
import './style/App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Body from './Body.jsx'
import Menu from './Menu.jsx'

function App() {
  const [region, setRegion] = useState('World');//chnaged by menu page later
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  function handleScoreChange(n) {
      setScore(n);
  }

  return (
    <div className='mainCon'>
        {!isPlaying ? (
		<Menu region={region} onPlay={() => setIsPlaying(true)} /> 
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
  )
}

export default App
