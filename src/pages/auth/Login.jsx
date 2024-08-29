import React from 'react'
import Form from './Form/Form'
import axios from 'axios'
import { baseUrl } from '../../config'
import { useNavigate } from 'react-router-dom'



const Login = () => {

  const navigate=useNavigate()

  const handleLogin= async (y)=>{

    try {

      const response= await axios.post(`${baseUrl}/login`,y)

      if(response.status===200){

        localStorage.setItem("token",response.data.token)
        
        navigate("/")
       
        
      }
      else{
        alert("Login failed")
      }
     
      
    } catch (error) {
      alert(error?.response?.data?.message)
    }
  
  }

  return (
  
      <Form type="Login" submit={handleLogin} />
    
  )
}

export default Login