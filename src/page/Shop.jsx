import React, { useState } from 'react'
import Container from '../component/Container'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'


const Shop = () => {
 const dispatch=useDispatch()
 const data= useSelector((state)=>state.
counter.value
 )
  const handleIncrement=()=>{
    // console.log("hi");
  dispatch(increment(1))
    
  }
  const handleDecrement=()=>{
    // console.log("hi");
  dispatch(decrement(1))
    
  }
  return (
    <section>
      <Container>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <h1>{data}</h1>
      </Container>
    </section>
  )
}

export default Shop