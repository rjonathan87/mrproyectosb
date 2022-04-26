import { Form, Table } from "react-bootstrap";
import conceptos from "../../api/conceptos.json";

const listaConceptos = conceptos.map((concepto) => (
  <tr key={concepto.material_nsc}>
    <td>
      <b>Material NSC: </b>
        { concepto.material_nsc }<br />
      <b>Clave: </b>
        {concepto.clave}<br />
      <b>Concepto: </b>
        {concepto.concepto}<br />
      <b>Unidad: </b>
        {concepto.unidad}<br />
      <b>Unitario: </b>
        {concepto.unitario}<br />
    </td>
    <td>
      <Form.Group controlId="cantidad" className="mb-3">
        <Form.Label>cantidad</Form.Label>
        <Form.Control type="number" step={.1} />
      </Form.Group>
    </td>
    <td>{concepto.unitario}</td>
  </tr>
));

const Servicios = () => {
  return (
    <Table striped bordered hover responsive>
      <thead className="table-dark">
        <tr>
          <th>Datos Concepto</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        { listaConceptos }
      </tbody>
    </Table>
  );
};

export default Servicios;
