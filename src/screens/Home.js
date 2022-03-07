import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import Button from '@material-ui/core/Button'

function Home() {


  return (
    <div className='homepage-wrapper main-font'>
        <h1 className='header-title mt-5'>Systems Resillience Tool</h1>
        <h1 className='home-subtitle'>Using cutting-edge ressearch to make your systems more resilient in the face of disruptions.</h1>

        <Link className='get-started-button contact-btn' to='/step1'>Get Started</Link>

        <div className='homepage-text'>
            <h2>What We Do</h2>
            <p>
                The SDM Lab is a research laboratory at Georgia Institute of Technology (GIT) that is dedicated to the study of Sustainable System Design. 
                This project focuses on the development and application a new resillience metric proposed in the recent publication "A New Resilience Metric to Compare System of Systems Architecture".

                Through this application, we aim to bring together the research of the two domains of work, namely SoSRM and ENA, to provide a tool that can be used to analyze systems in a more intuitive and intuitive way.
            </p>

            <h2>What is SoSRM?</h2>
            <p>
                The new metric SoSRM (System of Systems Resilience Metric), is a series of extensive mathematical models and computations that result in the first truly quantitative measure of how resilient
                a system is to unexpected disruptions. This can be thought of as a flow-break in a network, such as a power outage that shuts off trains in certain areas out
                of an entire transportation network. Resilient systems have a higher chance of surviving such disruptions, and preserving resource allocation more closely to the behavior
                of a steady state system. Conversely, non-resilient systems have a lower chance of surviving such disruptions, and are more likely to have factors in that system reach zero resource allocation.

                Read more about our recent work on SoSRM in the <a href='' target='_blank' rel='noopener noreferrer'>paper</a>.
            </p>

            <h2>What is ENA</h2>
            <p>

            </p>
        </div>

        <ContactForm />
        <Button variant='contained' href='/input' className='btn btn-primary'>Begin Matrix Input</Button>

    </div>
  )
}

export default Home