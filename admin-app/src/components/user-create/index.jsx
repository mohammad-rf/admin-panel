import React from 'react'
import UserForm from './form';
import Mainlayout from '../../layouts/main-layout'
import {DashboardWrapper} from '../../page/admin-panel'
import api from '../../api/api';
import { useNavigate } from "react-router-dom"

const CreateUser = () => {

  const navigate = useNavigate()
  const newUser = { name: "", job: "" }
  const addNewUser = (user) => {
    api
      .post(`/users`, user)
      .then((res) => {
        console.log(res.data)
        navigate(-1)
      })
      .catch((err) => console.log(err))
  }

  return (
    <Mainlayout>
      <DashboardWrapper>
        <h3>Add New User</h3>
        <UserForm user={newUser} onSave={addNewUser} />
      </DashboardWrapper>
    </Mainlayout>
  )
}

export default CreateUser