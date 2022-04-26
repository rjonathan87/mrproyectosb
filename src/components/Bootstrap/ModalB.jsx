import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faSave } from '@fortawesome/free-solid-svg-icons'

export const ModalB = () => {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  
  const handleClose = () => setShow(false);
  const handleSave = () => console.log('Saving...');
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose} fullscreen={fullscreen}>
        <Modal.Header closeButton>
          <Modal.Title>Editando Proyecto 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <FontAwesomeIcon icon={faClose} />
          </Button>
          <Button variant="primary" onClick={handleSave}>
            <FontAwesomeIcon icon={faSave} />
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
