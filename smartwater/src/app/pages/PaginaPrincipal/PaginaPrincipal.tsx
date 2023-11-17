import "./PaginaPrincipal.css";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { FC } from "react";
import { CuadroInformativo } from "../components/CuadroInformativo/CuadroInformativo";
import { CuadroClientes } from "../components/CuadroClientes/CuadroClientes";
import { CuadroRealizarPedido } from "../components/CuadroRealizarPedido/CuadroRealizarPedido";

const PaginaPrincipal: FC = () => {

    return (
        <>
            <div className="container">
                <Sidebar />
                <div className="contenido">
                    <div className="titulo-1">
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
                    <div className="titulo-2">
                        <span>Acciones rápidas</span>
                    </div>
                    <div className="Cuadros-AccionesRapidas">
                        <CuadroClientes />

                        <CuadroRealizarPedido />

                        <div className="cuadro-vacio">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { PaginaPrincipal }