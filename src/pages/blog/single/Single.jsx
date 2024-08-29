import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  Link, useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../../../config'

const Single = () => {

   const {id} = useParams()


   const navigate=useNavigate()

   const deleteBlog = async()=>{

     
       const response = await axios.delete(`${baseUrl}/blog/${id}`,{
           headers:{
               "Authorization":localStorage.getItem("token")
           }
       })
      
       
      if(response.status===200){
         navigate("/")
      }
      else{
         alert("Something went wrong.try again")
      }
       
     }
   
     
   const [blog ,setBlog]=useState({})

   const fetchBlog= async()=>{
   const response=  await axios.get(`${baseUrl}/blog/${id}`)
   if(response.status===200){
      setBlog(response.data.data)
   }
   }
   


   useEffect(()=>{
   fetchBlog()
   },[])
  

 


  
   
  return (
   
<div className=" md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64 ">
   <img className="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" src={blog?.imageUrl} alt="bag"/>
   <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
      <div className="flex items-center">
         <h2 className="text-xl text-gray-800 font-medium mr-auto"> {blog?.title} </h2>
         
         <p className="text-gray-800 font-semibold tracking-tighter mr-auto">
         Category: {blog?.category}   
         </p>

         <p className="text-gray-800 font-semibold tracking-tighter ">
         Author: {blog?.userId?.username}   
         </p>
      </div>
      <p className="text-sm text-gray-700 mt-4">

        {blog?.subtitle}
      </p>

      <p className="text-sm text-gray-700 mt-8">

{blog?.description}
</p>
     


      <div className="flex items-center justify-end mt-4 top-auto">

        <Link to={`/edit/${id}`}>   <button className=" bg-blue-600 text-gray-200 px-4 py-2 rounded mr-auto hover:underline">Edit</button>  </Link>
         
         
         <button onClick={deleteBlog} className="bg-red-600 text-gray-200 px-4 py-2 rounded mr-auto hover:underline">Delete</button>


        
      </div>
   </div>
</div>
 
  )
}

export default Single