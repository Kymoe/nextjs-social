'use client';
import React from 'react'

export default function Error({error,reset}) {
  return (
    <div>
        <p>Error!</p>
        <button onClick={()=>reset()}>Try again!</button>
    </div>
  )
}
