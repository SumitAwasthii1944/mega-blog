import React from 'react'
import appwriteService from "../appwrite/config_service"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='flex flex-col justify-between w-full h-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full h-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl w-full h-full' />
            </div>
            <h2
            className='md:text-xl text-[10px] font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard