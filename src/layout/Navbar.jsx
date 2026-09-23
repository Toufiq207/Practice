import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import Logo from '../assets/logo.png'
import NavbarList from '../component/NavbarList'
const Navbar = () => {
  return (
    <nav>
        <Container>
            <Flex>
                <div className='w-4/12 '>
                <Image src={Logo}/>
                </div>
                <div className='w-8/12 '>

                <ul>
                    <NavbarList text='Home'/>
                </ul>
                
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar