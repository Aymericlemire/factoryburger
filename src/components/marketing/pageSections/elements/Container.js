import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w-6xl w-full h-full m-auto'>
        {children}
    </div>
  )
}
