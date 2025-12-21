import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Occasion from './components/Occasion'
import Steps from './components/Steps'
function App() {
  return (
    <div className='w-full flex flex-col'>
      <Header />
      <Steps />
      <Occasion />
    </div>
  )
}

export default App
