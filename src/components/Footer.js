import { Link } from "react-scroll";
import React from 'react'
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton, LinkedinShareButton, LinkedinIcon } from "react-share";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Document } from 'react-pdf'

import { faFacebook, faGithubSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
       <>
        <div className='footer-wrapper main-font'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='d-flex'>
                            <p>Address: 955 Spring St. NW, Atlanta GA 30309</p>
                        </div>
                        <div className='d-flex'>
                            <a href='tel:609-937-9394'>Phone: +1(609)-937-9394</a>
                        </div>
                        <div className='d-flex'>
                            <a href='mailto: ashraychowdhry@gmail.com'>Email: ashraychowdhry@gmail.com</a>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>

                           
                            <div className='header-icon col'>
                                <a className="icon-item-footer row justify-content-center" href='https://github.com/ashraychowdhry' >
                                    <FontAwesomeIcon icon={faGithubSquare}/> <span className="sr-only icon-styler">(current)</span>
                                </a>
                            </div>
                
                            <div className='header-icon col'>
                                <a className="icon-item-footer row justify-content-center" href='https://linkedin.com/in/ashraychowdhry' >
                                    <FontAwesomeIcon icon={faLinkedin}/> <span className="sr-only icon-styler">(current)</span>
                                </a>
                            </div>

                            <div className='header-icon col'>
                                <a className="icon-item-footer row justify-content-center" href='https://www.facebook.com/ashray.chowdhry/'>
                                    <FontAwesomeIcon icon={faFacebook}/> <span className="sr-only icon-styler">(current)</span>
                                </a>

                            </div>
          
                            <div className='header-icon col'>
                                <a className="icon-item-footer row justify-content-center" href='https://twitter.com/AshrayChowdhry' >
                                    <FontAwesomeIcon icon={faTwitter}/> <span className="sr-only icon-styler">(current)</span>
                                </a>
                            </div>

                            <div className='header-icon col'>
                                <a className="icon-item-footer row justify-content-center" href='https://www.instagram.com/ashraychowdhry/' >
                                    <FontAwesomeIcon icon={faInstagram}/> <span className="sr-only icon-styler">(current)</span>
                                </a>
                            </div>

                            

                        </div>
                    </div>

                    <div className='col'>
                        <div className='col align-items-center'>
                            <div className='d-flex justify-content-center'>
                                <FacebookShareButton url={"ashraychowdhry.com"} quote={"Check out this developer!"} hashtag="#tech"> 
                                    <FacebookIcon className='mx-3' size={30}/>
                                </FacebookShareButton>
                                <TwitterShareButton url={"ashraychowdhry.com"} quote={"Check out this developer!"} hashtag="#tech"> 
                                    <TwitterIcon className='mx-3' size={30}/>
                                </TwitterShareButton>
                                <LinkedinShareButton url={"ashraychowdhry.com"} quote={"Check out this developer!"} hashtag="#tech"> 
                                    <LinkedinIcon className='mx-3' size={30}/>
                                </LinkedinShareButton>
                                
                            </div>
                            <p className='pt-3 text-center'>
                                    Copyright&copy;
                                {   new Date().getFullYear()} &nbsp;Ashray Chowdhry | All Rights Reserved
                                </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}
