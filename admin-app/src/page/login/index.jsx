import React, { useState } from 'react'
import styles from './login.module.css'
import api from '../../api/api'
import Mainlayout from '../../layouts/main-layout'
import { initUser } from '../../constants/constans'

const Login = () => {
 const [userInput, setUserInput] = useState(initUser)
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const response = await api.post('/login', {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })
      .then(response => {
        console.log(response.data);
      })
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
  
  const handleChange = (e) => {
    console.log(e.target.value);
    
  }

  return (
    <>
        <Mainlayout>
        <form onSubmit={handleLogin}  className={styles['login-form']} action="">
          <h3>Login</h3>
          <label htmlFor="">Id :</label>
          <input onChange={handleChange} type="email" />
          <label htmlFor="">Pass :</label>
          <input onChange={handleChange} type="password" />
          <button type='submit'>login </button>
        </form> 
          </Mainlayout>   
    </>
  )
}

export default Login