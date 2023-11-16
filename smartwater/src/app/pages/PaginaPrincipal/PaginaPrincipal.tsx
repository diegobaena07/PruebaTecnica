import "./PaginaPrincipal.css";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { FC } from "react";
import { CuadroInformativo } from "../components/CuadroInformativo/CuadroInformativo";

const PaginaPrincipal: FC = () => {

    return (
        <>
            <div className="container">
                <Sidebar />
                <div className="contenido">
                    <div className="linea-1">
                        <div className="home">
                            <img src="./home-icon.svg" className="img-HomeInicio" />
                            <div className="letras-home">
                                <span>Inicio</span>
                            </div>
                        </div>
                        <div>
                            <img src="./Notificacion-icon.svg" />
                        </div>
                    </div>
                    <div className="Cuadros-informativos">
                        <CuadroInformativo
                            titulo="Clientes nuevos"
                            numero="18"
                            porcentajeVerde="+8.2%" />

                        <CuadroInformativo
                            titulo="Préstamos activos"
                            numero="25"
                            porcentajeRojo="+8.2%" />

                        <CuadroInformativo
                            titulo="Pedidos totales"
                            numero="1,236"
                            porcentajeVerde="+8.2%" />

                        <CuadroInformativo
                            titulo="Clientes nuevos"
                            numero="1,783"
                            letra="Bs"
                            porcentajeVerde="+8.2%" />
                    </div>
                </div>
            </div>
        </>
    )
}

export { PaginaPrincipal }