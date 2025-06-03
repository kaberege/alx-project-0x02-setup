import React from 'react'
import { type ButtonProps } from '@/interfaces'

const Button: React.FC<ButtonProps> = ({ size, shape, title }) => {
    return (
        <button
            type="button"
            className={`${size} ${shape} bg-teal-600 hover:bg-teal-400 py-1 px-2 shadow-sm
           shadow-teal-500 focus:ring-2 focus: ring-blue-700 cursor-pointer transition-colors`
            }
        >
            {title}
        </button>
    )
}

export default Button