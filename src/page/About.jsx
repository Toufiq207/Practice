import React from 'react'
import Container from '../component/Container'
import Flex from "../component/Flex"
import Image from "../component/Image"
import ProductOne from "../assets/productOne.png"
import ProductTwo from "../assets/productTwo.png"
import Button from '../component/Button'
import AboutCart from '../component/AboutCart'
import Heading from '../component/Heading'
const About = () => {
  return (
    <section className='py-[140px]'>
      <Container>
        <Heading text='About'/>
        <Flex className='justify-between py-[128px]'>
          <div className='w-w49 relative'>
            <Image className='w-full' src={ProductOne}/>
            <Button className='absolute bottom-5 left-1/2 -translate-x-1/2' text="Our Brands"/>
          </div>
          <div className='w-w49 relative'>
            <Image className='w-full' src={ProductTwo}/>
<Button className='absolute bottom-5 left-1/2 -translate-x-1/2' text="Our Stores"/>
          </div>
        </Flex>
        <p className='text-f39 text-secondary font-dm font-normal'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
 
<Flex className='justify-between mt-[128px]'>       
  <AboutCart text='Our Vision'  para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
/>
  <AboutCart text='Our Story'    para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
/>
  <AboutCart text='Our Brands'    para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley."
/>

</Flex>
      </Container>
    </section>
  )
}

export default About