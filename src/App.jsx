
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Sneaker from './pages/Sneaker'
import Accessory from './pages/Accessory'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Productdt from './pages/Productdt/Productdt'
import Blog from './pages/Blog'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import WishList from './pages/WishList/WishList'
import { useGetAllProductsQuery } from './services/product.service'
import { createContext , useState } from 'react'
import './App.css'
const myContext = createContext();
export {myContext} 

function App() {
  const [size,setSize] = useState (null)
  const [open,setOpen] = useState(false);

  const {isfetching, error} = useGetAllProductsQuery()
  if(isfetching) {
    return <p>....Loading</p>
  }
  if(error){
    return <p>Có lỗi xảy ra</p>
  }
  return (
    <myContext.Provider value={{size,setSize,open,setOpen}}>
    <Routes>
        <Route index element = {<Home />}/>
      <Route path='/' element = {<Layout />}>
        <Route path='/sneaker' element = {<Sneaker />}/>
        <Route path='/accessory' element = {<Accessory />}/>
        <Route path='/product/:id' element = {<Productdt />}/>
        <Route path='/cart' element={<Cart />}/>  
        <Route path='/blog' element = {<Blog />}/>
        <Route path='/about-us' element = {<AboutUs />}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/checkout' element = {<Checkout />}/>
        <Route path='/wishlist' element={<WishList />}/>
      </Route>
    </Routes>
    </myContext.Provider>
  )
}

export default App
