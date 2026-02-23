import React from 'react'

export default function FooterBottom({data,children}) {
  return (
    <div>
        <h2>{data}</h2>
        {children}
      
    </div>
  )
}
