import React from 'react'
import Header from '@/components/layout/Header'
import UserCard from '@/components/common/UserCard'
import { type UserProps } from '@/interfaces'

const Users: React.FC = ({ users }: any) => {
    return (
        <div>
            <Header />
            <h1 className='text-3xl font-bold text-center mb-5'>List of available posts</h1>
            <div className='container flex justify-between gap-3 flex-wrap mx-auto'>
                {users?.map(({ id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
                    <UserCard
                        id={id}
                        name={name}
                        username={username}
                        email={email}
                        address={address}
                        phone={phone}
                        website={website}
                        company={company}
                        key={key}
                    />
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    console.log("start")
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("response")
    console.log(response)
    const users = await response.json();
    console.log(users)
    return {
        props: {
            users
        }
    }
}

export default Users