import React from "react";
import "../styles/signup.scss";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <h1>Sign up</h1>
        
      </div>
      <div className="form-container">
        <form>
            <span>Fill out the form to sign up. Already signed up? Then just <Link to='/login'>Log In</Link></span>
            <input type="email" placeholder="Email" required/>
            <input type="text" placeholder="Name" required/>
            <input type="password" placeholder="Password" required/>
            <button type="submit">Sign up</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
