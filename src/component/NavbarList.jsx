import React from 'react'

const NavbarList = ({text,className}) => {
  return (
                    <li className={`text-sm text-[#767676] font-normal font-dm list-none ${className}`}>{text}</li>
  )
}

export default NavbarList