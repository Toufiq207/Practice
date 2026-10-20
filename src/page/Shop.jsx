import React, { useState } from 'react'
import Container from '../component/Container'
import Heading from '../component/Heading'

import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Shop = () => {

        const data = useSelector((state) => state.bread.prvevalue)
        // const data2 = useSelector((state) => state.bread.daybefore)
  return (
    <section>
      <Container>
        
        <Heading text="Shop"/>
        <p><Link to={data=="home" ? "/":`/${data}`}>{data} </Link>  >  Shop</p>
      </Container>
    </section>
  )
}

export default Shop