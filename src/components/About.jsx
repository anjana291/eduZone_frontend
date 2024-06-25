import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import women from '../assets/womenbook.png'
import styles from './about.module.css'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            <div className="w-100" style={{ overflowX: 'hidden' }}>
                <Row className="">
                    <Col sm={12} md={6} className='d-flex flex-column justify-content-center align-items-center'>
                        <div className='text-start ms-5'>
                            <h1 className='mt-md-0 mt-5'>Unlock Your Potential</h1>
                            <h1>Learn Anything,Anytime</h1>
                            <p className="mt-3">
                                At eduZone, we are passionate about empowering individuals through accessible education. Our mission is to provide flexible learning opportunities that fit into your lifestyle and help you achieve your personal and professional goals.
                            </p>
                        </div>
                        <div className='mt-3'>
                            <Link to={'/courses'}><button className={`${styles.bttn} btn`} >View Courses</button></Link>
                            </div>
                    </Col>
                    <Col sm={12} md={6} >
                        <div className="position-relative d-flex justify-content-center align-items-center" style={{ marginLeft: '-50px' }}>
                            <div style={{ height: '350px', width: '350px', border: '3px dashed #613cb5', borderRadius: '50%', position: 'absolute', zIndex: -1, marginTop: '-40px', marginLeft: '20px' }}></div>
                            <div style={{ height: '320px', width: '320px', borderRadius: '50%', backgroundColor: '#613cb5', position: 'absolute', zIndex: -1, marginTop: '-40px', marginLeft: '20px' }}></div>
                            <img src={women} alt="Women with books" style={{ width: '81%', zIndex: 1, marginLeft: '-10px' }} />
                        </div>
                    </Col>

                </Row>
                <div style={{ width: '100%', height: '80px', backgroundColor: '#7953d1' }}>

                </div>

            </div>
        </>
    )
}

export default About