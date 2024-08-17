import React from 'react'
import { Link } from 'react-router-dom'
import { Television } from 'phosphor-react'

export const Navbar = () => {
  return (
    <div className='navbar'> 
        <div className='links'>
            <Link to={"/"}> Home </Link>
            <Link to={"/cart"}> 
              <Television size={35} />
            </Link>
        </div>
    </div>
  )
}
