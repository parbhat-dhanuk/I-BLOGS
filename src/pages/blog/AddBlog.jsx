import React from 'react'
import Form from './form/Form'
import { baseUrl } from '../../config'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {

  const navigate=useNavigate()
const handleAddBlog=  async(x)=>{

try {
  

  const response= await axios.post(`${baseUrl}/blog`,x,{
  
    headers:{
      "Content-Type":"multipart/form-data",
      "Authorization" :localStorage.getItem("token")
    }
   
  })
  
  if(response.status===201){
    
    navigate("/")
  }
  else{
    alert("Blog created failed")
  }
} catch (error) {
  alert(error?.response?.data?.message)

}

}

  return (
    <Form type="CREATE" submit={handleAddBlog} />
  )
}

export default AddBlog