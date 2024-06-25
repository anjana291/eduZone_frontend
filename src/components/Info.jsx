import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import book from '../assets/bookk.png'
import exp from '../assets/expp.png'

function Info() {
  return (
    <div className='w-100 mb-5 mt-5'>
        <Row className="mt-5">
        <h2 className='text-center'>Why Choose Us?</h2>

            <Col sm={12} md={6}>
            <img src="https://www.avanse.com/viewPagesAssets/img/education-infrastructure.webp" alt=""  width={'90%'} style={{marginLeft:'40px'}}/>
            </Col>
          <Col sm={12} md={6}>

          <div className='mt-5'>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{width:'70px' , height:'70px',borderRadius:'50%', backgroundColor:'#7953d1',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div >
                        <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" height={'50px'} />
                    </div>
                </div>
                <div className='ms-2 mt-3'>
                    <h5>Expert Instructors</h5>
                    <p>Learn from industry professionals with real-world experience.</p>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-center'>
                <div style={{width:'70px' , height:'70px',borderRadius:'50%', backgroundColor:'#7953d1',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div >
                        <img src={book} alt="" height={'90px'} />
                    </div>
                </div>
                <div className='ms-2 mt-3'>
                    <h5>Wide Range of Courses</h5>
                    <p>From beginner to advanced, we offer courses in various fields.</p>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-center' style={{marginLeft:'-29px'}}>
                <div style={{width:'70px' , height:'70px',borderRadius:'50%', backgroundColor:'#7953d1',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div >
                        <img src="https://cdn-icons-png.flaticon.com/512/686/686051.png" alt="" height={'50px'} />
                    </div>
                </div>
                <div className='ms-2 mt-3'>
                    <h5>Flexible Learning</h5>
                    <p>Access courses anytime, anywhere, and at your own pace.</p>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-center' style={{marginLeft:'-29px'}}>
                <div style={{width:'70px' , height:'70px',borderRadius:'50%', backgroundColor:'#7953d1',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div >
                        <img src={exp} alt="" height={'70px'} />
                    </div>
                </div>
                <div className='ms-2 mt-3'>
                    <h5>Hands-On Experience</h5>
                    <p>Access courses anytime, anywhere, and at your own pace.</p>
                </div>
            </div>


           
          </div>
            
          </Col>
        </Row>
    </div>
  )
}

export default Info