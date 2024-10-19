import React from 'react'
import Logo from '../../assets/images/logo.jpg'
import { Link } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import LatestNews from '../LatestNews'
import Support from '../Support'
import Contactus from '../Contactus'
import PopularNews from '../PopularNews'
import National from '../National'
import International from '../International'

function Header() {
  return (
    <div className='header'>
      <ul className='menu'>
        <li><Link to='/home'>Home&nbsp; <i class="fa-solid fa-house" id='font-icon'></i></Link></li>
        <li><Link to='/latest'>Trending News</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/contact'>Contact Us&nbsp; <i class="fa-solid fa-phone" id='font-icon'></i></Link></li>
        <li><Link to='/support'>Support&nbsp; <i class="fa-solid fa-headphones" id='font-icon'></i></Link></li>
        
      </ul>

      <img src={Logo} className='logo' alt="" />

      <ul className='navbar'>
      <li><Link to='/latest'>Latest News</Link></li>
      <li><Link to='/popular'>Popular News</Link></li>
        <li><Link to='/national'>National News</Link></li>
        <li><Link to='/international'>International News</Link></li>
      </ul>

      <div className='break'></div>
    </div>
  )
}

export default Header
