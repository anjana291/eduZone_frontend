import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import student from '../assets/student.jpg'

function Testimonials() {
    return (
        <>

            <div className='mt-5 mb-5'>
                <h3 className='text-center'>Student Testimonial</h3>

                <Row className='mt-5'>
                    <Col sm={12} md={1}></Col>
                    <Col sm={12} md={10}>
                        <Row>
                            <Col sm={12} md={6} lg={4} className='ms-md-0 ms-5'>
                                <div className='mt-3' >
                                    <Row>
                                        <Col sm={12} md={6} lg={4}>
                                            <Card style={{ width: '18rem', height: '12rem' }}>
                                                <Card.Body className='d-flex'>
                                                    <Card.Img src={student} className='rounded-circle' style={{ width: '18%' }}></Card.Img>
                                                    <div className='text-align-start ms-2'>
                                                        <Card.Title className=''>Name</Card.Title>
                                                    </div>
                                                </Card.Body>
                                                <Card.Body>
                                                    <p style={{ fontSize: '13px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, corrupti tempora soluta sit, libero excepturi vitae quod neque explicabo .</p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            

                        </Row>
                    </Col>
                    <Col sm={12} md={1}></Col>
                </Row>
            </div>


        </>
    )
}

export default Testimonials