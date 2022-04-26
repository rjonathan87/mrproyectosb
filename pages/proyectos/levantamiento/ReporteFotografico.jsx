import Image from "next/image";
import { Form, Table } from "react-bootstrap";

import img1 from '../../api/calle1.jpg';
import img2 from '../../api/calle2.jpg';
import img3 from '../../api/calle3.jpg';
import img4 from '../../api/calle4.jpg';
import uniforme from '../../api/uniforme.jpg';
import herramientas from '../../api/herramientas.jpg';

const ReporteFotografico = () => {
  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th colSpan={2}>
              <h3>Antes</h3>
              <Form.Group controlId="antes_1" className="mb-3">
                <Form.Label>Antes 1</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group controlId="antes_2" className="mb-3">
                <Form.Label>Antes 2</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </th>
            <th colSpan={2}>
              <h3>Durante</h3>
              <Form.Group controlId="durante_1" className="mb-3">
                <Form.Label>Durante 1</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group controlId="durante_2" className="mb-3">
                <Form.Label>Durante 2</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </th>
          </tr>
          <tr>
            <th colSpan={2}>
              <h3>Después</h3>
              <Form.Group controlId="despues_1" className="mb-3">
                <Form.Label>Después 1</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group controlId="despues_2" className="mb-3">
                <Form.Label>Después 2</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </th>
            <th colSpan={2}>
              <h3>Herramientas y Uniforme</h3>
              <Form.Group controlId="hm_1" className="mb-3">
                <Form.Label>Herramientas y Uniforme 1</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group controlId="hm_2" className="mb-3">
                <Form.Label>Herramientas y Uniforme 2</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </th>
          </tr>

          <tr>
            <th colSpan={2}>Antes</th>
            <th colSpan={2}>Durante</th>
          </tr>
          <tr>
            <td><Image src={img1} alt="img1" /></td>
            <td><Image src={img2} alt="img2" /></td>
            <td><Image src={img3} alt="img3" /></td>
            <td><Image src={img4} alt="img4" /></td>
          </tr>
          <tr>
            <th colSpan={2}>Después</th>
            <th colSpan={2}>Herramientas y Uniforme</th>
          </tr>
          <tr>
            <td><Image src={img1} alt="img1" /></td>
            <td><Image src={img2} alt="img2" /></td>
            <td><Image src={uniforme} alt="img3" /></td>
            <td><Image src={herramientas} alt="herramientas" /></td>
          </tr>
          <tr>
          </tr>
        </thead>
      </Table>

      


    </>
  );
};

export default ReporteFotografico;
