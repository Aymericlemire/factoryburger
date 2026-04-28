import React from 'react'
import Illustration from '../../../media/image/background/bg-food.jpg'
import Container from './elements/Container'
import Header from './Header'
import Product from '../../../media/image/heroTop/burger-hero-top.png'

export default function HeroTop() {
  return (
    <div className='bg-primary w-full h-screen'>
      <Container>
        <Header/>
        <div className='bg-gray-500 w-full flex items-center'>
          <div className= 'bg-red-500 text-secondary text-xl w-2/3'>
            <h1 className='uppercase '>C'est le moment de goûter des hamburgers</h1>
            <h2 className='font-secondary'><span className='text-9xl'>Burger</span> House Click&Collect</h2>
          </div>
          
          <div className= ' w-1/3' >
            <img src={Product} alt='un menu hamburger avec frites et coca cola'/>
          </div>
        </div>
      </Container>
    </div>
  )
}
