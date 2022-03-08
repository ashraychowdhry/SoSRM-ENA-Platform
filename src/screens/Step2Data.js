import React from 'react'
import { Link } from 'react-router-dom'

function Step2Data(props) {

    const [matrix, setMatrix] = React.useState(props.flowValues);
    return (
        <div className='container dark-text'>
            <h1>{props.matrixTitle}</h1>
            <div>{JSON.stringify(props.flowValues)}</div>

            {
                matrix.map((row, i) => {
                    return (
                        <div className='row' key={i}>
                            {
                                row.map((col, j) => {
                                    return (
                                        <div className='col' key={j}>
                                            <input type='text' value={col} onChange={(e) => {
                                                const newMatrix = [...matrix];
                                                newMatrix[i][j] = e.target.value;
                                                setMatrix(newMatrix);
                                                props.setFlowValues(newMatrix);
                                            }} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        
        <Link to='/step1' >Back</Link>
        <button type='submit' >Next</button>
    </div>

  )
}

export default Step2Data