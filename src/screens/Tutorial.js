import React from 'react'
import { Link } from 'react-router-dom'
import step1example from '../assets/step1example.png'


function Tutorial() {
  return (
      <div className='container dark-text'>
          <div className='tutorial-text'>
            <h1 className='center'>Tutorial for System Definition</h1>
            <p>View the sample entries below:</p>
            <p>In this section, you will be entering some preliminary information that defines your system as a whole.
                The "number of constituents" is the number of contributors within your system. For example, in the diagrammed system below, there 
                are three different nodes (or constituents), therefore the input is marked at three. For peripheral information regarding your system,
                please be sure to document the unit rate to the best of your ability, as well as title your system!
            </p>
            <p>
                The unit of your system flows will be a rate (some unit over some amount of time). This is split up into physical unit and time unit entries, which are dropdowns for you to select the most relevant unit.
            </p>
            <p>
                All of the information you enter here will be used by the Georgia Institute of Technology to further the relevance, accuracy, and study of this and related work.
            </p>
          </div>
       
        <img src={step1example} className='tutorial-image' alt='Bert Bras'/>

        <Link to='/step1' className='btn btn-primary'>Back</Link>
      </div>
    
  )
}

export default Tutorial