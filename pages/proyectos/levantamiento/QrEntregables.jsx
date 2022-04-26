import Image from "next/image";
import { Form, Table } from "react-bootstrap";
import qr from '../../api/qr.png';

const QrEntregables = () => {
  
  return (
    <>
      <Form.Group controlId={'qr_'} className="mb-3">
        <Form.Control type="file" />
      </Form.Group>

      <Table>
        <tbody>
          <tr>
            <td>
              <Image src={qr} alt="qr" />
            </td>
            <td>
              <Image src={qr} alt="qr" />
            </td>
            <td>
              <Image src={qr} alt="qr" />
            </td>
          </tr>
          <tr>
            <td>
              <Image src={qr} alt="qr" />
            </td>
            <td>
              <Image src={qr} alt="qr" />
            </td>
            <td>
              <Image src={qr} alt="qr" />
            </td>
          </tr>
          <tr>
            <td>
              <Image src={qr} alt="qr" />
            </td>
            <td>
              <Image src={qr} alt="qr" />
            </td>
            <td>
              <Image src={qr} alt="qr" />
            </td>
          </tr>
          <tr>
            <td>
              <Image src={qr} alt="qr" />
            </td>
            <td>
              <Image src={qr} alt="qr" />
            </td>
            <td>
              <Image src={qr} alt="qr" />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default QrEntregables;
