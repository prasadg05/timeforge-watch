import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import ProductDetail from './ProductDetails'
import Basic from './Basic'

function App3() {
  return (
    <BrowserRouter>
        <Router>
            <Route path='/' element={<Basic/>}/>
            <Route path='/products/:productid' element={<ProductDetail/>}/>
        </Router>
    </BrowserRouter>
  )
}

export default App3
