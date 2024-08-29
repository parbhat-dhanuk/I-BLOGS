import React, { useEffect, useState } from 'react'
import Form from './form/Form'
import { baseUrl } from '../../config'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditBlog = () => {
  
  const {id} = useParams()

const navigate=useNavigate()

  const handleEditBlog= async(x)=>{

    try {
      const response= await axios.patch(`${baseUrl}/blog/${id}`,x,{

        headers:{
          "Content-Type":"multipart/form-data",
          "Authorization" :localStorage.getItem("token")
        }
       })
       console.log(response)
  
       if(response.status===200){
        navigate("/")

       }
       else{
        alert("Something went wrong")
       }
      
    } catch (error) {
      alert(error?.response?.data?.message)
    }
   
  }



   
  return (
   
    <Form  type="EDIT" submit={handleEditBlog}  />
  )
}

export default EditBlog