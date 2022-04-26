import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faSave } from '@fortawesome/free-solid-svg-icons'

export const ModalB = (props) => {
  console.log(props)
  
  const handleClose = () => props.setShow();
  const handleSave = () => console.log('Saving...');

  return (
    <Modal 
      {...props}
      show={props.show} 
      fullscreen={props.fullscreen}
      size={props.size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ handleClose }>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export const {show, setShow, fullscreen, setFullscreen, handleClose, handleSave, handleShow} = ModalB;
