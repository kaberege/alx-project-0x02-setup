import React from 'react'
import Button from '@/components/common/Button'
import Header from '@/components/layout/Header'

const About:React.FC = () => {
    return (
        <div>
            <Header />
            <h1 className='text-2xl text-teal-600 font-bold text-center'>This is the about page</h1>
            <div className='flex items-center justify-center gap-3 flex-wrap mt-4'>
                <Button size='w-sm' shape="rounded-sm" title="small" />
                <Button size='w-md' shape="rounded-md" title="medium" />
                <Button size='w-lg' shape="rounded-full" title="large" />
            </div>
        </div>
    )
}

export default About

