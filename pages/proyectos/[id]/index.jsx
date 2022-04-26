import { useRouter } from "next/router";
import HojaProceso from "../HojaProceso";
import Levantamiento from "../Levantamiento";
import Plan from "../Plan";
import Ejecucion from "../Ejecucion";
import Avances from "../Avances";
import Pausas from "../Pausas";
import Pregenerador from "../Pregenerador";


const index = () => {
  const {
    query: { id },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useRouter();

  return (
    <>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-pregenerador-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-pregenerador"
            type="button"
            role="tab"
            aria-controls="pills-pregenerador"
            aria-selected="true"
          >
            Pre Generador
          </button>
        </li>
        {/* <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-levantamiento-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-levantamiento"
            type="button"
            role="tab"
            aria-controls="pills-levantamiento"
            aria-selected="false"
          >
            Levantamiento
          </button>
        </li> */}
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-plan-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-plan"
            type="button"
            role="tab"
            aria-controls="pills-plan"
            aria-selected="false"
          >
            Plan de Trabajo
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-ejecucion-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-ejecucion"
            type="button"
            role="tab"
            aria-controls="pills-ejecucion"
            aria-selected="false"
          >
            Ejecucion
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-avances-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-avances"
            type="button"
            role="tab"
            aria-controls="pills-avances"
            aria-selected="false"
          >
            Avances
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-pausas-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-pausas"
            type="button"
            role="tab"
            aria-controls="pills-pausas"
            aria-selected="false"
          >
            Pausas
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-hojaproceso-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-hojaproceso"
            type="button"
            role="tab"
            aria-controls="pills-hojaproceso"
            aria-selected="false"
          >
            Hoja de Proceso
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-pregenerador"
          role="tabpanel"
          aria-labelledby="pills-pregenerador-tab"
        >
          <Pregenerador />
        </div>
        {/* <div
          className="tab-pane fade"
          id="pills-levantamiento"
          role="tabpanel"
          aria-labelledby="pills-levantamiento-tab"
        >
          <Levantamiento />
        </div> */}
        <div
          className="tab-pane fade"
          id="pills-plan"
          role="tabpanel"
          aria-labelledby="pills-plan-tab"
        >
          <Plan />
        </div>
        <div
          className="tab-pane fade"
          id="pills-ejecucion"
          role="tabpanel"
          aria-labelledby="pills-ejecucion-tab"
        >
          <Ejecucion />
        </div>
        <div
          className="tab-pane fade"
          id="pills-avances"
          role="tabpanel"
          aria-labelledby="pills-avances-tab"
        >
          <Avances />
        </div>
        <div
          className="tab-pane fade"
          id="pills-pausas"
          role="tabpanel"
          aria-labelledby="pills-pausas-tab"
        >
          <Pausas />
        </div>
        <div
          className="tab-pane fade"
          id="pills-hojaproceso"
          role="tabpanel"
          aria-labelledby="pills-hojaproceso-tab"
        >
          <HojaProceso />
        </div>
      </div>
    </>
  );
};

export default index;
