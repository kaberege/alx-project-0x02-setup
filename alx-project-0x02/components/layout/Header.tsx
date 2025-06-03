import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <div className='bg-neutral-200 text-xl flex items-center justify-center shadow-sm shadow-neutral-500 mb-4'>
      <Link
        href="/home"
        className='p-2 hover:bg-amber-500 transition-colors'
      >
        Home
      </Link>
      <Link
        href="/about"
        className='p-2 hover:bg-amber-500 transition-colors'
      >
        About
      </Link>
      <Link
        href="/posts"
        className='p-2 hover:bg-amber-500 transition-colors'
      >
        Posts
      </Link>
        <Link
        href="/users"
        className='p-2 hover:bg-amber-500 transition-colors'
      >
        Users
      </Link>
    </div>
  )
}

export default Header