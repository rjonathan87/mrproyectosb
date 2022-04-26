import HojaCampo from "./levantamiento/HojaCampo";
import Materiales from "./levantamiento/Materiales";
import ReporteFotografico from "./levantamiento/ReporteFotografico";
import Servicios from "./levantamiento/Servicios";
import KmzUbicacion from "./levantamiento/KmzUbicacion";
import QrEntregables from "./levantamiento/QrEntregables";
import DesconexionesBitacora from "./levantamiento/DesconexionesBitacora";
import Soportes from "./levantamiento/Soportes";
import Mapa from "./levantamiento/Mapa";
import Ingenierias from "./levantamiento/Ingenierias";

const Levantamiento = () => {
  return (
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link"
            id="v-pills-servicios-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-servicios"
            type="button"
            role="tab"
            aria-controls="v-pills-servicios"
            aria-selected="false"
          >
            Servicios
          </button>
          <button
            className="nav-link"
            id="v-pills-materiales-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-materiales"
            type="button"
            role="tab"
            aria-controls="v-pills-materiales"
            aria-selected="false"
          >
            Materiales
          </button>
          <button
            className="nav-link"
            id="v-pills-hoja_campo-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-hoja_campo"
            type="button"
            role="tab"
            aria-controls="v-pills-hoja_campo"
            aria-selected="false"
          >
            Hoja de Campo
          </button>
          <button
            className="nav-link"
            id="v-pills-reporte_fotografico-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-reporte_fotografico"
            type="button"
            role="tab"
            aria-controls="v-pills-reporte_fotografico"
            aria-selected="false"
          >
            Reporte Fotográfico
          </button>
          <button
            className="nav-link"
            id="v-pills-kmz_ubicacion-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-kmz_ubicacion"
            type="button"
            role="tab"
            aria-controls="v-pills-kmz_ubicacion"
            aria-selected="false"
          >
            KMZ de Ubicación
          </button>
          <button
            className="nav-link"
            id="v-pills-mapa-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-mapa"
            type="button"
            role="tab"
            aria-controls="v-pills-mapa"
            aria-selected="false"
          >
            Mapa
          </button>
          <button
            className="nav-link"
            id="v-pills-qr_entregables-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-qr_entregables"
            type="button"
            role="tab"
            aria-controls="v-pills-qr_entregables"
            aria-selected="false"
          >
            QR y Entregables
          </button>
          <button
            className="nav-link"
            id="v-pills-soportes-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-soportes"
            type="button"
            role="tab"
            aria-controls="v-pills-soportes"
            aria-selected="false"
          >
            Soportes
          </button>
          <button
            className="nav-link"
            id="v-pills-ingenierias-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-ingenierias"
            type="button"
            role="tab"
            aria-controls="v-pills-ingenierias"
            aria-selected="false"
          >
            Ingenierías
          </button>
          <button
            className="nav-link"
            id="v-pills-desconexiones_bitacora-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-desconexiones_bitacora"
            type="button"
            role="tab"
            aria-controls="v-pills-desconexiones_bitacora"
            aria-selected="false"
          >
            Desconexiones Bitácora
          </button>
          
        </div>

        {/* TABS CONTENT */}
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade"
            id="v-pills-servicios"
            role="tabpanel"
            aria-labelledby="v-pills-servicios-tab"
          >
            <Servicios />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-materiales"
            role="tabpanel"
            aria-labelledby="v-pills-materiales-tab"
          >
            <Materiales />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-hoja_campo"
            role="tabpanel"
            aria-labelledby="v-pills-hoja_campo-tab"
          >
            <HojaCampo />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-reporte_fotografico"
            role="tabpanel"
            aria-labelledby="v-pills-reporte_fotografico-tab"
          >
            <ReporteFotografico />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-kmz_ubicacion"
            role="tabpanel"
            aria-labelledby="v-pills-kmz_ubicacion-tab"
          >
            <KmzUbicacion />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-qr_entregables"
            role="tabpanel"
            aria-labelledby="v-pills-qr_entregables-tab"
          >
            <QrEntregables />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-desconexiones_bitacora"
            role="tabpanel"
            aria-labelledby="v-pills-desconexiones_bitacora-tab"
          >
            <DesconexionesBitacora />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-soportes"
            role="tabpanel"
            aria-labelledby="v-pills-soportes-tab"
          >
            <Soportes />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-mapa"
            role="tabpanel"
            aria-labelledby="v-pills-mapa-tab"
          >
            <Mapa />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-ingenierias"
            role="tabpanel"
            aria-labelledby="v-pills-ingenierias-tab"
          >
            <Ingenierias />
          </div>
        </div>
      </div>
  );
};

export default Levantamiento;
