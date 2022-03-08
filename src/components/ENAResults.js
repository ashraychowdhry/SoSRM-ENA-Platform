import React, {useState} from 'react'
import { Tooltip } from '@material-ui/core';

export default function ENAResults(props) {

    return (
        <div className='container'>
            <div className='results-wrapper'>

                

                <div className='row'>
                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title='Links: The total count of flows between all factors in the system.'>
                                <p className='metric-label'>Links: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            
                                <p className='metric-result'>{props.enaCalcs[0]}</p>
                            
                        </div>
                    </div>

                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>

                            <Tooltip title='Prey: The count of system factors that are consumed, or give flow, 
                            to another factor'>
                                <p className='metric-label'>Number of Prey: </p>
                            </Tooltip>
                            
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[1]}</p>
                        </div>
                    </div>
                    
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title='Predators: The count of system factors that receive flow from 
                            another factor.'>
                                <p className='metric-label'>Number of Predators: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[2]}</p>
                        </div>
                    </div>
                    
                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title='Prey Predator Ratio = (Number of Prey / Number of Predators) per system'>
                                <p className='metric-label'>Prey Predator Ratio: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[3]}</p>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title='Generalization: The average number of links per predator in the system'>
                                <p className='metric-label'>Generalization: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[4]}</p>
                        </div>
                    </div>
           
                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title='Vulnerability: The average number of links per prey in the system'>
                                <p className='metric-label'>Vulnerability: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[5]}</p>
                        </div>
                    </div>
       
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title='Linkage Density: The number of links there are per factor'>
                                <p className='metric-label'>Linkage Density: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[6]}</p>
                        </div>
                    </div>
                
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title='Connectance: The average rate of linkage density per factor'>
                                <p className='metric-label'>Connectance: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[7]}</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title='Special Predators: Predators that have a flow intake of 100%'>
                                <p className='metric-label'>Fraction of Special Predators: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[8]}</p>
                        </div>
                    </div>
             
                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title='Cyclicity: The largest eigenvalue of the inputted matrix'>
                                <p className='metric-label'>Cyclicity: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[9]}</p>
                        </div>
                    </div>
          
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title='TST: The net flow of the entire system'>
                                <p className='metric-label'>Total System Throughput: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[10]}</p>
                        </div>
                    </div>
                    
                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title='H: a metric relating TST to individual flow rates logarithmically'>
                                <p className='metric-label'>Shannon's Index: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[11]}</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title='AMI: Numerical relation between TST, individual flows, in the form of a rartio'>
                                <p className='metric-label'>Average Mutual Information: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[12]}</p>
                        </div>
                    </div>
      
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title='System Ascendency: '>
                                <p className='metric-label'>System Ascendency: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[13]}</p>
                        </div>
                    </div>

                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title='DC: '>
                                <p className='metric-label'>Development Capacity: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[14]}</p>
                        </div>
                    </div>

                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title='Overhead: '>
                                <p className='metric-label'>Overhead: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[15]}</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title='Alpha: '>
                                <p className='metric-label'>Alpha: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[16]}</p>
                        </div>
                    </div>
        
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title='Cycling Index'>
                                <p className='metric-label'>Cycling Index: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[17]}</p>
                        </div>
                    </div>
       
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title='MPL: '>
                                <p className='metric-label'>Mean Path Length: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[18]}</p>
                        </div>
                    </div>

                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title='Robustness: '>
                                <p className='metric-label'>Robustness: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[19]}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            

        </div>
    )
}
