import React, { useEffect, useState } from "react"
import UserForm from './form';
import Mainlayout from '../../layouts/main-layout'
import {DashboardWrapper} from '../../page/admin-panel'
import api from '../../api/api';
import { useNavigate, useParams } from "react-router-dom"

const EditUser = () => {
    const {id} = useParams()    
    const navigate = useNavigate()
    const [findedUser, setFindedUser] = useState({})

    const updateUser = (user) => {
        api
          .put(`/users/${id}`, user)
          .then((res) => {
            console.log(res.data)
            navigate(-1)
          })
          .catch((err) => console.log(err))
      }
      useEffect(() => {
        api
          .get(`users/${id}`)
          .then((res) => {
            console.log(res.data)
            setFindedUser(res.data.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }, [id])
  return (
    <Mainlayout>
      <DashboardWrapper>
        <UserForm user={findedUser} onSave={updateUser}  />
      </DashboardWrapper>
    </Mainlayout>
  )
}

export default EditUser