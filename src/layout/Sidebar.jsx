import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import Image from '../component/Image'
import Bar from '../assets/sidebar.png'
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
const Sidebar = () => {
  return (
    <div className='bg-[#F5F5F3] py-6'>
        <Container>
            <Flex className='items-center'>
                <div className='w-4/12  '>
                <Flex className='gap-x-[10px] items-center'>
                    <Image src={Bar}/>
                <p className='text-sm text-secondary font-normal font-dm'>Shop by Category</p>
                </Flex>
                
                </div>
                <div className='w-8/12 relative'>
                <input className='bg-white py-4 pl-6 pr-16 w-full placeholder:text-[#C4C4C4]' type="text" placeholder='Search Products....'/>
                <IoSearchSharp className='absolute top-1/2 -translate-y-1/2 right-6'/>
                </div>
                <div className='w-4/12 '>
                <Flex className='justify-end'>
                    <FaUser />
                 <IoMdArrowDropdown className='mr-10 ml-2.5'/>
                 <FaShoppingCart />
                </Flex>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Sidebar