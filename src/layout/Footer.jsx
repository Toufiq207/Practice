import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import NavbarList from '../component/NavbarList'
import Image from '../component/Image'
import Logo from '../assets/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='bg-[#F5F5F3] py-[55px]'>
        <Container>
            <Flex>
                <div className='w-1/8 '>
                <h6 className='text-base text-secondary font-dm font-bold pb-4'>MENU</h6>
                  <ul className='flex flex-col gap-y-[6px]'>
                    <NavbarList text='Home'/>
                    <NavbarList text='Shop'/>
                    <NavbarList text='About'/>
                    <NavbarList text='Contacts'/>
                    <NavbarList text='Journal'/>
                </ul>
                </div>
                <div className='w-1/8 '>
                <h6 className='text-base text-secondary font-dm font-bold pb-4'>SHOP</h6>
                  <ul className='flex flex-col gap-y-[6px]'>
                    <NavbarList text='Category 1'/>
                    <NavbarList text='Category 2'/>
                    <NavbarList text='Category 3'/>
                    <NavbarList text='Category 4'/>
                    <NavbarList text='Category 5'/>
                </ul>
                </div>
                <div className='w-1/8 '>
                <h6 className='text-base text-secondary font-dm font-bold pb-4'>HELP</h6>
                  <ul className='flex flex-col gap-y-[6px]'>
                    <NavbarList text='Privacy Policy'/>
                    <NavbarList text='Terms & Conditions'/>
                    <NavbarList text='Special E-shop'/>
                    <NavbarList text='Shipping'/>
                    <NavbarList text='Secure Payments'/>
                </ul>
                </div>
               
               
                <div className='w-2/8 h'>
                <h6 className='text-base text-secondary font-dm font-bold pb-4'>(052) 611-5711</h6>
                <h6 className='text-base text-secondary font-dm font-bold pb-4'>company@domain.com</h6>
                  <ul className='flex flex-col gap-y-[6px]'>
                    <NavbarList text='575 Crescent Ave. Quakertown, PA 18951'/>
                  
                  
                </ul>
                </div>
                <div className='w-3/8 '>
                <Image  src={Logo}/>
                </div>
            </Flex>
            <Flex className='justify-between py-16'>
                <Flex className='gap-x-6'>
                    <FaFacebookF/>
                    {/* <FaLinkedinF/> */}
                    <FaLinkedinIn />
                    <FaInstagram />

                </Flex >
                <div>
                    <p className='text-sm text-primary  font-normal  font-dm  cursor-pointer'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>

            </Flex>
        </Container>
    </footer>
  )
}

export default Footer