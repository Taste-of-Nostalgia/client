import { useState } from 'react'
import './App.css'
import './output.css'
import Navbar from './components/Navbar'
import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import Input from './components/Input'
import Scrapbook from './components/Scrapbook'
import Recommendation from './components/Recommendation'
import { Route, Routes } from "react-router-dom"
import InputScreen from './components/inputscreen'
import FlipBook from './components/Scrap';

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/input" element={<Input />} />
          <Route path="/scrapbook" element={<Scrapbook />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Routes>
      </div>
    </>
  )
}

export default App
