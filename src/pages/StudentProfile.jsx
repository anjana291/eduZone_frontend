import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGraduationCap, faHighlighter, faLocation, faLocationDot, faPhone, faUpload, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import styles from './educatorprofile.module.css'


function StudentProfile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='rounded-3' style={{ overflowX: 'hidden', margin: '10px 10px 10px 10px', backgroundColor: '#f5f5f5' }}>
                <Row>
                    <Col sm={12} md={2}>
                        <div className='bg-secondary m-3 rounded-3 d-flex flex-column ' style={{ width: '100%', height: '550px' }}>
                            <h2 className='mt-2'>eduZone</h2>
                            <div>
                                <h4>Dashboard</h4>
                            </div>
                            <div>
                                <h4> Profile</h4>
                            </div>

                        </div>

                    </Col>
                    <Col sm={12} md={10}>

                        <div className='my-3 mx-2 rounded-3 bg-success d-flex' style={{ width: '98%', height: '550px' }}>
                            <div style={{ width: '70%', height: '550px' }}>
                                <div className='d-flex justify-content-between' style={{ width: '98%' }}>
                                    <div className='bg-primary m-3 rounded-3 d-flex' style={{ width: '50%', minHeight: '100px' }}>
                                        <div className='mt-3'>
                                            <h5 className='ms-2'>Educational Background</h5>
                                            <div className='ms-2 mt-2'>
                                                <FontAwesomeIcon icon={faGraduationCap} />
                                                <span className='ms-2'>Educational details</span>
                                                <p style={{ fontSize: '13px', marginLeft: '29px' }}>sep 2019 to aug 2022</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='bg-secondary rounded-3 mt-3' style={{ height: '120px', width: '200px' }}>
                                        <h5 className='text-center mt-2'>Total Courses</h5>
                                        <p style={{ fontSize: '38px' }} className='text-center'>12</p>
                                    </div>
                                </div>
                                {/* <div className='m-3 bg-primary rounded-3 p-3 d-flex flex-column' style={{ width: '98%', minHeight: '250px' }}>
                                    <div className='d-flex'>
                                        <div className='w-50 '>
                                            <div className='mb-4 mt-3 w-100'>
                                                <input type="text"
                                                    placeholder='FullName' className={`${styles.inputbox} w-100`} />
                                            </div>
                                            <div className='mb-4 mt-3 w-100'>
                                                <input type="text"
                                                    placeholder='Phone Number' className={`${styles.inputbox} w-100`} />
                                            </div>    
                                            <div className='mb-4 mt-3 w-100'>
                                                <input type="text"
                                                    placeholder='Experience' className={`${styles.inputbox} w-100`} />
                                            </div>    
                                            <div className='mb-4 mt-3 w-100'>
                                                <input type="text"
                                                    placeholder='LinkedIn' className={`${styles.inputbox} w-100`} />
                                            </div> 
                                            
                                            <div className='mb-4 mt-3 w-100 d-flex justify-content-around'>
                                                <input type="file"
                                                placeholder='Upload' className={`${styles.inputbox} w-100`} />
                                                <div> <button className={`btn btn-light mt-3`}><FontAwesomeIcon icon={faUpload}/></button></div>
                                            </div> 
    
                                        </div>
    
                                        <div className='w-50 ms-3'>
                                            
                                            <div className='mb-4 mt-3 w-100'>
                                                <input type="text"
                                                    placeholder='Email' className={`${styles.inputbox} w-100`} />
                                            </div>    
                                            <div className='mb-4 mt-3 w-100'>
                                                <input type="text"
                                                    placeholder='Degree' className={`${styles.inputbox} w-100`} />
                                            </div>    
                                            <div className='mb-4 mt-3 w-100'>
                                                <input type="text"
                                                    placeholder='Subjects' className={`${styles.inputbox} w-100`} />
                                                   
                                            </div>                                           
                                            <div className='mb-4 mt-3 w-100'>
                                                <input type="text"
                                                    placeholder='Location' className={`${styles.inputbox} w-100`} />
                                                   
                                            </div> 
                                        </div>
                                    </div>
                                    <div className='text-end'>
                                            <button className='btn btn-warning me-2'>Cancel</button>
                                            <button className='btn btn-success'>Save</button>
                                        </div>
                                    
                                 </div>   Required div  */}

                                <div className='m-3 bg-danger rounded-3 p-3' style={{ width: '98%', minHeight: '150px' }}>
                                    <Row className=''>
                                        <Col sm={12} md={12}>
                                            <div>

                                                <div className='d-flex justify-content-between'>
                                                    <h3>About Me</h3>
                                                    <FontAwesomeIcon icon={faHighlighter} className='me-4' onClick={handleShow} />
                                                </div>
                                                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eaque necessitatibus repudiandae magni fuga, facilis illo alias fugiat sint iusto sit illum dicta obcaecati odio cumque recusandae ullam mollitia autem.</p>
                                            </div>
                                        </Col>
                                    </Row>



                                </div>

                            </div>


                            <div className='bg-warning m-3 rounded-3 d-flex flex-column ' style={{ width: '30%', height: '510px' }}>
                                <div className='d-flex flex-column align-items-center'>
                                    <img src="https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/65baf15103d8ad2826032a8a/1707422532886/how-to-stop-being-a-people-pleaser-1_1.jpg?format=1500w" alt=""
                                        style={{ borderRadius: '50%', margin: '10px', width: '200px' }} />
                                    <h4>Name LastName</h4>
                                </div>
                                <div className='text-start mt-3 ms-2 d-flex flex-column'>
                                    <h5>Contact Info</h5>
                                    <p><FontAwesomeIcon icon={faLocationDot} /> <span className='ms-2'>India</span></p>
                                    <p><FontAwesomeIcon icon={faEnvelope} /> <span className='ms-2'>email@email.com</span></p>
                                    <p><FontAwesomeIcon icon={faPhone} /><span className='ms-2'>1234567891</span></p>
                                    <p><FontAwesomeIcon icon={faLinkedin} /><span className='ms-2'>https://www.linkedin.com/in/an</span></p>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>About Me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='mb-3'>
                        <textarea rows={4} placeholder='Write here' className='form-control w-100' ></textarea>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default StudentProfile