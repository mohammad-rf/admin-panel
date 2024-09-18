import React from 'react'
import styles from './main.module.css'

const Mainlayout = ({children}) => {
  return (
    <>
        <div className={styles['container']}>
            {children}
        </div>

    </>
  )
}

export default Mainlayout