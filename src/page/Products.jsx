import React from 'react'
import Container from '../component/Container'
import Image from '../component/Image'
import ProductOne from '../assets/productOne.png'
import ProductTwo from '../assets/productTwo.png'
import Flex from '../component/Flex'
import Heading from '../component/Heading'
import { FaStar } from 'react-icons/fa'
import Button from '../component/Button'
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
     <Flex className='items-center gap-x-[80px] py-8 border-b border-[#F0F0F0] w-w49 '>
<h4 className='text-base text-secondary font-bold font-dm'>SIZE :</h4>

<select className='py-2 px-12 border border-[#F0F0F0]'>
  <option value="">S</option>
  <option value="">M</option>
  <option value="">L</option>
  <option value="">XL</option>
</select>
     </Flex>
     <Flex className='items-center gap-x-[37px] py-8 border-b border-[#F0F0F0] w-w49 '>
<h4 className='text-base text-secondary font-bold font-dm'>QUANTITY :</h4>


<div  className='py-2 px-8 border border-[#F0F0F0] flex gap-x-5'>
  <span>+</span>
  <span>1</span>
  <span>-</span>
</div>
     </Flex>
     <Flex className='items-center gap-x-[37px] py-8 border-b border-[#F0F0F0] w-w49 '>
<h4 className='text-base text-secondary font-bold font-dm'>STATUS:</h4>

  <p className='text-sm text-primary font-normal font-dm'>In stock</p>
{/* <div  className='py-2 px-8 border border-[#F0F0F0] flex gap-x-5'>
  <span>+</span>
  <span>1</span>
  <span>-</span>
</div> */}
     </Flex>
     <Flex className='items-center gap-x-[20px] py-8 border-b border-[#F0F0F0] w-w49 '>
       <Button text="Add to Wish List"/>
     <Button text="Add to Cart"/>
     </Flex>
     <Flex className='items-center justify-between py-8 border-b border-[#F0F0F0] w-w49 '>
    <h4 className='text-base text-secondary font-bold font-dm'>FEATURES & DETAILS</h4>
<p>+</p>
     </Flex>
     <Flex className='items-center justify-between py-8 border-b border-[#F0F0F0] w-w49 '>
    <h4 className='text-base text-secondary font-bold font-dm'>SHIPPING & RETURNS</h4>
<p>+</p>
     </Flex>
     <div className='py-8 w-w49'>
      <p className='text-base text-primary font-normal font-dm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</p>
     </div>
      <Flex className='items-center gap-x-[62px] '>
     <p className='text-xl text-primary font-normal font-dm'>Description</p>
      <p className='text-xl text-secondary font-bold font-dm'>Reviews (1)</p>
     </Flex>
     <p className='text-base text-primary font-normal font-dm py-6 border-b border-[#F0F0F0] w-full'>1 review for Product</p>
      <Flex className='justify-between items-center'>
        <Flex className='items-center gap-x-[37px] py-6'>
              <p className='text-base text-primary font-dm font-normal'>John Ford</p>
      <ul className='flex gap-x-[2px] '>
        <li className='text-[#FFD881] text-sm'><FaStar/></li>
        <li className='text-[#FFD881] text-sm'><FaStar/></li>
        <li className='text-[#FFD881] text-sm'><FaStar/></li>
        <li className='text-[#FFD881] text-sm'><FaStar/></li>
        <li className='text-[#FFD881] text-sm'><FaStar/></li>
      </ul>
      
     </Flex>
     <p>6 months ago</p>
      </Flex>
         <p className='text-base text-primary font-normal font-dm'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

</p>

     <p className='text-xl text-secondary font-bold font-dm py-12'>Add a Review</p>
     <label className='text-base text-secondary font-dm font-bold' htmlFor="name">Name <br />
      <input className='py-6 mb-6   border-b border-[#F0F0F0] w-w49' id='name' type="text" placeholder='Your name here'/>
     </label>
     <br />
     <label className='text-base text-secondary font-dm font-bold' htmlFor="email">Email <br />
      <input className='py-6 mb-6   border-b border-[#F0F0F0] w-w49' id='email' type="email" placeholder='Your email here'/>
     </label>
     <br />
     <label className='text-base text-secondary font-dm font-bold' htmlFor="review">Review <br />
      <textarea className='py-6 mb-6   border-b border-[#F0F0F0] w-w49' id='review' type="text" placeholder='Your review here'/>
     </label>
<br />
     <Button text='Post'/>
      </Container>
    </section>
  )
}

export default Products