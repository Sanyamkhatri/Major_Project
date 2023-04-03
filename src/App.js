import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header';
import Login from './components/Login'
import SignUp from './components/SignUp'

import Qualification from './components/forms/Qualification';
import Phd from './components/forms/Phd';
import ExperienceMaster from './components/forms/ExperienceMaster';
import PersoanlNew from './components/forms/PersoanlNew'


import './Styles/header.css'
import './Styles/form.css'
import './Styles/login.css'



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element = {<SignUp />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<PersoanlNew />} />
        <Route path='/qualification' element = {<Qualification />} />
        <Route path='/phd' element = {<Phd />} />
        <Route path='/ExperienceMaster' element = {<ExperienceMaster />} />
      </Routes>
    </Router>
    
  );
}

export default App;
