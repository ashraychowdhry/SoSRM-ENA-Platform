import React, {useState} from 'react'
import { Tooltip } from '@material-ui/core';

export default function ENAResults(props) {

    return (
        <div className='container'>
            <div className='results-wrapper'>

                

                <div className='row'>
                    <div className='result-pair col-lg-2'>
                        <div className='col-lg-6'>
                            <Tooltip title={<h4>Links: The total count of flows between all factors in the system.</h4>}>
                                <p className='metric-label'>Links: </p>
                            </Tooltip>

                        </div>
                        <div classname='col-lg-6 metric-result'>
                            
                                <p className='metric-result'>{props.enaCalcs[0].toPrecision(1)}</p>
                            
                        </div>
                    </div>

                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>

                            <Tooltip title={<h4>Prey: The count of system factors that are consumed, or give flow, 
                            to another factor</h4>}>
                                <p className='metric-label'>Number of Prey: </p>
                            </Tooltip>
                            
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[1].toPrecision(1)}</p>
                        </div>
                    </div>
                    
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>Predators: The count of system factors that receive flow from another factor.</h4>}>
                                <p className='metric-label'>Number of Predators: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[2].toPrecision(1)}</p>
                        </div>
                    </div>
                    
                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>Prey Predator Ratio = (Number of Prey / Number of Predators) per system</h4>}>
                                <p className='metric-label'>Prey Predator Ratio: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[3].toPrecision(6)}</p>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>Generalization: The average number of links per predator in the system</h4>}>
                                <p className='metric-label'>Generalization: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[4].toPrecision(6)}</p>
                        </div>
                    </div>
           
                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>Vulnerability: The average number of links per prey in the system</h4>}>
                                <p className='metric-label'>Vulnerability: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[5].toPrecision(6)}</p>
                        </div>
                    </div>
       
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>Linkage Density: The number of links there are per factor</h4>}>
                                <p className='metric-label'>Linkage Density: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[6].toPrecision(6)}</p>
                        </div>
                    </div>
                
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>Connectance: The average rate of linkage density per factor</h4>}>
                                <p className='metric-label'>Connectance: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[7].toPrecision(6)}</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>Special Predators: Predators that have a flow intake of 100%</h4>}>
                                <p className='metric-label'>Fraction of Special Predators: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[8].toPrecision(6)}</p>
                        </div>
                    </div>
             
                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>Cyclicity: The largest eigenvalue of the inputted matrix</h4>}>
                                <p className='metric-label'>Cyclicity: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[9].toPrecision(6)}</p>
                        </div>
                    </div>
          
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>TST: The net flow of the entire system</h4>}>
                                <p className='metric-label'>Total System Throughput: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[10].toPrecision(6)}</p>
                        </div>
                    </div>
                    
                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>H: a metric relating TST to individual flow rates logarithmically</h4>}>
                                <p className='metric-label'>Shannon's Index: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[11].toPrecision(6)}</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>AMI: Numerical relation between TST, individual flows, in the form of a rartio</h4>}>
                                <p className='metric-label'>Average Mutual Information: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[12].toPrecision(6)}</p>
                        </div>
                    </div>
      
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>System Ascendency: </h4>}>
                                <p className='metric-label'>System Ascendency: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[13].toPrecision(6)}</p>
                        </div>
                    </div>

                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>DC: </h4>}>
                                <p className='metric-label'>Development Capacity: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[14].toPrecision(6)}</p>
                        </div>
                    </div>

                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>Overhead: </h4>}>
                                <p className='metric-label'>Overhead: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[15].toPrecision(6)}</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>Alpha: </h4>}>
                                <p className='metric-label'>Alpha: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[16].toPrecision(6)}</p>
                        </div>
                    </div>
        
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>Cycling Index</h4>}>
                                <p className='metric-label'>Cycling Index: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[17].toPrecision(6)}</p>
                        </div>
                    </div>
       
                    <div className='result-pair col-lg-3'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>MPL: </h4>}>
                                <p className='metric-label'>Mean Path Length: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[18].toPrecision(6)}</p>
                        </div>
                    </div>

                    <div className='result-pair col-lg-2'>
                        <div classname='col-lg-6'>
                            <Tooltip title={<h4>Robustness: </h4>}>
                                <p className='metric-label'>Robustness: </p>
                            </Tooltip>
                        </div>
                        <div classname='col-lg-6 metric-result'>
                            <p className='metric-result'>{props.enaCalcs[19].toPrecision(6)}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            

        </div>
    )
}
