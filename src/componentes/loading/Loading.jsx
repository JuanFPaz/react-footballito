import React from 'react'
import './Loading.css'

export function LoadingSection () {
  return (
    <>
      <div className='loader-principal' />
    </>
  )
}

export default function Loading () {
  return (
    <div className='loading-overlay show'>
      <div className='loading-spinner-container'>
        <div className='loading-spinner' />
      </div>
    </div>
  )
}
