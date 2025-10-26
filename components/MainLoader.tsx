import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.png'

const MainLoader = () => {
  return (
    <div className='bg-gray-900 h-screen flex items-center justify-center'>
      <Image width={200} height={200} src={logo} alt='Logo'/>
    </div>
  )
}

export default MainLoader
