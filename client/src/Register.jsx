import React from 'react'
import './login.css'
import Contact from './Contact'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Register = () => {
    // const history = useHistory();
    const navigate=useNavigate()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      // console.log('Form submitted:', { firstName, lastName, email, password });
      
      const form = {
        firstName,
        lastName,
        email,
        password,
      };
    
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
          method: 'POST',
          body: JSON.stringify(form),
        });
    
        if (res.ok) {
          console.log('success');
        } else {
          console.log('Registration failed');
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
      navigate('/HomeApp')
    };
    
      

    return (
      <>
        <div className="logindiv">
          <span className="welcomeText">Welcome to,</span>
          <span className="logintitle">₹CoinTracker</span>
        </div>
        <div className="register" onSubmit={handleSubmit}>
          <span className="welcomeText">Sign Up</span>
          <span className="registername">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="registerinput"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="registerinput"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </span>
          <span>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="registeremailinput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
          <span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="registeremailinput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
          <button type="submit" onClick={(e) => handleSubmit(e)} className="loginbtn">
            Get Started
          </button>
          <Link to="/" className="no-underline">
            <br></br><span className="Alreadyhave">Already have an account? Sign in</span>
          </Link>
          <Link to='/HomeApp' className='no-underline'>
      <br/><span className='Alreadyhave'>To skip this process...Click here for Demo </span>
      </Link>
          <span className="created">©Shafi Shaik</span>
          <Contact />
  
          <div className="notetext">Note: This App is under development. You can access available features</div>
        </div>
      </>
    );
  };
  
  export default Register;
  