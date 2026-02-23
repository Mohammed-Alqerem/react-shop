import React from 'react'

export default function Item({age,children}) {
  return (
    <>
        <h2>this is item - {age}</h2> 
        {children}
    </>
  )
}
