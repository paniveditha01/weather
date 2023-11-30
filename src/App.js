import React from 'react'
import Navigation from './Components/Navigation'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import WeatherApp from './Components/Weatherapp/Weatherapp'



const App = () => {
  return (
    <div>
      <Router>
        <div>
      <Navigation/>
    </div>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/weather' element={<WeatherApp/>}/>

    </Routes>
    </Router>
    </div>
  )
}

export default App