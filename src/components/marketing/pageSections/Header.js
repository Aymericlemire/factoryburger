import React from 'react'
import Logo from '../../../media/image/svg/Logo-burger-house.svg'
import Icone from '../../../media/image/svg/ico-bag-clickAndCollect.svg'
import Button from './elements/Button'

export default function Header() {
  return (
    <div className='flex items-center justify-between py-10'>
      {/* Partie gauche : Logo */}
      <div className="w-full">
        <img src={Logo} alt="Burger House App" className='w-64' />
      </div>

      {/* Partie droite */}
      <div className='w-full text-secondary'>
        
        {/* Ligne 1 : icône + texte */}
        <div className='flex items-center justify-end'>
          <img src={Icone} alt="Click&Collect" className='w-5 h-5 mr-2' />
          <span>Commandez votre repas en ligne</span>
        </div>

        {/* Ligne 2 : boutons */}
        <div className='flex items-center justify-end gap-4 mt-3'>
          <Button className="bg-primary hover:bg-secondary">
            Inscription
          </Button>
          <Button className="bg-secondary hover:bg-primary">
            Connexion
          </Button>
        </div>

      </div>
    </div>
  )
}
