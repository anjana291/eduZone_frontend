import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

function CoursesList() {
  return (
    <>
      <div className='rounded-3' style={{ overflowX: 'hidden', margin: '10px 10px 10px 10px', backgroundColor: '#f5f5f5' }}>
        <Row className='mt-5'>
          <Col sm={12} md={6}>
            <img src="https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg" alt=""  width={'450px'} style={{ margin: '20px 0 20px 40px', borderRadius: '13px' }} className='img-fluid'/>
          </Col>
          <Col sm={12} md={6}>
            <div className='d-flex'>
              <img src="https://centraldigest.com/wp-content/uploads/2023/01/InDefenseofTeachers-900x611.jpeg" alt="" width={'90px'} height={'90px'} style={{ borderRadius: '50%' }} />
              <div className='ms-3 mt-4'>
                <h5>Teacher</h5>
              </div>
            </div>

            <h5 className='mt-3'>Course Title</h5>
            <p> <strong>course description</strong>:
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum enim sunt consectetur, ut provident amet ipsum ratione nihil quis molestias quaerat deleniti tenetur quae beatae vel, vitae dolorem recusandae. Eveniet?</p>
            <p><FontAwesomeIcon icon={faCalendar} /> Date</p>
          </Col>
        </Row>

        <Row>
          <h5 style={{margin:'20px 40px'}}>Chapters</h5>
          {['Chapter 1', 'Chapter 2', 'Chapter 3'].map((chapter, index) => (
          <Col sm={12} md={6} lg={4} className='d-flex justify-content-center' key={index}>
            <div className='bg-white m-3 p-2 rounded-3' style={{ width: '100%', maxWidth: '300px' }}>
              <img
                src="https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg"
                alt=""
                className='img-fluid'
                style={{ borderRadius: '10px' }}
              />
              <h6 className='mt-2'>{chapter}</h6>
            </div>
          </Col>
        ))}
        

        </Row>
      </div>
    </>
  )
}

export default CoursesList