import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <NavLink to='login'>Home</NavLink>
        <NavLink to='signup'>SignUp</NavLink>
    </div>
  )
}
