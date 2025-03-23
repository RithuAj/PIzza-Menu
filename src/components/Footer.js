import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className='footer'>{new Date().toLocaleTimeString()}.We are open now!</footer>
    </>
  )
}
