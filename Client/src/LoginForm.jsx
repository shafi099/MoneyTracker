import React, { useState } from 'react';
import './login.css';
import Contact from './Contact';
import { Link, useNavigate } from 'react-router-dom';

  const LoginForm = () => {
    const navigate = useNavigate();
    // const [name, setName] = useState(props.name);
  
  
    const handleLogin = async () => {
      // setName(name)
      // console.log(name)
      // try {
      //   const response = await fetch('/api/createUser', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ name }),
      //   });
      //   if (response.ok) {
      //     navigate('/HomeApp');
      //   } else {
      //     console.error('Failed to create user');
      //   }
      // } catch (error) {
      //   console.error('An error occurred', error);
      // }
      navigate('/HomeApp');
    };

  return (
    <>
    <div className="logindiv">
      <span className='welcomeText'>Welcome to,</span>
      <span className='logintitle'>₹CoinTracker</span>
      <span><input type="text" name='details' placeholder="Enter Your Name" className='logininput' /></span>
      <Link to='/HomeApp' className="no-underline">
      
      <button onClick={handleLogin} className='loginbtn'>Get Started</button>
      </Link>
      <span className="created">©Shafi Shaik</span>
      <Contact/>
      </div>
      
    </>
  );
};

export default LoginForm;
