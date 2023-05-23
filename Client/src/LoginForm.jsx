import React, { useState } from 'react';
import './login.css';
import Contact from './Contact';
import { Link, useNavigate } from 'react-router-dom';

  const LoginForm = (props) => {
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
      <span className='welcomeText'>Sign In</span>
      <span><input type="text" name='details' placeholder="Email Address" className='logininput' /></span>
      <span><input type="text" name='details' placeholder="Password" className='logininput' /></span>
      <Link to='/HomeApp' className="no-underline">
      
      <button onClick={handleLogin} className='loginbtn'>Get Started</button>

      </Link>
      <Link to='/Register' className='no-underline'>
      <br/><span className='Alreadyhave'>Don't have an account?Create </span>
      </Link>
      <Link to='/HomeApp' className='no-underline'>
      <br/><span className='Alreadyhave'>To skip this process...Click here for Demo </span>
      </Link>
      <span className="created">©Shafi Shaik</span>
      <Contact/>
      </div>
      <div className='notetext'>Note : This App is under development. You can access availaible features</div>
    </>
  );
};

export default LoginForm;
