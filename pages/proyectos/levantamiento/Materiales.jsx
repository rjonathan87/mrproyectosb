import { Form, Table } from "react-bootstrap";
import materiales from "../../api/materiales.json";

const listaMateriales = materiales.map((materiale) => (
  <tr key={materiale.material_nsc}>
    <td>
      <b>Material NSC: </b>
        { materiale.material_nsc }<br />
      <b>Clave: </b>
        {materiale.clave}<br />
      <b>Material: </b>
        {materiale.concepto}<br />
      <b>Unidad: </b>
        {materiale.unidad}<br />
      <b>Unitario: </b>
        {materiale.unitario}<br />
    </td>
    <td>
      <Form.Group controlId="cantidad" className="mb-3">
        <Form.Label>cantidad</Form.Label>
        <Form.Control type="number" step={.1} />
      </Form.Group>
    </td>
    <td>{materiale.unitario}</td>
  </tr>
));

const Materiales = () => {
  return (
    <Table striped bordered hover responsive>
      <thead className="table-dark">
        <tr>
          <th>Datos Materiales</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        { listaMateriales }
      </tbody>
    </Table>
  );
};

export default Materiales;
