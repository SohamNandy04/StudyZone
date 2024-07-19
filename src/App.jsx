//import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Login from "./components/Login"
import Signup from './components/Signup'
import './App.css'

function App() {


  return (
    <>

      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            {/* <Route /> */}
            <Route exact path="/" element = {<Body/>}/>
            <Route exact path="/home" element = {<Home/>}/>
            <Route exact path="/about" element = {<About/>}/>
            <Route exact path="/login" element = {<Login/>}/>
            <Route exact path="/signup" element = {<Signup/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
