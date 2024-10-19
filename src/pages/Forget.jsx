import React from 'react'
import Header from './common/Header';
import Footer from './common/Footer';
import { Link } from 'react-router-dom';
import Login from './Login';

function Forget() {
  return (
      <div className='pass-reset-form'>
      <label><h2>Reset Your Password</h2></label>
      <label>E-mail / Mob. Number:</label>
      <input type='text' name='email' className='myinput' placeholder='e-mail / mob number'/>
      

      <button className='loginbtn'>Reset</button>
      <p><Link to='/'>Back to Login ?</Link></p>
      
    </div>
  )
}

export default Forget
