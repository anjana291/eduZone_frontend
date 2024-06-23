import { faCirclePlay, faClock, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Progress from './Progress'

function CourseCard() {
  return (
    <>
        <div className='bg-secondary d-flex justify-content-center' style={{width:'300px',height:'310px',borderRadius:'30px',flexDirection:'column'}}>
            <img src="https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg" alt="" height={'154px'} style={{borderRadius:'30px',margin:'-90px 20px 10px 20px'}}/>
            <div className='px-2' style={{height:'100px'}}>
               <h4>Title</h4>
               <div className='d-flex justify-content-between' style={{margin:'10px'}}>
                   <div>
                    <h6><FontAwesomeIcon icon={faCirclePlay}/> 3 Chapters</h6>
                    <h6><FontAwesomeIcon icon={faClock}/> 3 hours</h6>
                   </div>
                   <div><Progress/></div>
               </div>
    
                <div className='d-flex justify-content-between' style={{marginTop:'-25px'}}>
                   <div> <img src="https://centraldigest.com/wp-content/uploads/2023/01/InDefenseofTeachers-900x611.jpeg" alt="" width={'50px'} height={'50px'} style={{borderRadius:'50%',
                    marginTop:'-10px',marginLeft:'10px'}}/>  </div>

                    <div className='px-2'><button className='btn btn-danger'>View</button> </div> 
                </div>               
            </div>
        </div>
    </>
  )
}

export default CourseCard