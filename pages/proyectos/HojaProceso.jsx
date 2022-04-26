import { Form } from "react-bootstrap"

const labels = [
  {
    id: 1,
    label: "1.- Consigue el proyecto (Distritos o Empresa)",
  },
  {
    id: 2,
    label: "2.- Tipos de proyectos",
  },
  {
    id: 3,
    label: "3.- Levantamiento",
  },
  {
    id: 4,
    label: "3.1.- capturar información de levantamiento",
  },
  {
    id: 5,
    label: "4.- Acuerdo de realización (SI / NO)",
  },
  {
    id: 6,
    label: "4.1.- Almacenamiento de documentación del proyecto",
  },
  {
    id: 7,
    label: "5.- SI",
  },
  {
    id: 8,
    label: "5.1.- Creación del plan de trabajo",
  },
  {
    id: 9,
    label: "5.2.- Ejecuta el plan de trabajo",
  },
  {
    id: 10,
    label: "5.3.- Revisión de materiales en almacén",
  },
  {
    id: 11,
    label: "5.3.1.- Se tiene material, se procede el punto 6",
  },
  {
    id: 12,
    label: "5.3.2.- No se tiene: proyecto pausado hasta que se tiene el material",
  },
  {
    id: 13,
    label: "6.- Comienza la ejecución del proyecto",
  },
  {
    id: 14,
    label: "7.- Avances en % en tiempo de ejecución",
  },
  {
    id: 15,
    label: "8.- justificación de las pausas del proyecto",
  },
  {
    id: 16,
    label: "8.1.- Solución positiva",
  },
  {
    id: 17,
    label: "8.2.- Solución negativa",
  },
  {
    id: 18,
    label: "9.- Finalización del proyecto ",
  },
  {
    id: 19,
    label: "9.1.- Documentación Generador",
  },
  {
    id: 20,
    label: "9.1.1.- Revisión de los documentos (Generador, CheckList, KMZ)",
  },
  {
    id: 21,
    label: "9.2.- No se tiene: proyecto pausado hasta que se tiene el material",
  },
]

const listItems = labels.map((label) =>
  <Form.Group className="mb-3" key={label.id}>
      <Form.Check 
        type={'checkbox'}
        id={`label-${label.id}`}
        label={`${label.label}`}
      />
  </Form.Group>
);

const HojaProceso = () => {
  return (
    <>
      {listItems}
    </>
  )
}

export default HojaProceso

// ? 1.- Consigue el proyecto (Distritos o Empresa) (le toca a Isaac)
// ? 2.- Tipos de proyectos (catálogo)
// ? 3.- Levantamiento (en caso de no tenerse por parte de DTTO)
// ! 3.1.- capturar información de levantamiento
// ? 4.- Acuerdo de realización (SI / NO)
// ! 4.1.- almacenamiento de documentación del proyecto
// ? 5.- SI
// * 5.1.- Creación del plan de trabajo (Isaac)
// * 5.2.- Ejecuta (Despacho y Guillermo)
// * 5.3.- Revisión de materiales en almacén
// * 5.3.1.- Se tiene material, se procede el punto 6
// * 5.3.2.- No se tiene: proyecto pausado hasta que se tiene el material
// ? 6.- Comienza la ejecución del proyecto
// ? 7.- Avances en % en tiempo de ejecución
// ? 8.- justificación de las pausas del proyecto
// * 8.1.- Solución positiva
// * 8.2.- Solución negativa
// ? 9.- Finalización del proyecto 
// * 9.1.- Documentación Generador
// * 9.1.1.- Revisión de los documentos (Generador, CheckList, KMZ)
// * 9.2.- No se tiene: proyecto pausado hasta que se tiene el material