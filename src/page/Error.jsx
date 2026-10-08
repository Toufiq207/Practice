import React from 'react'
import Container from '../component/Container'
import Image from '../component/Image'
import ErrorImg from "../assets/404.png"
import { IoSearch } from 'react-icons/io5'
import Button from '../component/Button'
const Error = () => {
  return (
    <section className='pt-40 pb-[140px]'>
      <Container>
        <Image src={ErrorImg}/>
           <p className='text-base text-primary font-normal font-dm  pb-[50px] pt-10  w-[644px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
           <div className='w-[643px] border border-[#F0F0F0] relative'>
            <input className='w-full p-10' type="text"  placeholder='Type to search'/>
            <IoSearch className='absolute top-1/2 right-5 -translate-y-1/2'/>
           </div>
           <Button className="mt-[76px]" text='Back to Home'/>
      </Container>
    </section>
  )
}

export default Error