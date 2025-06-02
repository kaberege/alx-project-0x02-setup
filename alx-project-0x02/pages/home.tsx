import React from 'react'
import Card from '@/components/common/Card'

const home = () => {
    return (
        <div className='min-h-screen'>
            <h1 className='text-2xl text-neutral-950 font-bold text-center mt-4'>This is the home page</h1>
            <div className='flex gap-3 flex-wrap mt-2'>
                <Card title='Nice Hotels' content="I like nice hotels where clients are best served." />
                <Card title='Modern recipes' content="I like Chinese customer care services." />
            </div>
        </div>
    )
}

export default home