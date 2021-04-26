import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import Form from '../form/form';

import './app-header.css'


const AppHeader = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
        <div className="app-header d-flex">
            <h1>Beer List App</h1>
            <button className='btn btn-danger' onClick={handleShow}>Log In</button>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header> 
            <Modal.Body>
                <Form/>
            </Modal.Body> 
            <Modal.Footer>
            <button className='btn btn-success' onClick={handleClose}>Submit</button> 
            </Modal.Footer>

        </Modal>
        </div>
    )
}

export default AppHeader;