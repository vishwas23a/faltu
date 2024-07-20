
import './App.css'
import Acodian from './components/Acodian/Acodian'
import Random from './components/RandomColor/Random'
import Stars from './components/Star/Stars'

function App() {

  return (
    <>
      <Acodian/>
      <Random/>
      <Stars noOfStars={10}/>
    </>
  )
}

export default App
