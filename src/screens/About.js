import React from 'react'
import { Link } from 'react-router-dom'

import bryanpic from '../assets/bryanpic.png'
import ashraypic from '../assets/ashraypic.png'
import marcpic from '../assets/marcpic.png'
import bertpic from '../assets/bertpic.png'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
         <div className='aboutuspage-wrapper dark-text'>
                <h1 className='header-title mt-5'>Background</h1>
                <p className='homepage-text'>
                    The SDM Lab is a research lab at Georgia Institute of Technology (GIT) that is dedicated to the study of
                    Sustainable Design. This project focuses on the development and application a new resillience metric proposed
                    in the paper "A New Resilience Metric to Compare System of Systems Architecture" by Bryan C. Watson, Ashray Chowdhry, Marc J. Weissburg, and Bert Bras.
                    The new metric, SoSRM, is a series of extensive mathematical models and computations that result in the first truly quantitative measure of how resilient 
                    a system is to unexpected disruptions. This can be thought of as a flow-break in a network, such as a power outage that shuts off trains in certain areas out
                    of an entire transportation network. Resilient systems have a higher chance of surviving such disruptions, and preserving resource allocation more closely to the behavior
                    of a steady state system. Conversely, non-resilient systems have a lower chance of surviving such disruptions, and are more likely to have factors in that system reach zero resource allocation.
                </p>
                <p className='homepage-text'>
                    Another extensively studied domain is Ecological Network Analysis (ENA), which is a method for constructing and analyzing metrics that give insight into several characteristics of an ecosystem.
                    Previous work done by Marc J. Weissburg and Bert Bras has shown that ENA can be used to predict the resilience of a system without undergoing the extensive calculation modelling that SoSRM requires.
                    By synthesizing the findings of these two separate domains of work, efficient and accurate insights into resillinece of human-made systems can be analyzed in depth, and recommendations for quantitative 
                    improvement can be made.
                </p>
                <p className='homepage-text'>
                   The purpose of this tool is to allow systems developers from all domains to leverage the significance of SoSRM and ENA to improve the resilience of their systems. Utilizing the newly quantifiable concept of resilience,
                   as well as the application of ENA towards human-made systems, this tool takes in an input system and calculates several ENA metrics that have been shown to highly correlate with SoSRM. These metrics serve as indicators,
                   which in turn provide recommendations for how to improve the system's resilience. We hope to resultingly provide a tool that applies recent systems analysis publications towards helping improve resilience in systems in 
                   interpretable and simple ways.

                </p>

                <br></br>

                <div className='row mx-5'>
                    <div className='col-lg-6'>
                        <img src={bryanpic} className='portfolio-popup-image col-lg-2' alt='Bryan C. Watson'/>
                        <p className='col-lg-8'> Bryan C. Watson was born in Bremerton, WA, USA. He received the B.S. in Systems Engineering from the United States Naval 
                            Academy, Annapolis, MD, in 2009. He is currently pursuing the Ph.D. degree in mechanical engineering from the Georgia 
                            Institute of Technology, Atlanta, GA. </p>
                            <b>More About Bryan: </b> <a className='hyperlink' onClick={() =>window.open('https://www.bcwatson.com/')}>Click Here</a>
                    </div>
                    <div className='col-lg-6'>
                        <img src={ashraypic} className='portfolio-popup-image col-lg-2' alt='Ashray Chowdhry'/>
                        <p className='col-lg-8'>Ashray Chowdhry was born in Trenton, NJ, USA. He is currently pursuing a B.S. in Computer Science from the 
                            Georgia Institute of Technology, Atlanta, GA with a concentration in Artificial Intelligence and Network Design.</p>
                            <b>More about Ashray: </b> <a className='hyperlink' onClick={() =>window.open('ashraychowdhry.com')}>Click Here</a>
                    </div>
            </div>

                <div className='row mx-5'>
                <div className='col-lg-6'>
                    <img src={marcpic} className='portfolio-popup-image col-lg-2' alt='Marc J. Weissburg'/>
                    <p className='col-lg-8'>Marc J. Weissburg is Professor of Biology, Co-Director of the Center for Biologically Inspired Design and 
                        Brook Byers Professor of Sustainability at the Georgia Institute of Technology. An ecologist by training, 
                        he uses biological principles to solve human challenges, and has been teaching and practicing 
                        biologically-inspired design for over a decade.</p>
                        <b>More About Marc </b> <a className='hyperlink' onClick={() =>window.open('https://ocean.gatech.edu/people/dr-marc-weissburg')}>Click Here</a>
                </div>
                <div className='col-lg-6'>
                    <img src={bertpic} className='portfolio-popup-image col-lg-2' alt='Bert Bras'/>
                    <p className='col-lg-8'>Bert Bras focuses his research on sustainable design and manufacturing. He received his PhD from the University 
                        of Houston and has been at the Georgia Institute of Technology since 1992. From 2001 to 2004, he served as the 
                        Director of Georgia Tech’s Institute for Sustainable Technology and Development. In 2014, he was named a Brook 
                        Byers Professor of Sustainability.</p>
                        <b>More about Bert: </b> <a className='hyperlink' onClick={() =>window.open('https://research.gatech.edu/bert-bras')}>Click Here</a>
                </div>
            </div>


            <br></br>
            <div className='center my-5 '>
                <Link to='/step1' className='get-started-button dark-text'>Lets Get Started</Link>
            </div>
                
            </div>
            <Footer />
    </div>
  )
}

export default About