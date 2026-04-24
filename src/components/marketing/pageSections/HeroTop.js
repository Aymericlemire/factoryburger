import React from 'react'
import Illustration from '../../../media/image/background/bg-food.jpg'
import Container from './elements/Container'
import Header from './Header'

export default function HeroTop() {
  return (
    <div className='bg-primary w-full h-screen'>
      <Container>
        <Header/>
        <div className='bg-gray-500 w-full flex items-center h-72'>
          <div className= 'bg-red-500 w-full h-full'></div>
          <div className= 'bg-green-500 w-full h-full' ></div>
        </div>
      </Container>
    </div>
  )
}
