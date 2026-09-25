import React from 'react'
import Container from '../component/Container'
import Image from '../component/Image'
import BannerOne from '../assets/banner1.jpg'
import Flex from '../component/Flex'
import Two from '../assets/two.png'
import Car from '../assets/car.png'
import Refresh from '../assets/refresh.png'
const Banner = () => {
  return (
    <section className='border-b border-[#F0F0F0]'>
      <Image className='w-full' src={BannerOne}/>
        <Container>

<Flex className='justify-between py-[30px]'>

  <Flex className='items-center gap-x-4'>
  <Image src={Two}/>
  <p className='text-base text-[#6D6D6D] font-normal font-dm'>Two years warranty</p>
</Flex>
<Flex className='items-center gap-x-4'>
  <Image src={Car}/>
  <p className='text-base text-[#6D6D6D] font-normal font-dm'>Free shipping</p>
</Flex>
<Flex className='items-center gap-x-4'>
  <Image src={Refresh}/>
  <p className='text-base text-[#6D6D6D] font-normal font-dm'>Return policy in 30 days</p>
</Flex>
</Flex>

        </Container>
    </section>
  )
}

export default Banner