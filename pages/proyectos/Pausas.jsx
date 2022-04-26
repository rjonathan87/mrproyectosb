import { Alert, Button, Form, Table } from "react-bootstrap";

const Pausas = () => {
  return (
    <>
      <h4>Pausas de Trabajo</h4>

      {/* Lista */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Datos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Inicio:</b> 1 Enero 2022 20:30
              <br />
              <b>Final:</b> 2 Enero 2022 13:00
              <br />
              <b>Motivo de pausa:</b> Falta de acceso
              <br />
              <b>Resolución de pausa:</b> Se resolvió el problema positivamente
              <Alert variant='success'>
                ✔️ Motivo por el que SI se resolvió el problema negativamente
              </Alert>
            </td>
            <td>
              <button className="btn btn-light mx-2" title="Editar">✏️</button>
              <button className="btn btn-light" title="Eliminar">🗑️</button>
            </td>
          </tr>
          <tr>
            <td>
              <b>Inicio:</b> 1 Enero 2022 20:30
              <br />
              <b>Final:</b> 2 Enero 2022 13:00
              <br />
              <b>Motivo de pausa:</b> Falta de acceso
              <br />
              <b>Resolución de pausa:</b> 
              <Alert variant='danger'>
                ✖️ Motivo por el que NO se resolvió el problema negativamente
              </Alert>
            </td>
            <td>
              <button className="btn btn-light mx-2" title="Editar">✏️</button>
              <button className="btn btn-light" title="Eliminar">🗑️</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Pausas;
