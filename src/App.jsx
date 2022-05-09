
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Layout1 from './components/Layout1'
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
import Loading from './components/Loading/Loading'
import './App.css'
const myContext = createContext();
export {myContext} 

function App() {
  const [size,setSize] = useState (null)
  const [open,setOpen] = useState(false);

  const {isfetching, error} = useGetAllProductsQuery()
  if(isfetching) {
    return <Loading/>
  }
  if(error){
    return <h1>Có lỗi xảy ra</h1>
  }
  return (
    <myContext.Provider value={{size,setSize,open,setOpen}}>
    <Routes>
        <Route path='/' element = {<Layout1/>}>
          <Route index element = {<Home />}/>
          <Route path='/' element = {<Layout />}>
            <Route path='/sneaker' element = {<Sneaker />}/>
            <Route path='/accessory' element = {<Accessory />}/>
            <Route path='/sneaker/:id' element = {<Productdt />}/>
            <Route path='/cart' element={<Cart />}/>  
            <Route path='/blog' element = {<Blog />}/>
            <Route path='/about-us' element = {<AboutUs />}/>
            <Route path='/contact' element = {<Contact/>}/>
            <Route path='/checkout' element = {<Checkout />}/>
            <Route path='/wishlist' element={<WishList />}/>
          </Route>
        </Route>
    </Routes>
    </myContext.Provider>
  )
}

export default App
