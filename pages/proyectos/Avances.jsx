import { Form, ProgressBar, Table } from "react-bootstrap";

const listaActividades = [
  {
    id: 1,
    nombre: "Validación de trayectorias",
    avance: 100
  },
  {
    id: 2,
    nombre: "Canalizado y encofrado (colocar metraje)",
    avance: 90
  },
  {
    id: 3,
    nombre: "Tendido aéreo de FO y bajada de poste",
    avance: 70
  },
  {
    id: 4,
    nombre: "Instalación de tubería (colocar metraje)",
    avance: 50
  },
  {
    id: 5,
    nombre: "Inmersión de F.O (colocar # de Splitters)",
    avance: 20
  },
];

const mapListaActividades = (listaActividades) => {
  return listaActividades.map((actividad) => {
    return (
      <tr key={actividad.id}>
        <th>{actividad.nombre}</th>
        <td>
          <ProgressBar 
            striped 
            variant={
              actividad.avance === 100 && 'success' 
              ||
              actividad.avance >= 50 && actividad.avance <= 99 && 'warning' 
              ||
              actividad.avance >= 0 && actividad.avance <= 49 && 'danger' 
            } 
            now={actividad.avance} 
            label={`${actividad.avance}%`} 
            animated 
          />
        </td>
      </tr>
    );
  });
}

const Avances = () => {
  return (
    <>
      <h4>Avances de Trabajo</h4>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Actividades</th>
            <th width="60%">Avance</th>
          </tr>
        </thead>
        <tbody>
          {mapListaActividades(listaActividades)}
        </tbody>
      </Table>
    </>
  );
};

export default Avances;
