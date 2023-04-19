import React from 'react';
import '../styles/header.scss';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../assets/logo.png';
const Header = () => {
  return (
    <nav>
        <HashLink to='/'><img src={Logo} alt="Logo" /></HashLink>
        <main>
            <HashLink to='/#home'>Home</HashLink>
            <HashLink to='/#features'>Features</HashLink>
            <HashLink to='/#details'>Details</HashLink>
            <HashLink to='/#pricing'>Pricing</HashLink>
            <Link to='/login'><span>Log in</span></Link>
        </main>
    </nav>
  )
}

export default Header