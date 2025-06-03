import React from 'react'
import { type PostProps } from '@/interfaces'

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
    return (
        <div
            className=' flex flex-col items-center justify-center rounded-lg w-full max-w-xs bg-zinc-200 cursor-pointer 
            hover:scale-105 transition-all p-3 mx-auto'>
            <h2 className='text-2xl font-bold'>{userId}</h2>
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p className='text-base'>{content}</p>
        </div>
    )
}

export default PostCard