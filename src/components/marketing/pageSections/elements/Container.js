import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w-7xl w-full h-full m-auto'>
        {children}
    </div>
  )
}
