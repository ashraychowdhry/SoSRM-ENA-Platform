import React from 'react'
import { Link } from 'react-router-dom'

function Tutorial() {
  return (
      <div className='container dark-text'>
        <div>Tutorial</div>
        <p>View the sample entries below:</p>
        <Link to='/step1' className='btn btn-primary'>Back</Link>
      </div>
    
  )
}

export default Tutorial