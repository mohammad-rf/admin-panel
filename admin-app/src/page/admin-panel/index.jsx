import React from 'react'
import Mainlayout from '../../layouts/main-layout'
import Users from '../../components/users-list'
import LogoutButton from '../../components/logout-btn'
import styles from './dashboard.module.css'


export const DashboardWrapper = ({children}) => {
  return (
    <div className={styles["dash-wrapper"]}>
      {children}
    </div>
  )
}


const Dashboard = () => {
  return (
    <>
    <Mainlayout>
    <DashboardWrapper>
        <h3>Dashboard Panel</h3>
        <Users />
        <div style={{borderTop:"1px solid white"}}>
          <LogoutButton />
        </div>
    </DashboardWrapper>
    </Mainlayout>
    </>
  )
}

export default Dashboard