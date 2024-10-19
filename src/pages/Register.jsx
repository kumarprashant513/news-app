import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Forget from './Forget'


function Register() {
  return (
      <>
      <div className='reg-form'>
      <label><h2>Register Here</h2></label>
      <label>Name:</label>
      <input type='text' name='name' className='myinput' placeholder='Your Name'/>
      <label>E-mail:</label>
      <input type='email' name='email' className='myinput' placeholder='E-mail'/>
      <label>Mob no.:</label>
      <input type='number' name='mob' className='myinput' placeholder='Mob no.'/>
      <label>Password:</label>
      <input type='password' name='password' className='myinput' placeholder='Password'/>
      <i class="fa-regular fa-eye" id='pass-eye'></i>
      <label>Confirm Password:</label>
      <input type='password' name='conf-password' className='myinput' placeholder='Confirm Password'/>
      <i class="fa-regular fa-eye" id='confpass-eye'></i>

      <button className='regbtn'>Register</button>
      <p><Link to='forget'>Forget Password ?</Link></p>
      <p><Link to='/'>Already have an account! Login</Link></p>
    </div>
      </>
  )
}

export default Register
