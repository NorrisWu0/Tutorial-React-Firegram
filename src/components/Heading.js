import React from 'react'
import '../css/heading.css'

function Heading() {
  return (
    <div className='title'>
      <h1>Firegram</h1>
      <h2>Photo Gallery</h2>
      <p>Made with React & Firebase based on this <a className='link' href='https://www.youtube.com/watch?v=vUe91uOx7R0&t=863s' target='_blank' rel="noreferrer">tutorial</a></p>
    </div>
  )
}

export default Heading
