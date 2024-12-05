import React, { useState } from "react";
import "./Navbar.css";
import LoginForm from "./Loginform";
import SignUpForm from "./Signupform";
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-icon"><GitHubIcon /></div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar-buttons">
          <button onClick={() => setShowLogin(true)}>Login</button>
          <button onClick={() => setShowSignUp(true)}>Sign Up</button>
        </div>
      </nav>
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      {showSignUp && <SignUpForm onClose={() => setShowSignUp(false)} />}
    </>
  );
};

export default Navbar;
