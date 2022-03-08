import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import calcENA from '../components/calcENA'

function Step2Data(props) {

    const [matrix, setMatrix] = React.useState(props.flowValues);
    const [conNames, setConNames] = React.useState(props.constituentNames);

    const  handleNextClick = (e) => {
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
            props.history.push('/results')
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
                                    <p className='col'>{i}</p>
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
                            <div className='col'>
                                {i}
                            </div>
                        )
                    })
                }
                </div>
            
            <div className='row my-5'>
                <Link to='/step1' className='btn btn-primary col-lg-2'>Back</Link>
                <div className='col-lg-8'></div>
                <Button type='submit' className='align-items-right col-lg-2'>Next</Button>
            </div>
        </div>
    </form>

  )
}

export default Step2Data