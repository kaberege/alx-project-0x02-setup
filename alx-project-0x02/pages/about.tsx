import React from 'react'
import Button from '@/components/common/Button'

const About = () => {
    return (
        <div>
            <h1 className='text-2xl text-teal-600 font-bold text-center'>This is the about page</h1>
            <div className='flex items-center justify-center gap-3 flex-wrap mt-4'>
                <Button size='w-sm' shape="rounded-sm" title="Small" />
                <Button size='w-md' shape="rounded-md" title="Medium" />
                <Button size='w-lg' shape="rounded-full" title="Large" />
            </div>
        </div>
    )
}

export default About