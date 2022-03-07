import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div>
         <h1>Whoops</h1>
         <h3>We can't seem to find this page</h3>
        <Link to="/">Back to Home</Link>

    </div>
  )
}

export default Page404