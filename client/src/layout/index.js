import React from 'react'
import logo from '../assets/logo.png'

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className='flex  py-3 h-20 shadow-md bg-white'>
            <img 
              src={logo}
              alt='logo'
              width={180}
              height={10}
            />
        </header>

        { children }
    </>
  )
}

export default AuthLayouts
