import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import EnrollCard from '../components/EnrollCard'
import Footer from '../components/Footer'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import EducatorCard from '../components/EducatorCard'

function Educators() {
  return (
    <>
        <div className='w-100 mt-5' style={{minHeight:'80vh'}}>
        <div className='row d-flex justify-content-center mb-5'>
          <div className="col-md-4"></div>
          <div className="col-md-4 d-flex justify-content-center">
          <input type="text" placeholder='Search' className='form-control w-75'/>
              <FontAwesomeIcon icon={faSearch} style={{marginTop:'12px', marginLeft:'-30px',cursor:'pointer'}}/>
          </div>
          <div className="col-md-4"></div>
            </div>

          <Row className='mt-5 ms-2'>
            <Col sm={12} md={6} lg={4} className='p-3 mt-2 mb-5'>
            <EducatorCard/>
            </Col>
          </Row>
        </div>
        <Footer/>
    </>
  )
}

export default Educators