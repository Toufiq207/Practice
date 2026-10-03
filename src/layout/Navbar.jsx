import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import Logo from '../assets/logo.png'
import NavbarList from '../component/NavbarList'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='py-8'>
        <Container>
            <Flex>
                <div className='w-5/12 '>
                <Link to='/'>  <Image src={Logo}/></Link>
                
                </div>
                <div className='w-7/12 '>

                <ul className='flex gap-x-10'>
                   <Link to='/'> <NavbarList text='Home'/></Link>
                   
                   <Link to='/shop'> <NavbarList text='Shop'/></Link>
                   <Link to='/about'> <NavbarList text='About'/></Link>
                   <Link to='/contact'><NavbarList text='Contacts'/></Link>
                    <Link to='/journal'><NavbarList text='Journal'/></Link>
                    
                </ul>
                
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar