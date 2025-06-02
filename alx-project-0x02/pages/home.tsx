import React, { use, useState } from 'react'
import Card from '@/components/common/Card'
import type { CardProps, PostModalProps } from '@/interfaces'
import PostModal from '@/components/common/PostModal'

const Home = () => {
    const [posts, setPosts] = useState<CardProps[]>([])
    const [isModelOpen, setIsModalOpen] = useState<boolean>(false)

    function handleAddPost(newPost: CardProps) {
        setPosts(prev => ([...prev, newPost]))
    }
    return (
        <div className='min-h-screen'>
            <h1 className='text-2xl text-neutral-950 font-bold text-center mt-4'>This is the home page</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-teal-700 hover:bg-teal-800 transition-colors duration-300 cursor-pointer px-4 py-2 rounded-full text-white"
            >
                Add Post
            </button>
            <div className='flex gap-3 flex-wrap mt-2 container mx-auto'>
                <Card title='Nice Hotels' content="I like nice hotels where clients are best served." />
                <Card title='Modern recipes' content="I like Chinese customer care services." />
                {
                    posts !== null && posts.length > 0 && (posts.map(({ title, content }: CardProps, index: number) => (
                        <Card title={title} content={content} key={index} />
                    )))
                }
            </div>
            {
                isModelOpen && <PostModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />
            }
        </div>
    )
}

export default Home