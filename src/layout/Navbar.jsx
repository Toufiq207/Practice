import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import Logo from '../assets/logo.png'
import NavbarList from '../component/NavbarList'
const Navbar = () => {
  return (
    <nav className='py-8'>
        <Container>
            <Flex>
                <div className='w-5/12 '>
                <Image src={Logo}/>
                </div>
                <div className='w-7/12 '>

                <ul className='flex gap-x-10'>
                    <NavbarList text='Home'/>
                    <NavbarList text='Shop'/>
                    <NavbarList text='About'/>
                    <NavbarList text='Contacts'/>
                    <NavbarList text='Journal'/>
                </ul>
                
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar