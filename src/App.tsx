
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Carrito from './components/Carrito'
import Products from './pages/Products'


import { lazy } from 'react'
import Layout from './components/Layout'

// const Carrito = lazy(() => import('./components/Carrito'))
// const Products = lazy(() => import('./pages/Products'))
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route path='/' element={<Products />}></Route>
            <Route path='/carrito' element={<Carrito></Carrito>}></Route>
            <Route path='*' element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
