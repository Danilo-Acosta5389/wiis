import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav.jsx';
import Login from './Login';
import Survey from './SurveyPage.jsx';



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
