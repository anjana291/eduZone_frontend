import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UploadCourse() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <button className='btn' style={{ backgroundColor: '#7953d1', color: 'white' }} onClick={handleShow}>Upload New Course</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload New Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>

                        <Col sm={12} md={12}>
                            <form className='ms-3'>
                                <div className='mb-3'>
                                    <input type="text" placeholder='Course Title' className='form-control w-100' />
                                </div>

                                <div className='mb-3'>
                                    <input type="text" placeholder='Category' className='form-control w-100' />
                                </div>

                                <div className='mb-3'>
                                    <input type="text" placeholder='Duration' className='form-control w-100' />
                                </div>

                                <div className='mb-3'>
                                    <input type="text" placeholder='Prerequisites' className='form-control w-100' />
                                </div>

                                <div className='mb-3'>
                                    <input type="text" placeholder='Tags' className='form-control w-100' />
                                </div>

                                <div className='mb-3'>
                                    <input type="text" placeholder='Language' className='form-control w-100' />
                                </div>

                                {/* <label htmlFor='image'>
                                <input id='image' type="file" style={{display:'none'}}/>

                                <img src={"https://cdn.icon-icons.com/icons2/2570/PNG/512/image_icon_153794.png"} alt="cover image" className='my-3' style={{width:'200px'}}/>

                                 </label> */}

                                <div className='mb-3'>
                                    <textarea rows={2} placeholder='Course Description' className='form-control w-100' ></textarea>
                                </div>

                                <div className='mb-3'>
                                    <textarea rows={2} placeholder='Learning Objective' className='form-control w-100' ></textarea>
                                </div>

                            </form>
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UploadCourse