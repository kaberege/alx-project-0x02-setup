import React from 'react'
import { type CardProps } from '@/interfaces'

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div
            className='w-full max-w-sm bg-stone-200 rounded-2xl mx-auto flex flex-col gap-4 items-center justify-center 
        hover:scale-105 cursor-pointer transition-transform h-60 shadow-md shadow-stone-600'>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Card