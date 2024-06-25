import { faCirclePlay, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Progress from './Progress'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function EducatorCard() {
  return (
    <>
        <div className='d-flex justify-content-center' style={{width:'300px',minHeight:'250px',borderRadius:'30px',flexDirection:'column',backgroundColor:'#f5f5f5',marginTop:'20px'}} >
            <img src="https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg" alt="" height={'154px'} style={{borderRadius:'30px',margin:'-90px 20px 10px 20px'}}
            />
            <div className='px-2' style={{height:'100px'}}>
               <div className='d-flex justify-content-between' >
                <h4 className='ms-2'></h4>
                <p className='me-3'>3 Courses</p>
                </div>
              
               <div className='d-flex justify-content-between' >
                   <h4 className='ms-3'>Name LastName</h4>
               </div>
               <div className='d-flex justify-content-between mt-3'>
                    <span className='ms-3'><FontAwesomeIcon icon={faGithub} size='xl'/></span>
                    <span className='me-3'><FontAwesomeIcon icon={faLinkedin}  size='xl'/></span>
                   </div>
    
                {/* <div className='d-flex justify-content-between' style={{marginTop:'25px'}}>
                   <div> <img src="https://centraldigest.com/wp-content/uploads/2023/01/InDefenseofTeachers-900x611.jpeg" alt="" width={'50px'} height={'50px'} style={{borderRadius:'50%',
                    marginTop:'-10px',marginLeft:'10px'}}/>  </div>

                    <div className='px-2'><button className='btn' style={{backgroundColor:'#7953d1',color:'#fff'}}>Enroll</button> </div> 
                </div>                */}
            </div>
        </div>
    </>
  )
}

export default EducatorCard