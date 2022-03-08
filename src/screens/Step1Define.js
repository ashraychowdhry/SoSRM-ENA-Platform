import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Step1Define(props) {


    const [numCon, setNumCon] = React.useState(props.numConstituents)
    const [comp, setComp] = React.useState(props.company)
    const [ind, setInd] = React.useState(props.industry)
    const [title, setTitle] = React.useState(props.matrixTitle)



    const  handleNextClick = (e) => {
        e.preventDefault()

        if (title == '') {
            console.log('Please enter a title for your matrix')
        } else if (numCon <= 2 || numCon > 10) {
            console.log('Please enter a number of conditions between 3 and 10')
        } else {

            var matrix = [];
            var names = []
           // if (props.flowValues.length === 0 ) {
                for(var i=0; i <= numCon; i++) {
                    matrix[i] = [];
                    for(var j=0; j <= numCon; j++) {
                        matrix[i][j] = 0;
                    }
                    names[i] = '';
                }
            //} else {
                //matrix = props.flowValues;
                //names = props.constituentNames;
            //}
            
            console.log(matrix)
            props.setMatrixTitle(title)
            props.setNumConstituents(numCon)
            props.setCompany(comp)
            props.setIndustry(ind)
            props.setFlowValues(matrix)
            props.setConstituentNames(names)
            props.history.push('/step2')
        }



    }
        
  return (
    <div className='container main-font dark-text center'>
        <h1>Step 1: Define your System</h1>

        <form className='center' onSubmit={e => {handleNextClick(e)}}>
            <div className='form-group my-3 py-3 center'>
                <div className='row  my-3 py-3' >
                    <div className='col-md-3'></div>
                    <div className='col-md-3'>
                        <label htmlFor='systemName'>System Name</label>
                    </div>
                    <div className='col-md-3'>
                        <input type='text' value={title} onChange={e => setTitle(e.target.value)} className='form-control' id='systemName' placeholder='Enter System Name' />
                    </div>
                </div>
                <div className='row my-3 py-3'>
                    <div className='col-md-3'></div>
                    <div className='col-md-3'>
                        <label htmlFor='systemName'>Company (Optional)</label>
                    </div>
                    <div className='col-md-3'>
                        <input type='text' value={comp} onChange={e => setComp(e.target.value)} className='form-control' id='company' placeholder='Enter Company Name' />
                    </div>
                </div>
                <div className='row my-3 py-3'>
                    <div className='col-md-3'></div>
                    <div className='col-md-3'>
                        <label htmlFor='systemName'>System Industry (Optional)</label>
                    </div>
                    <div className='col-md-3'>
                        <input type='text' value={ind} onChange={e => setInd(e.target.value)} className='form-control' id='industry' placeholder='Enter Industry' />
                    </div> 
                </div>
                <div className='row my-3 py-3'>
                    <div className='col-md-3'></div>
                    <div className='col-md-3'>
                        <label htmlFor='systemName'>Number of Constituents</label>
                    </div>
                    <div className='col-md-3'>
                        <input type='number' value={numCon} onChange={e => setNumCon(e.target.value)} className='form-control' id='numConstituents' placeholder='Enter Number' />
                    </div>
                </div>

                <div className='row my-5'>
                    <Link to='/' className='btn btn-primary col-lg-2'>Back</Link>
                    <div className='col-lg-3'></div>
                    <Link to='/tutorial' className='btn btn-primary col-lg-2'>Help</Link>
                    <div className='col-lg-3'></div>
                    <Button type='submit' className='align-items-right col-lg-2'>Next</Button>
                </div>
            </div>
        </form>

        
    </div>
  )
}

export default Step1Define