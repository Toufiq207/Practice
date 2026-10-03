import React from 'react'
import Container from '../component/Container'
import Image from '../component/Image'
import ProductOne from '../assets/productOne.png'
import ProductTwo from '../assets/productTwo.png'
import Flex from '../component/Flex'
import Heading from '../component/Heading'
import { FaStar } from 'react-icons/fa'
const Products = () => {
  return (
    <section className='py-[150px]'>
      <Container>
     <Flex className='flex-wrap justify-between gap-y-8'>
    <div className='w-w49'> <Image className='w-full' src={ProductOne}/></div>
    <div className='w-w49'><Image  className='w-full'src={ProductTwo}/></div>
    <div className='w-w49'> <Image className='w-full' src={ProductOne}/></div>
    <div className='w-w49'><Image  className='w-full'src={ProductTwo}/></div>
      
      
     
     
     </Flex>
     <Heading className='pt-12 pb-6' text="Product"/>
     <Flex className='items-center gap-x-6'>
      <ul className='flex gap-x-[2px] '>
        <li className='text-[#FFD881] text-sm'><FaStar/></li>
        <li className='text-[#FFD881] text-sm'><FaStar/></li>
        <li className='text-[#FFD881] text-sm'><FaStar/></li>
        <li className='text-[#FFD881] text-sm'><FaStar/></li>
        <li className='text-[#FFD881] text-sm'><FaStar/></li>
      </ul>
      <p className='text-sm text-primary font-dm font-normal'>1 Review</p>
     </Flex>
     <Flex className='items-center gap-x-[22px] py-6 border-b border-[#F0F0F0] w-w49 '>
<del>      <p className='text-sm text-primary font-normal font-dm'>$88.00</p></del>
      <p className='text-xl text-secondary font-bold font-dm'>$44.00</p>
     </Flex>
     <Flex className='items-center gap-x-[53px] py-8 border-b border-[#F0F0F0] w-w49 '>
<h4 className='text-base text-secondary font-bold font-dm'>COLOR :</h4>
<ul className='flex gap-x-[15px]'>
  <li className='w-[20px] h-[20px] hover:scale-[1.5] duration-500 bg-red-500 rounded-full'></li>
  <li className='w-[20px] h-[20px] hover:scale-[1.5] duration-500 bg-blue-500 rounded-full'></li>
  <li className='w-[20px] h-[20px] hover:scale-[1.5] duration-500 bg-red-500 rounded-full'></li>
  <li className='w-[20px] h-[20px] hover:scale-[1.5] duration-500 bg-green-500 rounded-full'></li>
  <li className='w-[20px] h-[20px] hover:scale-[1.5] duration-500 bg-red-500 rounded-full'></li>
</ul>
     </Flex>
     <Flex className='items-center gap-x-[53px] py-8 border-b border-[#F0F0F0] w-w49 '>
<h4 className='text-base text-secondary font-bold font-dm'>SIZE :</h4>

<select ></select>
     </Flex>
      </Container>
    </section>
  )
}

export default Products