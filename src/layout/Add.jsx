import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import AddOne from '../assets/add1.jpg'
import AddTwo from '../assets/add2.jpg'
import AddThree from '../assets/add3.jpg'
import Image from '../component/Image'
const Add = () => {
  return (
    <section className='pt-[140px] pb-[128px]'>
        <Container>
        <Flex className='justify-between'>
            <div className='w-[49%]'>
            <Image className='w-full' src={AddOne}/>
            </div>
            <div className='w-[49%]'>
             <Image className='w-full pb-10' src={AddTwo}/>
             <Image className='w-full' src={AddThree}/>
            </div>
        </Flex>
        </Container>
    </section>
  )
}

export default Add