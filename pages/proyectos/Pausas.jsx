import { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row, Table } from "react-bootstrap";

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
          <Modal.Title>Gestionando Pausa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col sm={6}>
                <Form.Group controlId="inicio" className="mb-3">
                  <Form.Label>Inicio</Form.Label>
                  <Form.Control type="date" placeholder="Inicio" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="inicio_hora" className="mb-3">
                  <Form.Label>Hora Inicio</Form.Label>
                  <Form.Control type="time" placeholder="Hora Inicio" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group controlId="final" className="mb-3">
                  <Form.Label>Fin</Form.Label>
                  <Form.Control type="date" placeholder="Fin" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="fin_hora" className="mb-3">
                  <Form.Label>Hora Fin</Form.Label>
                  <Form.Control type="time" placeholder="Hora Fin" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="motivo" className="mb-3">
              <Form.Label>Motivo</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Seleccione</option>
                <option value="1">Motivo 1</option>
                <option value="2">Motivo 2</option>
                <option value="3">Motivo 3</option>
                <option value="4">Motivo 4</option>
                <option value="5">Motivo 5</option>
                <option value="6">Motivo 6</option>
                <option value="7">Motivo 7</option>
                <option value="8">Motivo 8</option>
                <option value="9">Motivo 9</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId='resolucion_check' className="mb-3">
              <Form.Check 
                type={'checkbox'}
                id={'resolucion_check'}
                label={'Se resolvió?'}
              />
            </Form.Group>

            <Form.Group controlId="resolucion_text" className="mb-3">
              <Form.Label>Resolución</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Pausas;
