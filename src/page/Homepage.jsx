import React from 'react'
import Banner from '../layout/Banner'
import Add from '../layout/Add'
import Container from '../component/Container'
import Cart from '../component/Cart'

const Homepage = () => {
  return (
   <>
   <Banner/>
   <Add/>
   <Container>
    <Cart/>
   </Container>
   </>
  )
}

export default Homepage