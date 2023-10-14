import React from 'react'
import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Nav from './Nav.jsx';
import Login from './Login';
import Hello from './Hello.jsx';
import Survey from './Survey';



function App() {

  return (
    <>
      {/* <VideoBg className="video" muted={true} loop={true} autoPlay>
        <source src="https://player.vimeo.com/external/314181352.hd.mp4?s=03e7a8ddba6566f8a62cd7f8a8da7d79461c3dbd&profile_id=172&oauth2_token_id=57447761" type="video/mp4"/>Your web-browser does not support video background
      </VideoBg> */}
      <Nav />
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/Hello' element={<Hello />} />
       <Route path='/Login' element={<Login />} />
       <Route path='/Survey' element={<Survey/>} />
      </Routes>
    </>
  )
}

export default App
