import React from 'react'
import Logo from '../../../media/image/svg/Logo-burger-house.svg'
import Icone from '../../../media/image/svg/ico-bag-clickAndCollect.svg'
import Button from './elements/Button'

export default function Header() {
  return (
    <div className='flex items-center justify-between py-10'>
        <div className='h-20 w-full py-2 px-8 '>
            <img src={Logo} alt="Burger House app" className='w-64'/>
        </div>

        <div className='w-full text-secondary flex items-center justify-end pr-8'>
            <div>
                <img src={Icone} alt="Click&Connect" className='w-5 h-5 mr-2 ' />
                <span>Commandez votre repas en ligne</span>
            </div>

            <div>
                <Button />
            </div>

        </div>

    </div>
  )
}
