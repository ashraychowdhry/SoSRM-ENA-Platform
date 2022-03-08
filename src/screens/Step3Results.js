import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ENAResults from '../components/ENAResults'

function Step3Results(props) {


  return (
      <div className='step3-wrapper dark-text justify-content-center center'>
        <h1 className='my-5'>Step 3: Results for System "{props.matrixTitle}"</h1>
        <div className='results-font'>
            <ENAResults enaCalcs={props.enaCalcs} />
            {JSON.stringify(props.data)}
        </div>

        <div className='results-buttons'>
            <Link to='/step1' className='btn btn-primary col-lg-3 mx-5'>Modify Matrix</Link>
            <Link to='/comparator' className='btn btn-primary col-lg-3 mx-5'>Comparative Flow Editor</Link>
            <Button onClick={sendData(props)} className='btn btn-primary col-lg-3 mx-5'>Send Matrix to SDM</Button>
        </div>

    </div>
   
  )
}


async function sendData(props) {
    var systemJSON = JSON.stringify(props.flowValues);
    var systemName = props.matrixTitle;
    var systemIndustry = props.industry;
    var systemCompany = props.company;
    var systemLabels = props.constituentNames;


    const response = await fetch('http://localhost:3001/api/saveData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                systemJSON: systemJSON,
                systemName: systemName,
                systemIndustry: systemIndustry,
                systemCompany: systemCompany,
                systemLabels: systemLabels

            }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
            console.log(data.data)
        } else {
            alert('Error saving system to database')
        }
}

export default Step3Results