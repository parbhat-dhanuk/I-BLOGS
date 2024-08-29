import React from 'react'
import Form from './Form/Form'
import axios from 'axios'
import { baseUrl } from '../../config'
import { useNavigate } from 'react-router-dom'





const Register = () => {

const navigate=useNavigate()

const handleRegister= async (x)=>{
try {

  const response = await axios.post(`${baseUrl}/register`,x)


   if(response.status===201){
     navigate("/login")

  }
    else{
  alert("Registration failed")
  }
  
    } catch (error) {
  alert(error?.response?.data?.message)
   }

   }




  return (

      <Form type="Register" submit={handleRegister} />

  )
}

export default Register