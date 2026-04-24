import React from 'react'

export default function Button({children, className = ''}) {
  return (
    <div>
      <button className={`px-4 py-3 uppercase rounded-xl shadow-x1 text-white tracking-widest text-sm font-medium animate ${className}` }>
        {children}
      </button>
    </div>
  )
}
