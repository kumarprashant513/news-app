import React from 'react'
import Header from './common/Header';
import Footer from './common/Footer';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

function Home() {
  return (
    <div>
     <Header/>
     <Sidebar/>
     <Main/>
     <Footer/>
    </div>
  )
}

export default Home
