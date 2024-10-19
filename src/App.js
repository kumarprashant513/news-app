import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ManageNews from './pages/ManageNews';
import AddNews from './pages/AddNews';
import Forget from './pages/Forget';
import EditNews from './pages/EditNews';
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import Contactus from './pages/Contactus';
import LatestNews from './pages/LatestNews';
import About from './pages/About';
import PopularNews from './pages/PopularNews';
import National from './pages/National';
import International from './pages/International';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/Register/forget' element={<Forget/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/manage' element={<ManageNews/>}/>
          <Route path='/add' element={<AddNews/>}/>
          <Route path='/edit' element={<EditNews/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/forget' element={<Forget/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/contact' element={<Contactus/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/latest' element={<LatestNews/>}/>
          <Route path='/Popular' element={<PopularNews/>}/>
          <Route path='/national' element={<National/>}/>
          <Route path='/international' element={<International/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
