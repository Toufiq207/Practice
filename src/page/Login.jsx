import React from 'react'
import Container from '../component/Container'
import Heading from '../component/Heading'
import Flex from '../component/Flex'
import Button from '../component/Button'

const Login = () => {
  return (
    <section className='pt-[128px] pb-[140px]'>
      <Container>
        <Heading text='Login'/>
  <p>Home > Login</p>
  <p className='text-base text-primary font-normal font-dm border-b border-[#F0F0F0] pb-[60px] pt-[128px] w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
   <h2 className='text-[39px] text-secondary font-bold font-dm pb-10'>Returning Customer</h2>

    <Flex className='gap-x-[39px]'>
      <label className='text-base text-secondary font-dm font-bold' htmlFor="email">Email address<br />
      <input className='py-4 mb-6   border-b border-[#F0F0F0] w-[508px]' id='email' type="email" placeholder='company@domain.com'/>
     </label>
     <br />
    <label className='text-base text-secondary font-dm font-bold' htmlFor="password">Password<br />
      <input className='py-4 mb-6   border-b border-[#F0F0F0] w-[508px]' id='password' type="password" placeholder='......'/>
     </label>
    </Flex>
  <div className='border-b border-[#F0F0F0] pb-[70px] pt-2'>
      <Button text='Log in'/>
  </div>
   <h2 className='text-[39px] text-secondary font-bold font-dm pb-10 pt-[58px]'>New Customer</h2>

   <p className='text-base text-primary font-normal font-dm  pb-[50px]  w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
     <Button text='Continue'/>
      </Container>
    </section>
  )
}

export default Login