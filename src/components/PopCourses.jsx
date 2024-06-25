import React from 'react'
import { Col, Row } from 'react-bootstrap'
import EnrollCard from './EnrollCard'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons'

function PopCourses() {
  return (
    <>
        <div className='mt-5 w-100'>
            <h2 className='text-center'>Our Popular Courses</h2>
            <Row>
                <Col sm={12} md={2}></Col>
                <Col sm={12} md={8} className='mb-5 mt-5 d-flex justify-content-center align-items-center' style={{gap:'20px'}}>
                <EnrollCard/>
                </Col>
                <Col sm={12} md={2}></Col>

                <Link to={'/courses'} style={{textDecoration:'none',color:'#7953d1'}}>
                <p className='text-center' >Explore More Courses <FontAwesomeIcon icon={faSquareCaretRight}/></p></Link>
            </Row>
           

        </div>
    </>
  )
}

export default PopCourses