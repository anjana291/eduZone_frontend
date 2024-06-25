import React from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        
        <div className='w-100 mb-3 d-flex align-items-center justify-content-between'>
          <h3 className='p-2' style={{cursor:'pointer'}}>eduZone</h3>
          
            <ul className={`${styles.ulist}`}>
              <Link to={'/'}><li className={`${styles.list}`}>Home</li></Link>
              <Link to={'/teachers'}><li  className={`${styles.list}`}>Tutors</li></Link>
              <Link to={'/courses'}><li  className={`${styles.list}`}>Courses</li></Link>
              <Link to={'/about'}><li  className={`${styles.list}`}>About Us</li></Link>
            </ul>
          
          <div className='ms-auto'>
            <Link to={'/login'}><button className={`${styles.buttn} btn me-3`}>LogIn</button></Link>
            <Link to={'/register'}><button className={`${styles.buttn} btn me-3`}>SignUp</button></Link>
          </div>
        </div>
    </>
  )
}

export default Header