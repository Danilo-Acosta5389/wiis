import React from 'react'
import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav.jsx';
import Login from './Login';
import Survey from './Survey';



function App() {

  return (
    <>
      <Nav/>
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/Login' element={<Login />} />
       <Route path='/Survey' element={<Survey/>} />
      </Routes>
    </>
  )
}

export default App
