import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
//import { useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Landing from './Pages/Landing/Landing';
import Detail from './Pages/Detail/Detail';
import Form from './Pages/Form/Form';
import NotFound from './Pages/NotFound';
import NavBar from './Components/NavBar/NavBar';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <NavBar />}

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
};

export default App;
