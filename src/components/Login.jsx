import React from 'react'
import '../styles/login.scss';
import Footer from "./Footer";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
    <div className="login-container">
      <h1>Log In</h1>
      
    </div>
    <div className="form-container">
      <form>
          <span>Fill out the form to sign up. Already signed up? Then just <Link to='/signup'>Sign up</Link></span>
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required/>
          <button type="submit">Log in</button>
      </form>
    </div>
    <Footer />
  </>
  )
}

export default Login