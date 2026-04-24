import React from 'react'
import Logo from '../../../media/image/svg/Logo-burger-house.svg'
import Icone from '../../../media/image/svg/ico-bag-clickAndCollect.svg'
import Button from './elements/Button'
import Container from './elements/Container'

export default function Header() {
  return (
    <header className='w-full py-10'>
      <Container>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <img src={Logo} alt="Burger House app" className='w-64'/>

          {/* Partie droite */}
          <div className='text-secondary flex items-center gap-6'>

            <div className='flex items-center'>
              <img src={Icone} alt="Click&Collect" className='w-5 h-5 mr-2' />
              <span>Commandez votre repas en ligne</span>
            </div>

            <Button className="bg-primary hover:bg-secondary">
                Inscription
            </Button>

            <Button className="bg-secondary hover:bg-primary">
                Connexion
            </Button>

          </div>

        </div>
      </Container>
    </header>
  )
}
