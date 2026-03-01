import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import NavBar from './components/NavBar';
import ShowMovie from './components/ShowMovie';
import Footer from './components/Footer';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        
          <Route path='/addmovie' element={<AddMovie />} />
          <Route path='/ShowMovie/:id' element={<ShowMovie />} />
          <Route path='/edit/:id' element={<EditMovie />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App