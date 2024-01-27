import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import Input from './components/Input'
import Scrapbook from './components/Scrapbook'
import Recommendation from './components/Recommendation'
import {Route, Routes} from "react-router-dom"
import InputScreen from './components/inputscreen'
import FlipBook from './components/Scrap'; 

function App() {
  
  return (
    <>
      <FlipBook/>
    </>
  ) 
}

export default App
