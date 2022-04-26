import { useState } from "react";
import { Alert, Button, Form, Modal, Table } from "react-bootstrap";

const Pausas = () => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id = 0) => {
    setShow(true)

    if(id > 0) {console.log(id)}
  };


  
  return (
    <>
      <h4>Pausas de Trabajo</h4>

      {/* Lista */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Datos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <div className="d-grid gap-2">
                <Button variant="info" size="md" onClick={ handleShow }>➕</Button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <b>Inicio:</b> 1 Enero 2022 20:30
              <br />
              <b>Final:</b> 2 Enero 2022 13:00
              <br />
              <b>Motivo de pausa:</b> Falta de acceso
              <br />
              <b>Resolución de pausa:</b> Se resolvió el problema positivamente
              <Alert variant='success'>
                ✔️ Motivo por el que SI se resolvió el problema negativamente
              </Alert>
            </td>
            <td className="text-center">
              <button className="btn btn-light mx-2" title="Editar" onClick={ () => handleShow(1) }>✏️</button>
              <button className="btn btn-light" title="Eliminar">🗑️</button>
            </td>
          </tr>
          <tr>
            <td>
              <b>Inicio:</b> 1 Enero 2022 20:30
              <br />
              <b>Final:</b> 2 Enero 2022 13:00
              <br />
              <b>Motivo de pausa:</b> Falta de acceso
              <br />
              <b>Resolución de pausa:</b> 
              <Alert variant='danger'>
                ✖️ Motivo por el que NO se resolvió el problema negativamente
              </Alert>
            </td>
            <td className="text-center">
              <button className="btn btn-light mx-2" title="Editar" onClick={ () => handleShow(2) }>✏️</button>
              <button className="btn btn-light" title="Eliminar">🗑️</button>
            </td>
          </tr>
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose} backdrop='static' keyboard="False">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Pausas;
