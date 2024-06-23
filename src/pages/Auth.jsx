import React from 'react';
import styles from './auth.module.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormSelect from 'react-bootstrap/FormSelect'

function Auth({ register }) {
    const registerForm = register ? true : false

    return (
        <>
            <div className={`${styles.main} w-100 d-flex flex-column justify-content-center align-items-center`} style={{ height: '100vh' }}>


                <div className='container w-100'>
                    <div>
                        <Row>
                            <Col sm={12} md={4}></Col>
                            <Col sm={12} md={4} >
                                {registerForm ?
                                    <div style={{ height: '500px', width: '350px' }} className={`${styles.formdiv} rounded mt-3 px-3`}>
                                        <Link to={'/'}><FontAwesomeIcon icon={faHouse} size='xl' style={{ color: '#613cb5' }} className='px-2 py-3' /></Link>
                                        <div id='signupdiv' className={`d-flex flex-column justify-content-center align-items-center`}>
                                            <h3 className='mt-5 text-center' style={{ color: '#28104e', fontFamily: 'Oswald' }}>Sign Up</h3>
                                            <Form className='w-100 mt-4'>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Control type="email" placeholder="Username" />

                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Control type="email" placeholder="Enter email" />

                                                </Form.Group>

                                                <Form.Group className={`${styles.role} mb-3`} style={{color:'gray'}}>
                                                    <Form.Select >
                                                        <option disabled>Role</option>
                                                        <option value="1">Student</option>
                                                        <option value="2">Tutor</option>
                                                        <option value="3">Admin</option>
                                                    </Form.Select>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Control type="password" placeholder="Password" />
                                                </Form.Group>

                                                <Button type="submit" className={`${styles.buttons} w-100`}>
                                                    Register
                                                </Button>
                                                <p className='text-center fst-italic'>Already have an account? <Link to={'/login'} className={`${styles.link}`}>Login</Link> </p>
                                            </Form>
                                        </div>
                                    </div>
                                    :
                                    <div style={{ height: '500px', width: '350px' }} className={`${styles.formdiv} rounded mt-3 px-3`}>
                                        <Link to={'/'}><FontAwesomeIcon icon={faHouse} size='xl' style={{ color: '#613cb5' }} className='px-2 py-3' /></Link>
                                        <div id='signindiv'>
                                            <h3 className='mt-5  text-center' style={{ color: '#28104e', fontFamily: 'Oswald' }}>Sign In</h3>
                                            <Form className='w-100 mt-4'>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Control type="email" placeholder="Enter email" />

                                                </Form.Group>

                                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                                    <Form.Control type="password" placeholder="Password" />
                                                    <Form.Text className='d-flex justify-content-end'>
                                                        <p className='mt-2'><a href='' className={`${styles.link} fst-italic`}>Forgot password?</a></p>
                                                    </Form.Text>
                                                </Form.Group>

                                                <Button type="submit" className={`${styles.buttons} w-100`}>
                                                    LogIn
                                                </Button>
                                                <p className='text-center fst-italic'>New User? <Link to={'/register'} className={`${styles.link} fst-italic`}>Sign Up</Link> </p>
                                            </Form>
                                        </div>
                                    </div>}
                            </Col>
                            <Col sm={12} md={4}></Col>
                        </Row>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Auth;



