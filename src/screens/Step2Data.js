import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import calcENA from '../components/calcENA'

function Step2Data(props) {

    const [matrix, setMatrix] = React.useState(props.flowValues);
    const [conNames, setConNames] = React.useState(props.constituentNames);

    async function handleNextClick(e) {
        e.preventDefault()

        var rowSum = [];
        var colSum = [];
        rowSum[0] = 0;
        colSum[0] = 0;
        for (let i = 1; i < matrix.length; i++) {
            rowSum[i] = 0;
            for (let j = 0; j < matrix[i].length; j++) {
                rowSum[i] += Number(matrix[i][j]);
            }
            
        }

        for (let j = 1; j < matrix[0].length; j++) {
            colSum[j] = 0;
            for (let i = 0; i < matrix.length; i++) {
                colSum[j] += Number(matrix[i][j]);
            }
            
        }

        for (let i = 1; i < rowSum.length; i++) {
            if (rowSum[i] !== colSum[i]) {
                alert("Row " + i + " net inputs are not equal to column " + i + " net outputs. Please correct this.")
                console.log(rowSum)
                console.log(colSum)
                return;
            }
        }

        for (let i = 0; i < conNames.length; i++) {
            if (conNames[i] === '') {
                alert("Please enter a name for all constituents. " + i + " is blank.")
                return;
            }
        }

            props.setFlowValues(matrix)

            props.setConstituentNames(conNames)
            props.setEnaCalcs(calcENA(matrix))
            props.setMatrixCopy(matrix)

            //alert(conNames)

            var systemJSON = JSON.stringify(props.flowValues);
            var systemName = props.matrixTitle;
            var systemIndustry = props.industry;
            var systemCompany = props.company;
            var systemLabels = JSON.stringify(conNames);
            var systemUnit = props.unit;
            var systemTimeUnit = props.timeUnit;
            //alert(systemLabels)
            var systemToken = props.matrixTitle + systemLabels + systemIndustry + systemCompany;


            var data;
            try {
                const response = await fetch('http://localhost:3001/api/saveData', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        systemToken: systemToken,
                        systemJSON: systemJSON,
                        systemName: systemName,
                        systemIndustry: systemIndustry,
                        systemCompany: systemCompany,
                        systemLabels: systemLabels,
                        systemUnit: systemUnit,
                        systemTimeUnit: systemTimeUnit

                    }),
                })

                data = await response.json()
            } catch (err) {
                console.log(err)
            }
            if (data && data.status === 'ok') {
                console.log(data.data)
            } else {
                console.log('Error saving system to database')
            }
            
            props.history.push('/results')
        }

        function ConstituentInputRow(props) {
                if (props.i === 0) {
                    return (<p className='col'>Imports</p>)
                } else {
                    return (
                        <p className='col'>{props.i}</p>
                    
                    )
                    
                    
                }
        }

        function ConstituentInputCol(props) {
            if (props.i === conNames.length - 1) {
                return (<p className='col'>Exports</p>)
            } else {
                return (
                    <div className='col'>
                        {props.i}
                    </div>
                
                )
                
                
            }
    }





    return (
        <form onSubmit={e => {handleNextClick(e)}}>
            <div className='container dark-text'>
                <h1 className='my-5 center'>Step 2: Input the Flow Data for System "{props.matrixTitle}"</h1>

                {
                    matrix.map((row, i) => {
                        return (
                            <div>
                                <div className='row' key={i}>
                                    <ConstituentInputRow i={i} />

                                    <input className='col constituent-input' type='text' placeholder='Enter name' value={conNames[i]} onChange={(e) => {
                                        const newConNames = [...conNames];
                                        newConNames[i] = e.target.value;
                                        setConNames(newConNames);
                                    }} />
                                   
                                    {

                                        row.map((col, j) => {
                                            return (
                                                <div className='col' key={j}>
                                                    <input className='matrix-input' type='number' value={col} onChange={(e) => {
                                                        const newMatrix = [...matrix];
                                                        newMatrix[i][j] = e.target.value;
                                                        setMatrix(newMatrix);
                                                    }} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            </div>
                        )
                    })
                }

                <div className='row'>
                <p className='col'></p>
                <p className='col'></p>
                {
                    matrix.map((row, i) => {
                        return (
                         <ConstituentInputCol i={i} />   
                        )
                    })
                }
                </div>
            
                <div className='row my-5'>
                    <Link to='/step1' className='btn btn-primary col-lg-2'>Back</Link>
                    <div className='col-lg-3'></div>
                    <Link to='/matrix-tutorial' className='btn btn-primary col-lg-2'>Help</Link>
                    <div className='col-lg-3'></div>
                    <Button type='submit' className='align-items-right col-lg-2'>Next</Button>
                </div>
        </div>
    </form>

  )
}

export default Step2Data