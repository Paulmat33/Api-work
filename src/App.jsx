import { useState } from 'react'
import './App.css'
import Homepage from './Pages/Homepage/Homepage';
import Article from './Pages/Article/Article'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      {/* <Route index element={<Homepage/>}/> */}
      <Route path='article' element={<Article/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
