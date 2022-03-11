import React from 'react'
import { Link } from 'react-router-dom'
import step2example from '../assets/step2example.png'
import exampleSystem from '../assets/exampleSystem.png'

export default function MatrixInputTutorial() {
  return (
    <div className='container dark-text'>
          <div className='tutorial-text'>
            <h1 className='center'>Tutorial for Matrix Input</h1>
            <p>In this guide, you will be shown how to use the data input page</p>
            <p>In the matrix input page, you will be entering in the flows that dictate your system, as well as the associated names of each constituent. 
                The matrix is of the format ROW->COL, which means a value's row signifies the constituent losing/giving the physical flow unit to the respective column's constituent. In other words, the System entry for [1][2] 
                is the flow link of constituent 1 to constituent 2. The top row is imports, which are external entries into the system if they exist. The rightmost column is exports, 
                which are outputs from the system to the outside environment, if they exist.
                As an example, consider the system below, represented in graph form:</p>
            <img src={exampleSystem} className='tutorial-image' alt='Example System'/>
            <p>
                Below is the respective inputted system from above into the application:
            </p>
            <img src={step2example} className='tutorial-image' alt='step2example'/>
            <p>
                All of the information you enter here will be used by the Georgia Institute of Technology to further the relevance, accuracy, and study of this and related work.
            </p>
          </div>

        <Link to='/step2' className='btn btn-primary'>Back</Link>
      </div>
  )
}
