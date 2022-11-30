import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from'./Header'
import Meio from './Banner'
import Icons from './Icons'
import Meio2 from './Meio2'
import Meio3 from './Meio3'
import Person from './Personagens'
import Footer from './Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Meio/>
      <Icons/>
      <Meio2/>
      <Meio3/>
      <Person/>
      <Footer/>
    </div>
  )
}

export default App
