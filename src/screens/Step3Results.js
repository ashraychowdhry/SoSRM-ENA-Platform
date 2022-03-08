import React from 'react'

function Step3Results(props) {
  return (
      <div className='step3-wrapper dark-text'>
        <h1>Step 3: Results</h1>
        <h3>{props.matrixTitle}</h3>
        <h3>{props.enaCalcs}</h3>
        <p>{JSON.stringify(props.constituentNames)}</p>
        <p>{JSON.stringify(props.flowValues)}</p>

    </div>
   
  )
}

export default Step3Results