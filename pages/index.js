import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h4>Lista de Proyectos</h4>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr className="text-center">
              <th scope="col">#</th>
              <th scope="col">Proyecto</th>
              <th scope="col">Datos</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Proyecto 1</td>
              <td>Fecha: 22/02/2020</td>
              <td className="d-flex justify-content-evenly">
                <Link href={`/proyectos/1`}>
                  <a className="btn btn-success" title="Editar">
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </a>
                </Link>
                <Link href="/">
                  <a className="btn btn-danger" title="Eliminar">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Proyecto 2</td>
              <td>Fecha: 22/02/2020</td>
              <td className="d-flex justify-content-evenly">
                <Link href={`/proyectos/2`}>
                  <a className="btn btn-success" title="Editar">
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </a>
                </Link>
                <Link href="/">
                  <a className="btn btn-danger" title="Eliminar">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Proyecto 3</td>
              <td>Fecha: 22/02/2020</td>
              <td className="d-flex justify-content-evenly">
                <Link href={`/proyectos/3`}>
                  <a className="btn btn-success" title="Editar">
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </a>
                </Link>
                <Link href="/">
                  <a className="btn btn-danger" title="Eliminar">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </a>
                </Link>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Proyecto 4</td>
              <td>Fecha: 22/02/2020</td>
              <td className="d-flex justify-content-evenly">
                <Link href={`/proyectos/4`}>
                  <a className="btn btn-success" title="Editar">
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </a>
                </Link>
                <Link href="/">
                  <a className="btn btn-danger" title="Eliminar">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </a>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
