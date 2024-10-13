import React from 'react'
import {  Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import VechicleListing from './Pages/VechicleListing'
import Footer from './components/Footer/Footer'
import Header from './components/Navbar/Header'
import Details from './Pages/Details'
import Payments from './Pages/Payments'
import "./index.css"
import Error from './Pages/Error'

function App() {
return (
    <>
      <Header/>
      <Routes >
        <Route> 
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<VechicleListing/>} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/payments/:id' element={<Payments />} />
          <Route path='*' element={<Error />}/>
        </Route> 
      </Routes>
      <Footer />
    </>
  )
}

export default App

