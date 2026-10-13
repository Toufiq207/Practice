import React from 'react'
import Banner from '../layout/Banner'
import Add from '../layout/Add'
import Container from '../component/Container'
import Cart from '../component/Cart'
import Heading from '../component/Heading'
import Flex from '../component/Flex'
import ProductOne from '../assets/productOne.png'
import ProductTwo from '../assets/productTwo.png'
import Promosson from "../assets/promosson.png"
import Image from '../component/Image'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Homepage = () => {
  return (
   <>
   <Banner/>
   <Add/>
   <Container>
    <Heading className='pb-10' text='New Arrivals'/>


<Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={24}
  slidesPerView={1}
  navigation
    loop={true}
  pagination={{ clickable: true }}
  breakpoints={{
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }}
  className="new-arrivals-slider"
>
  <SwiperSlide>
    <Cart img={ProductOne} title="Product one" price="20" />
  </SwiperSlide>

  <SwiperSlide>
    <Cart img={ProductTwo} title="Product two" price="30" />
  </SwiperSlide>

  <SwiperSlide>
    <Cart img={ProductOne} title="Product three" price="50" />
  </SwiperSlide>

  <SwiperSlide>
    <Cart img={ProductTwo} title="Product four" price="60" />
  </SwiperSlide>

  <SwiperSlide>
    <Cart img={ProductOne} title="Product five" price="50" />
  </SwiperSlide>

  <SwiperSlide>
    <Cart img={ProductTwo} title="Product six" price="60" />
  </SwiperSlide>
</Swiper>

    <Heading className='pb-10  mt-[118px]' text='Our Bestsellers'/>
    <Flex className="justify-between pb-[130px]">
        <Cart img={ProductOne} title="Product one" price="20"/>
        <Cart img={ProductTwo} title="Product two" price="30"/>
        <Cart img={ProductOne} title="Product three" price="50"/>
        <Cart img={ProductTwo} title="Product four" price="60"/>
    </Flex>
   <Image className='mb-[128px]' src={Promosson}/>
   <Heading className='pb-10' text='Special Offers'/>
    <Flex className="justify-between pb-[130px]">
        <Cart img={ProductOne} title="Product one" price="20"/>
        <Cart img={ProductTwo} title="Product two" price="30"/>
        <Cart img={ProductOne} title="Product three" price="50"/>
        <Cart img={ProductTwo} title="Product four" price="60"/>
    </Flex>
   </Container>
   </>
  )
}

export default Homepage