
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import Home from './pages/Home'
import Sneaker from './pages/Sneaker'
import Accessory from './pages/Accessory'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Productdt from './pages/Productdt/Productdt'
import Blog from './pages/Blog'

function App() {

  return (
    <Routes>
      <Route path='/' element = {<Layout />}>
        <Route index element = {<Home />}></Route>
        <Route path='/sneaker' element = {<Sneaker />}></Route>
        <Route path='/accessory' element = {<Accessory />}></Route>
        <Route path='/product/:id' element = {<Productdt />}></Route>          
        <Route path='/blog' element = {<Blog />}></Route>
        <Route path='/about-us' element = {<AboutUs />}></Route>
        <Route path='/contact' element = {<Contact/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
