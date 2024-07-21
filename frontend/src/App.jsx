import React from 'react'
import Cardco from './components/Cardco'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Addpro from './components/Addpro'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Cardco/>}/>
    <Route path='/av' element={<Addpro/>}/>
    </Routes>
    </>
  )
}

export default App
