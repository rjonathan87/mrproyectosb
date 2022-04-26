import { Form } from "react-bootstrap";

const Documentos = () => {
  return (
    <>
      <Form.Group controlId="file_pregenerador_xls" className="mb-3">
        <Form.Label>Pregenerador Excel</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="file_pregenerador_pdf" className="mb-3">
        <Form.Label>Pregenerador PDF</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="file_checklist" className="mb-3">
        <Form.Label>Checklist</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="file_kmz" className="mb-3">
        <Form.Label>KMZ</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </>
  );
};

export default Documentos;
