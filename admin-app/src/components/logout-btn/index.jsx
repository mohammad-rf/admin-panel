import React from 'react'
import { useNavigate } from "react-router-dom";
import styles from './logout-btn.module.css'

const LogoutButton = () => {
    const  navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

  return (
    <>
    <button className={styles['logout-btn']} onClick={handleLogout}>Logout</button>
    </>
  )
}

export default LogoutButton