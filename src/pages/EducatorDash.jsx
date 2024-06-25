import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CourseCard from '../components/CourseCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faFilePen, faHouse, faPowerOff, faTrash } from '@fortawesome/free-solid-svg-icons'
import UploadCourse from '../components/UploadCourse'
import ProfileDetails from '../components/ProfileDetails'
import { Link } from 'react-router-dom'

function EducatorDash() {
  return (
    <>
        <>
            <div className='rounded-3' style={{ overflowX: 'hidden', margin: '10px 10px 10px 10px', backgroundColor: '#f5f5f5' }}>
                <Row>
                    <Col sm={12} md={2}>
                        <div className='m-3 rounded-3 d-flex flex-column align-items-center justify-content-center' style={{ width: '100%', height: '550px',backgroundColor:'#28104e' }}>
                            <Link to={'/'}><h2 className='mt-2'>eduZone</h2></Link>
                            <div>
                                <Link to={'/teacherdash'}><h5>Dashboard</h5></Link>
                            </div>
                            <div>
                                <Link to={'/teacherprofile'}><h5> Profile</h5></Link>
                            </div>
                            <div className='mt-auto mb-3'>
                            <ProfileDetails/>
                            </div>

                        </div>
                    </Col>
                    <Col sm={12} md={10}>
                        <div className='my-3 mx-2 rounded-3' style={{ width: '98%', height: '550px' ,backgroundColor:'white'}}>
                            <div style={{ height: '1rem' }}></div>  {/* spacing */}
                            <div className='d-flex mx-3 rounded-3 justify-content-between' style={{ height: '100px', marginLeft: '10px', margin: '0px 12px' }}>
                                <div className='d-flex' style={{ height: '100px', marginLeft: '10px', margin: '0px 12px' }}>
                                    <img src="https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/65baf15103d8ad2826032a8a/1707422532886/how-to-stop-being-a-people-pleaser-1_1.jpg?format=1500w" alt=""
                                        style={{ borderRadius: '50%', margin: '10px' }} />
                                    <div>
                                        <p className='mt-3 ms-2' style={{ fontSize: '20px' }}>Welcome</p>
                                        <h5 className='ms-2' style={{ marginTop: '-10px' }}>Educator Name</h5>
                                    </div>
                                </div>
                                <div >
                                    <button className='btn m-2' style={{backgroundColor:'#deacf5'}}> <FontAwesomeIcon icon={faBell} /></button>
                                    <button className='btn m-2' style={{backgroundColor:'#deacf5'}}> <FontAwesomeIcon icon={faPowerOff} /></button>

                                </div>
                            </div>
                            <div style={{ height: '1rem' }}></div>  {/* spacing */}
                            {/* Courses Details */}
                            <div className='activeCourses ms-3 mt-4 rounded-3' style={{ width: '97%', height: '255px', overflowY: 'scroll'}}>
                                <div className='d-flex justify-content-between mx-3 py-2'>
                                    <h4 style={{color:'#28104e'}}>Your Courses</h4>
                                    <UploadCourse/>
                                </div>
                                <div className='' style={{ marginTop: '17px', marginLeft: '20px', marginRight: '10px' }}>
                                    <table className='w-100 text-center' >
                                        <thead>
                                            <tr>
                                                <th>Sl No.</th>
                                                <th>Course Name</th>
                                                <th>Uploaded Time</th>
                                                <th>Action(update or delete)</th>
                                                <th>Remarks</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Web Development</td>
                                                <td>2 minutes ago</td>
                                                <td className='p-2'>
                                                    <button className='btn' style={{backgroundColor:'#613cb5'}}><FontAwesomeIcon icon={faFilePen} style={{color:'white'}}/></button>
                                                    <button className='ms-2 btn btn-danger'><FontAwesomeIcon icon={faTrash}/></button>
                                                </td>
                                                <td>Waiting for confirmation</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div style={{ height: '1rem' }}></div>  {/* spacing */}
                            {/* 
                            <div className='bg-danger rounded-3 ms-3' style={{height:'125px',width:'25%'}}>
                               <p> Enrolled Students</p>
                            </div> */}

                        </div>
                    </Col>

                </Row>
            </div>


           
        </>
    </>
  )
}

export default EducatorDash