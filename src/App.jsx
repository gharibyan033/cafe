import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Cocktail from './pages/Cocktails/Cocktails'
import Details from './pages/Details/Details'

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout/>}>
          <Route path="/cocktails" element={<Cocktail />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App