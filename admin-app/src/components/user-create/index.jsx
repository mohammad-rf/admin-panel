import React from 'react'
import styles from "./creat-user.module.css";
import UserForm from '../user-form';
import Mainlayout from '../../layouts/main-layout'
import {DashboardWrapper} from '../../page/admin-panel'

const CreateUser = () => {
  return (
    <Mainlayout>
      <DashboardWrapper>
        <div className={styles['creat-user-wrapper']}>
            <UserForm />
            <button>create new user</button>
        </div>
      </DashboardWrapper>
    </Mainlayout>
  )
}

export default CreateUser