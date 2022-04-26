import Image from "next/image";
import { Form, Table } from "react-bootstrap";
import mapa from '../../api/kmz.png';

const Mapa = () => {
  return (
    <>
      <Table striped bordered hover responsive>
        <tbody>
          <tr>
            <td>
              <Form.Group controlId="folio" className="mb-3">
                <Form.Label>Folios</Form.Label>
                <Form.Control type="text" placeholder="Folios" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Mapa</h3>
              <Form.Group controlId="kmz_file" className="mb-3">
                <Form.Control type="file" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <Image src={mapa} alt="mapa" />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Mapa;
