import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='w-100 p-4 mt-auto' style={{backgroundColor:'#7953d1'}}>
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4">
                <h4 style={{color:'#cbc9d6'}}>eduZone</h4>
                <p className='me-3' style={{color:'#fff'}}>"Empower Your Learning Journey, Anytime, Anywhere"</p>
                <p className='me-5' style={{color:'#fff'}}>Join us on a journey of continuous learning and personal growth, wherever and whenever it suits you best.</p>
            </div>
            <div className="col-md-2">
            <h5 style={{color:'#cbc9d6'}}>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'#fff'}}><p>Home</p></Link>
            <Link to={'/courses'} style={{textDecoration:'none',color:'#fff'}}><p>Courses</p></Link>
            <Link to={'/login'} style={{textDecoration:'none',color:'#fff'}}><p>Sign In/ Sign Up</p></Link>
            </div>
            <div className="col-md-2">
            <h5 className='text-center' style={{color:'#cbc9d6'}}>Follow Us</h5> 
            <div className='d-flex flex-column justify-content-center' >
                <FontAwesomeIcon icon={faInstagram} size='xl' className='' style={{color:'#fff'}}/>
                <FontAwesomeIcon icon={faFacebook} size='xl' className='mt-3' style={{color:'#fff'}}/>
                <FontAwesomeIcon icon={faLinkedin} size='xl' className='mt-3' style={{color:'#fff'}}/>
            </div>
            </div>
            <div className="col-md-3">
                <h5 className='text-center' style={{color:'#cbc9d6'}}>Write to Us</h5>
                <div className='d-flex'>
                    <input type="text" placeholder='Email' className='form-control mt-3'/>
                    <div className='mt-3'><button className='btn btn-light ms-2'><FontAwesomeIcon icon={faPaperPlane}/></button></div>
                </div>
            </div>

        </div>
        <p className='text-center'>Copyright © 2024 eduZone. Built with React</p>
        </div>
    </>
  )
}

export default Footer