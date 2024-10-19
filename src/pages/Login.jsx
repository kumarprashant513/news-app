import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'
import Forget from './Forget'

function Login() {
  return (
      <div>
        <>
      <div className='login-form'>
      <label><h2>Login Here</h2></label>
      <label>E-mail / Mob. Number:</label>
      <input type='text' name='email' className='myinput' placeholder='E-mail'/>
      <label>Password:</label>
      <input type='password' name='password' className='myinput' placeholder='Password'/>
      <i class="fa-regular fa-eye" id='pass-eye'></i>
      

      <button className='loginbtn'>Login</button>
      <p><Link to='forget'>Forget Password ?</Link></p>
      <p><Link to='Register'>Need an account ! Signup</Link></p>
      
    </div>
      </>
      </div>
  )
}

export default Login
