import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import calcENA from '../components/calcENA'
import ENAResults from '../components/ENAResults';
import Footer from '../components/Footer';

export default function Step4Comparator(props) {

    const [matrix, setMatrix] = React.useState([]);
    const [mCopy, setMCopy] = React.useState([]);
    const [improved, setImproved] = React.useState(0);

    useEffect(() => {
        var m = []
        var mc = []
        for (let i = 0; i < props.flowValues.length; i++) {
            var row = [];
            for (let j = 0; j < props.flowValues[i].length; j++) {
                row.push(props.flowValues[i][j]);
            }
            m.push(row);
            mCopy.push(row);
        }
        setMatrix(m);
        setMCopy(mc);
    }, [])

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
        if (props.i === matrix[0].length - 1) {
            return (<p className='col'>Exports</p>)
        } else {
            return (
                <div className='col'>
                    {props.i+1}
                </div>
            
            )
            
            
        }
    }
        

    async function handleNextClick(e) {
        e.preventDefault()

        var rowSum = [];
        var colSum = [];
        rowSum[0] = 0;
        colSum[0] = 0;
        for (let i = 1; i < matrix.length; i++) {
            rowSum[i-1] = 0;
            for (let j = 0; j < matrix[i].length; j++) {
                rowSum[i-1] += Number(matrix[i][j]);
            }
            
        }

        for (let j = 0; j < matrix[0].length - 1; j++) {
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

        
            var newENA = calcENA(matrix)

            var improvedENA = 0;
            for (let i = 0; i < newENA.length; i++) {
                if (i === 0 || i === 2 || i === 6 || i === 7 || i === 11 || i === 12 || i === 13 || i === 16 || i === 18) {
                    if (newENA[i] < props.enaCalcs[i]) {
                        improvedENA++;
                    } else if (newENA[i] > props.enaCalcs[i]) {
                        improvedENA--;
                    }
                } else if (i === 5 || i === 14 || i === 15 || i === 19) {
                    if (newENA[i] > props.enaCalcs[i]) {
                        improvedENA++;
                    } else if (newENA[i] < props.enaCalcs[i]) {
                        improvedENA--;
                    }
                }
            }

            setImproved(improvedENA)
            if (improvedENA > 0) {
                alert("You improved your resilience! A net of " + improvedENA + " heuristics improved.")
            } else if (improvedENA < 0) {
                alert("The resilience of the system decreased. A net of " + -1 * improvedENA + " heuristics worsened.")
            } else {
                alert("Your resilience stayed the same, sicen the net number of ENA heuristics improved is 0.")
            }

            //alert(conNames)

            
            var systemJSON = JSON.stringify(props.flowValues);
            var systemName = props.matrixTitle;
            var systemIndustry = props.industry;
            var systemCompany = props.company;
            var systemLabels = JSON.stringify(props.constituentNames);
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
                        systemLabels: systemLabels

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
            
        }
        


  return (
    <div className='step4-wrapper container dark-text'>

        <form onSubmit={e => {handleNextClick(e)}}>
                <h1 className='my-5 center'>Step 4: Compare and Improve System "{props.matrixTitle}"</h1>

                {
                    matrix.map((row, i) => {
                        return (
                            <div>
                                <div className='row' key={i}>
                                    <p className='col'>{i}</p>
                                    <p className='col constituent-input'>{props.constituentNames[i]}</p>

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
                            <div className='col'>
                                 <ConstituentInputCol i={i} />   
                            </div>
                        )
                    })
                }
                </div>
            

        

        <div className='  row my-5'>
            <Link to='/results' className='btn btn-primary col-lg-2'>Back</Link>
            <div className='col-lg-8'></div>
            <Button type='submit' className='align-items-right col-lg-2'>Render Heuristics</Button>
        </div>
    </form>

    <div className=''>
            <p>Original Matrix and Heuristics (for reference)</p>
        {
        
        props.matrixCopy.map((row, i) => {
                        return (
                            <div>
                                <div className='row' key={i}>
                                    <p className='col'>{i}</p>
                                    {
                                        row.map((col, j) => {
                                            return (
                                            <div className='col' key={j}>
                                                <p className='old-matrix-ref center'>{Number(props.matrixCopy[i][j])}</p>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        )})
        }       
        </div>

        <ENAResults enaCalcs={props.enaCalcs} />
    </div>
  )
}

