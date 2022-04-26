import Link from "next/link";
import { Form, Table } from "react-bootstrap";

const Plan = () => {
  return (
    <>
      <div>
        <Table 
          responsive="sm" 
          striped 
          hover 
          bordered 
          className="text-center align-middle shadow">
          <thead>
            <tr>
              <th colSpan={3}>
                DIAS TOTALES DE CONSTRUCCIÓN PROMEDIO: XX
              </th>
              <th colSpan={14}>
                INICIO 
                <Form.Group controlId="plan_fecha_inicio" className="mb-3">
                  <Form.Control type="date" />
                </Form.Group>
              </th>
              <th colSpan={14}>
                Término 
                <Form.Group controlId="plan_fecha_termino" className="mb-3">
                  <Form.Control type="date" />
                </Form.Group>
              </th>
            </tr>
          </thead>
          <thead className="bg-danger text-light text-center">
            <tr>
              <th colSpan={3}></th>
              <th colSpan={7}>SEMANA 1</th>
              <th colSpan={7}>SEMANA 2</th>
              <th colSpan={7}>SEMANA 3</th>
              <th colSpan={7}>SEMANA 4</th>
            </tr>
            <tr>
              <td colSpan={3}>Actividades</td>
              <td>L</td>
              <td>M</td>
              <td>M</td>
              <td>J</td>
              <td>V</td>
              <td>S</td>
              <td>D</td>
              <td>L</td>
              <td>M</td>
              <td>M</td>
              <td>J</td>
              <td>V</td>
              <td>S</td>
              <td>D</td>
              <td>L</td>
              <td>M</td>
              <td>M</td>
              <td>J</td>
              <td>V</td>
              <td>S</td>
              <td>D</td>
              <td>L</td>
              <td>M</td>
              <td>M</td>
              <td>J</td>
              <td>V</td>
              <td>S</td>
              <td>D</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td colSpan={2} className="align-left">Planta Externa</td>
              <td colSpan={28}></td>
            </tr>
            <tr>
              <td>1</td>
              <td colSpan={2}>
                <Link href="/">
                  <a>
                    Validación de trayectorias
                  </a>
                </Link>
              </td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
            </tr>
            <tr>
              <td>2</td>
              <td colSpan={2}>Canalizado y encofrado (colocar metraje)</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Tendido aéreo de FO y bajada de poste</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
            </tr>
            <tr>
              <td>4</td>
              <td colSpan={2}>Instalación de tubería (colocar metraje)</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
            </tr>
            <tr>
              <td>5</td>
              <td colSpan={2}>Inmersión de F.O (colocar # de Splitters)</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
              <td>x</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Plan;
