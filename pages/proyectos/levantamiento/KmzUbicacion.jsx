import Image from "next/image";
import { Form, Table } from "react-bootstrap";

import kmz from '../../api/kmz.png';

const KmzUbicacion = () => {
  return (
    <>
      <Table striped bordered hover responsive>
        <tbody>
          <tr>
            <td>
              <Form.Group controlId="folio" className="mb-3">
                <Form.Label>Folio</Form.Label>
                <Form.Control type="text" placeholder="Folio" />
              </Form.Group>
              <Form.Group controlId="fecha" className="mb-3">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="text" placeholder="Fecha" />
              </Form.Group>
              <Form.Group controlId="direccion" className="mb-3">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Dirección" />
              </Form.Group>
              <Form.Group controlId="contratista" className="mb-3">
                <Form.Label>Contratista</Form.Label>
                <Form.Control type="text" placeholder="Contratista" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <h3>KMZ de Ubicación</h3>
              <Form.Group controlId="kmz_file" className="mb-3">
                <Form.Control type="file" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <Image src={kmz} alt="kmz" />
            </td>
          </tr>
        </tbody>
      </Table>

      


    </>
  );
};

export default KmzUbicacion;
