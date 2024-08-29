import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = ({type,submit, }) => {

    const navigate=useNavigate()

    const [blog ,setBlog]=useState({
        title:"",
        subtitle:"",
        description:"",
        category:"",
        image:""
      })

      const handleChange=(e)=>{
        const{name,value}=e.target
         
      setBlog({
          ...blog,
          [name]:name==="image"?e.target.files[0]:value
      })
       
      }

      const handleSubmit=(e)=>{
        
        e.preventDefault()
       
         submit(blog)
         

      }

     

    


  return (
    <div className="bg-green-500  border-4 rounded-lg shadow relative m-10">

    <div className=" flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">
           <b> {type} BLOG: </b>
           What's new in your mind?
           
        </h3>
        
        <button type="button" className="text-gray-400 bg-transparent hover:bg-red-600 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>

    <form onSubmit={handleSubmit}>

    <div className="p-6 space-y-6">
       
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="title" className="text-sm font-medium text-gray-900 block mb-2">Title</label>
                    <input onChange={handleChange} required type="text" name="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Web development..." />
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="subtitle" className="text-sm font-medium text-gray-900 block mb-2">Subtitle</label>
                    <input onChange={handleChange} required type="text" name="subtitle" id="subtitle" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Frontend technology..."/>
                </div>
               
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Category</label>
                    <input onChange={handleChange} required type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="1,2,3..." />
                </div>

                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="file" className="text-sm font-medium text-gray-900 block mb-2">File</label>
                    <input onChange={handleChange}  type="file" name="image" id="file" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="1,2,3..." />
                </div>
                <div className="col-span-full">
                    <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                    <textarea onChange={handleChange} name='description' required id="description" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Roadmap for frontend development....."></textarea>
                </div>
            </div>
             </div>

        <div className="flex">

     
      <div className="p-6 border-t border-gray-200 rounded-b">
        <button  className="text-white bg-blue-500 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">POST</button>
    </div>
     
 
    <div onClick={()=>navigate("/")} className=" absolute p-6 border-t border-gray-200 rounded-b buttom-0 right-0">
        <button className="text-white bg-blue-500 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">BACK</button>
    </div>

        
        </div>
        
        
        </form>
   

    <div className="flex">

   

   

    </div>

</div>
  )
}

export default Form