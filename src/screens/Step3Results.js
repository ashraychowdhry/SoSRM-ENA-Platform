import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ENAResults from '../components/ENAResults'
import Footer from '../components/Footer'

function Step3Results(props) {


  return (
      <div className='step3-wrapper dark-text justify-content-center center'>
        <h1 className='my-5'>Step 3: Results for System "{props.matrixTitle}"</h1>
        <div className='results-font'>
            <ENAResults enaCalcs={props.enaCalcs} />
        </div>

        <div className='results-buttons my-5'>
            <Link to='/step2' className='btn btn-primary col-lg-2 mx-5'>Modify Matrix</Link>
            <div className='col-lg-8'></div>
            <Link to='/comparator' className='btn btn-primary col-lg-2 mx-5'>Comparative Flow Editor</Link>
        </div>
        <Footer />
    </div>
   
  )
}



export default Step3Results