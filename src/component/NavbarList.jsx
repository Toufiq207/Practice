import React from 'react'

const NavbarList = ({text,className}) => {
  return (
                    <li className={`text-sm text-primary hover:text-secondary font-normal hover:font-bold font-dm list-none duration-500 cursor-pointer ${className}`}>{text}</li>
  )
}

export default NavbarList