import { Button, Form, Table } from "react-bootstrap";

const DesconexionesBitacora = () => {
  return (
    
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Fecha De Limpieza</th>
            <th>Id Cierre</th>
            <th>Contratista</th>
            <th>Coordenadas</th>
            <th>Puertos Limpiados (B)</th>
            <th>Precio Unitario por puerto MNX</th>
            <th>Precio Total MNX</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Group controlId="fecha_limpieza" className="mb-3">
                <Form.Control type="date" placeholder="Fecha De Limpieza" />
              </Form.Group>
            </td>
            <td>
              <Form.Group controlId="id_cierre" className="mb-3">
                <Form.Control type="text" placeholder="Id Cierre" />
              </Form.Group>
            </td>
            <td>
              <Form.Group controlId="contratista" className="mb-3">
                <Form.Control type="text" placeholder="Contratista" />
              </Form.Group>
            </td>
            <td>
              <Form.Group controlId="coordenadas" className="mb-3">
                <Form.Control type="text" placeholder="Coordenadas" />
              </Form.Group>
            </td>
            <td>
              <Form.Group controlId="puertos_limpiados" className="mb-3">
                <Form.Control type="number" placeholder="Puertos Limpiados (B)" />
              </Form.Group>
            </td>
            <td>
              <Form.Group controlId="precio_unitario_por_puerto" className="mb-3">
                <Form.Control type="number" step={.1} min='0' placeholder="Precio Unitario por puerto MNX" />
              </Form.Group>
            </td>
            <td>
              <Form.Group controlId="precio_total" className="mb-3">
                <Form.Control type="number" step={.1} min='0' placeholder="Precio Total MNX" />
              </Form.Group>
            </td>
            <td>
              <Button>+</Button>
            </td>
          </tr>
          <tr>
            <th colSpan={7} className="text-center">Folios Desconexiones</th>
          </tr>
          <tr>
            <td>21 Enero 2022</td>
            <td>123456</td>
            <td>ExpertCell</td>
            <td>19.4287907,-99.1274208</td>
            <td>22</td>
            <td>250.00</td>
            <td>5,500.00</td>
            <td>
              <Button className="btn btn-danger">-</Button>
            </td>
          </tr>
          <tr>
            <td>21 Enero 2022</td>
            <td>123456</td>
            <td>ExpertCell</td>
            <td>19.4287907,-99.1274208</td>
            <td>22</td>
            <td>250.00</td>
            <td>5,500.00</td>
            <td>
              <Button className="btn btn-danger">-</Button>
            </td>
          </tr>
          <tr>
            <td>21 Enero 2022</td>
            <td>123456</td>
            <td>ExpertCell</td>
            <td>19.4287907,-99.1274208</td>
            <td>22</td>
            <td>250.00</td>
            <td>5,500.00</td>
            <td>
              <Button className="btn btn-danger">-</Button>
            </td>
          </tr>
          <tr>
            <td>21 Enero 2022</td>
            <td>123456</td>
            <td>ExpertCell</td>
            <td>19.4287907,-99.1274208</td>
            <td>22</td>
            <td>250.00</td>
            <td>5,500.00</td>
            <td>
              <Button className="btn btn-danger">-</Button>
            </td>
          </tr>
          <tr>
            <td>21 Enero 2022</td>
            <td>123456</td>
            <td>ExpertCell</td>
            <td>19.4287907,-99.1274208</td>
            <td>22</td>
            <td>250.00</td>
            <td>5,500.00</td>
            <td>
              <Button className="btn btn-danger">-</Button>
            </td>
          </tr>
          <tr>
            <td>21 Enero 2022</td>
            <td>123456</td>
            <td>ExpertCell</td>
            <td>19.4287907,-99.1274208</td>
            <td>22</td>
            <td>250.00</td>
            <td>5,500.00</td>
            <td>
              <Button className="btn btn-danger">-</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default DesconexionesBitacora;
