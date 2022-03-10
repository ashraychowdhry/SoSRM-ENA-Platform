import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import Button from '@material-ui/core/Button'
import Footer from '../components/Footer'

function Home() {


  return (
    <div className='homepage-wrapper header-wrapper main-font'>
        <h1 className='header-title mt-10'>Systems Resillience Tool</h1>
        <h1 className='home-subtitle center '>Using cutting-edge research to make your systems more resilient in the face of disruptions.</h1>

        <div className='home-button-wrapper center my-5'>
         <Link className='get-started-button' to='/step1'>Get Started</Link>
        </div>

        <div className='homepage-text'>
            <h2>What We Do</h2>
            <p>
                The SDM Lab is a research laboratory at Georgia Institute of Technology (GIT) that is dedicated to the study of Sustainable System Design. 
                This project focuses on the development and application a new resillience metric proposed in the recent publication "A New Resilience Metric to Compare System of Systems Architecture".

                Through this application, we aim to bring together the research of the two domains of work, namely SoSRM and ENA, to provide a tool that can be used to analyze systems in a more intuitive way.
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
                ENA (Ecological Network Analysis) is a foundational subdomain of ecology and systems engineering that analyzes naturally occuring ecosystems in order to understand how they function.
                ENA often consists of compilations of various ecosystems and related data in order to find patterns in structure and operation, and represent analysis results in the form of several tested statistics values.
                Certain ecosystems have been found to display high levels of resilience to disruptions, and are therefore important to the study of systems resilience for human made systems. Our research takes the extensive domain of ENA
                and applies it to human made systems by evaluating a series of hueristics that can be used to understand resilience correlations.
            </p>
        </div>

        <ContactForm />
        <Footer />

    </div>
  )
}

export default Home