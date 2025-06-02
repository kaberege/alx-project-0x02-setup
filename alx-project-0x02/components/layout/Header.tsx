import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-neutral-400 text-xl flex items-center justify-center'>
      <Link
        href="/home"
        className='p-2 bg-amber-300 hover:bg-amber-500 transition-colors'
      >Home</Link>
      <Link
        href="/about">
        className='p-2 bg-amber-300 hover:bg-amber-500 transition-colors'
        About
      </Link>
    </div>
  )
}

export default Header