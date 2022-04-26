import { Col, Form, Row, Table } from "react-bootstrap";

const HojaCampo = () => {
  return (
    <>
      <h3>Datos</h3>

      <Row>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>FECHA DE ASIGNACIÓN</Form.Label>
            <Form.Control type="date" placeholder="FECHA DE ASIGNACIÓN" />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>HORA DE ASIGNACION</Form.Label>
            <Form.Control type="time" placeholder="HORA DE ASIGNACION" />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>FECHA DE TERMINO</Form.Label>
            <Form.Control type="date" placeholder="FECHA DE TERMINO" />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>HORA TERMINO</Form.Label>
            <Form.Control type="time" placeholder="HORA TERMINO" />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>HORA LLEGADA</Form.Label>
            <Form.Control type="time" placeholder="HORA LLEGADA" />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>DIRECCIÓN</Form.Label>
            <Form.Control type="text" placeholder="DIRECCIÓN" />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>CIUDAD</Form.Label>
            <Form.Control type="text" placeholder="CIUDAD" />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>COLONIA</Form.Label>
            <Form.Control type="text" placeholder="COLONIA" />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>Entidad Federativa</Form.Label>
            <Form.Control type="text" placeholder="Entidad Federativa" />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>ALCALDIA / MUNICIPIO</Form.Label>
            <Form.Control type="text" placeholder="ALCALDIA / MUNICIPIO" />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>REGIÓN</Form.Label>
            <Form.Control type="text" placeholder="REGIÓN" />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>CLUSTER/SEGMENTO, CORE, TPE</Form.Label>
            <Form.Control
              type="text"
              placeholder="CLUSTER/SEGMENTO, CORE, TPE"
            />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>CONTRATISTA </Form.Label>
            <Form.Control type="text" placeholder="CONTRATISTA        " />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>NOMBRE SUPERVISOR/TECNICO</Form.Label>
            <Form.Control type="text" placeholder="NOMBRE SUPERVISOR/TECNICO" />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="" className="mb-3">
            <Form.Label>FOLIO / ID</Form.Label>
            <Form.Control type="text" placeholder="FOLIO / ID" />
          </Form.Group>
        </Col>
      </Row>


      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Datos</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr><th colSpan="2">FLEXO AEREO</th></tr>
          <tr>
            <td>
              <b>Clave: </b> AER-003
              <b>Concepto: </b> INSTALACIÓN DE ABRAZADERA DE ACERO GALVANIZADO CON HERRAJE DE SUSPENSIÓN.
              <b>Unidad: </b> PZA.
            </td>
            <td>
              <Form.Group controlId="1" className="mb-3">
                <Form.Control type="number" placeholder="0" step=".1" min="0" />
              </Form.Group>
            </td>
          </tr>
          
          <tr><th colSpan="2">AEREO LASHEADO</th></tr>
          <tr>
            <td>
              <b>Clave: </b> LASH-001
              <b>Concepto: </b> INSTALACIÓN DE CABLE DIELECTRICO DE 12 FIBRAS OPTICAS, FIG, 0 AUTOSOPORTADO SUMINISTRADO POR IUSACELL.
              <b>Unidad: </b> ML.
            </td>
            <td>
              <Form.Group controlId="1" className="mb-3">
                <Form.Control type="number" placeholder="0" step=".1" min="0" />
              </Form.Group>
            </td>
          </tr>
          
        </tbody>
      </Table>
    </>
  );
};

export default HojaCampo;
