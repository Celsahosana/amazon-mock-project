import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './home/page'
// import Cart from './cart/page'
import SingleProduct from './single/page'

function App() {

  return (
   <Routes>
    <Route path= "/product" element = {<HomePage/>} />
    {/* <Route path='/cart' element = {<Cart/>} /> */}
    <Route path='/product/:id' element = {<SingleProduct/>} />
   </Routes>
  )
}

export default App
