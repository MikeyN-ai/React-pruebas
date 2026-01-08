import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Controlat from './components/Controlat'
import Likeapro from './components/Likeapro'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Productes from './components/Productes'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/controlat" element={<Controlat />}></Route>
        <Route path="/likeapro" element={<Likeapro />}></Route>
        <Route path="/productes" element={<Productes />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error404 />}></Route>
        <Route path="/404" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;

const Error404 = () => {
  return (
    <div>
      Error 404
    </div>
  )
}


