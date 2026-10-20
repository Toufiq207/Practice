import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import Logo from '../assets/logo.png'
import NavbarList from '../component/NavbarList'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { activebutton } from '../features/breadcum/breadcumSlice'
const Navbar = () => {
const dispatch = useDispatch();

    const  handleClick =(name)=>{
         dispatch(activebutton(name))
    }
  return (
    <nav className='py-8'>
        <Container>
            <Flex>
                <div className='w-5/12 '>
                <Link to='/'>  <Image src={Logo}/></Link>
                
                </div>
                <div className='w-7/12 '>

                <ul className='flex gap-x-10'>
                   <Link onClick={()=>handleClick("Home")} to='/'> <NavbarList text='Home'/></Link>
                   
                   <Link onClick={()=>handleClick("Shop")} to='/shop'> <NavbarList text='Shop'/></Link>
                   <Link onClick={()=>handleClick("About")} to='/about'> <NavbarList text='About'/></Link>
                   <Link onClick={()=>handleClick("Contact")} to='/contact'><NavbarList text='Contacts'/></Link>
                    <Link onClick={()=>handleClick("Journal")} to='/journal'><NavbarList text='Journal'/></Link>
                    
                </ul>
                
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar