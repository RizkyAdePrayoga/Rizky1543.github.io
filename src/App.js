import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./components/Home"
import{ AddUser } from "./components/AddUser"
import { EditUser } from "./components/EditUser"
import { GlobalProvider } from './context/GlobalState';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <><><header>

      <div class="container">
        <h1><a href="">Inti</a></h1>
        <ul>
          <li><a href="./index.html">Home</a></li>
          <li><a href="./siswa.html">Siswa</a></li>
          <li><a href="./client.html">Client</a></li>
        </ul>
      </div>
    </header><div class="bio" >



        <GlobalProvider>
          <Router>
            <Routes>

              <Route exact path='/' element={<Home />} />
              <Route path='/add' element={<AddUser />} />
              <Route path='/edit/:id' element={<EditUser />} />

            </Routes>
          </Router>
        </GlobalProvider>

      </div></><div>
      <div class="profile">
    <h3>Profile</h3>
    <p>Section 1</p>
    <p>Section 2</p>
   </div>

   <div class="service">
    <h3>Service</h3>
    <p>Mobile</p>
    <p>Web</p>
   </div>
   <ul class="footer1">
    <li><a href="#inti">INTI</a></li>
   </ul>
      </div></>
  );
}

export default App;
