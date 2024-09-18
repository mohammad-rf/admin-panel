import React, { useEffect, useState } from 'react'
import styles from './login.module.css'
import api from '../../api/api'
import Mainlayout from '../../layouts/main-layout'
import { initUser } from '../../constants/constans'
import { useNavigate } from 'react-router-dom';


const Login = () => {
 const [userInput, setUserInput] = useState(initUser)
 const navigate = useNavigate();

 useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    navigate('/dashboard')
  }
 },[navigate])
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const response = await api.post('/login', {
        email: userInput.email,
        password: userInput.password,
      })
      const token = response.data.token;
      if(token){
        console.log(token);
        localStorage.setItem('token', token);
        navigate('/dashboard');
      } else {
        console.error('Login failed: No token received');
      }
      
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
  
  const handleChange = (e) => {
    setUserInput({...userInput, [e.target.name]: e.target.value })    
  }

  return (
    <>
        <Mainlayout>
        <form onSubmit={handleLogin}  className={styles['login-form']} action="">
          <h3>Login</h3>
          <label htmlFor="">Id :</label>
          <input onChange={handleChange} name='email' type="email"  />
          <label htmlFor="">Pass :</label>
          <input onChange={handleChange} name='password' type="password" />
          <button type='submit'>login </button>
        </form> 
          </Mainlayout>   
    </>
  )
}

export default Login