import React from 'react'
import Header from '@/components/layout/Header'
import { type PostProps } from '@/interfaces'
import PostCard from '@/components/common/PostCard'

const Posts: React.FC = ({ posts }: any) => {
    console.log(posts)
    return (
        <div>
            <Header />
            <h1 className='text-3xl font-bold text-center mb-5'>List of available posts</h1>
            <div className='container flex justify-between gap-3 flex-wrap mx-auto'>
                {posts?.map((post: any, index: number) => (
                    <PostCard userId={post.id} title={post.title} content={post.body} key={index} />
                ))}
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return {
        props: {
            posts
        }
    }
}

export default Posts