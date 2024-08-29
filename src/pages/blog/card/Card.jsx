import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
 
  return (
   <Link to={`/blog/${data._id}`}>



<div className="max-w-sm  rounded overflow-hidden shadow-lg">
  <img className="w-full" src= {data.imageUrl}  />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">      {data.title}      </div>
    <div className=" text-xl mb-2">      {data.subtitle}      </div>
    <p className="text-gray-700 text-base">
      
      {data.description}

    </p>

  </div>
  <div className="px-4 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{data.category}</span>
    
  </div>
</div>

   </Link>


  )
}

export default Card