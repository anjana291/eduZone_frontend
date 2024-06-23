import { faUserGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function ProfileDetails() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>
            <div>
                <button className='btn btn-light'  onClick={handleShow}>Update <FontAwesomeIcon icon={faUserGear} /></button>


            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>About Me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className='mb-3 w-100'>
                        <input type="text"
                            placeholder='LinkedIn' className={`form-control w-100`} />
                    </div>
                    {/* image tag ⇑ */}
                    <div className='mb-3 w-100'>
                        <input type="text"
                            placeholder='FullName' className={`form-control w-100`} />
                    </div>
                    <div className='mb-3 w-100'>
                        <input type="text"
                            placeholder='Email' className={`form-control w-100`} />
                    </div>
                    <div className='mb-3 w-100'>
                        <input type="text"
                            placeholder='Phone Number' className={`form-control w-100`} />
                    </div>
                    <div className='mb-3 w-100'>
                        <input type="text"
                            placeholder='LinkedIn' className={`form-control w-100`} />
                    </div>
                    <div className='mb-3 w-100'>
                        <input type="text"
                            placeholder='Location' className={`form-control w-100`} />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProfileDetails