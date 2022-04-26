import { Col, Form, Row } from "react-bootstrap";

const DatosProyecto = () => {
  return (
    <>
      <Row>
        <Col md={6} xl={4}>
          <Form.Group controlId="nombre_proyecto" className="mb-3">
            <Form.Label>Nombre del Proyecto</Form.Label>
            <Form.Control type="text" placeholder="Nombre del Proyecto" />
          </Form.Group>
          <Form.Group controlId="tipo_proyecto" className="mb-3">
            <Form.Label>Tipo de Proyecto</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Seleccione</option>
              <option value="1">MTTO Correctivo (SD, OT)</option>
              <option value="2">MTTO Preventivo (PRJ)</option>
              <option value="3">Reubicaciones</option>
              <option value="4">Proyectos Especiales</option>
              <option value="5">RTS</option>
              <option value="6">Soporte Planta Interna</option>
              <option value="7">Red Pasiva (Edificios)</option>
              <option value="8">Reforzamiento</option>
              <option value="9">Desconexiones</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="proveedor" className="mb-3">
            <Form.Label>Proveedor</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Seleccione</option>
              <option value="1">EXPERTCELL POLIZA</option>
              <option value="2">ESBA POLIZA</option>
              <option value="3">INTERCABLEADO S.A DE C.V</option>
              <option value="4">MEGA RED TELECOMUNICACIONES S.A DE C.V</option>
              <option value="5">GLOBARED</option>
              <option value="6">CALCULUS</option>
              <option value="7">EXPERTCELL PROYECTOS</option>
              <option value="8">ESBA PROYECTOS</option>
              <option value="9">TOTALPLAY</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="cluster" className="mb-3">
            <Form.Label>Cluster</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Seleccione</option>
              <option value="1">Opción 1</option>
              <option value="2">Opción 2</option>
              <option value="3">Opción 3</option>
              <option value="4">Opción 4</option>
              <option value="5">Opción 5</option>
              <option value="6">Opción 6</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="servicios_cantidad" className="mb-3">
            <Form.Label>Servicios Cantidad $</Form.Label>
            <Form.Control type="number" placeholder="Servicios" />
          </Form.Group>
          <Form.Group controlId="materiales_cantidad" className="mb-3">
            <Form.Label>Materiales cantidad $</Form.Label>
            <Form.Control type="number" placeholder="Materiales" />
          </Form.Group>
          <Form.Group controlId="total_servicios_materiales" className="mb-3">
            <Form.Label>Cantidad Total $</Form.Label>
            <Form.Control type="number" placeholder="Total" />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="fecha" className="mb-3">
            <Form.Label>Fecha Generador</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group controlId="Ciudad" className="mb-3">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="estado" className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="direccion" className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group controlId="proyecto" className="mb-3">
            <Form.Label>Proyecto</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col md={6} xl={4}>
          <Form.Group controlId="trabajo" className="mb-3">
            <Form.Label>Trabajo</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="tipo_trabajo" className="mb-3">
            <Form.Label>Tipo Trabajo</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="asignacion" className="mb-3">
            <Form.Label>Asignación</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="gerente" className="mb-3">
            <Form.Label>Gerente</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="tel_gerente" className="mb-3">
            <Form.Label>Teléfono de Gerente</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default DatosProyecto;
