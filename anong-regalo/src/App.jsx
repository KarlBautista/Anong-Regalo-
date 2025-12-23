import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Occasion from './pages/Occasion'
import Steps from './components/Steps'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Person from './pages/Person'
import Details from './pages/Details'
import Ideas from './pages/Ideas'
function App() {
  return (
    <div className='w-full flex flex-col'>
      <Header />
      <Steps />
        <Routes>
          <Route path='/' element={<Occasion />}/>
          <Route path='/person' element={<Person />}/>
          <Route path='/details/:title' element={<Details />}/>
          <Route path="/ideas" element={<Ideas />}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
