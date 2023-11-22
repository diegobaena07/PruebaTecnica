import "./Inicio.css";
import { FC } from "react";
import { BarChart } from "../../components/Barchart/Barchart";
import { CuadroInformativo } from "../../components/CuadroInformativo/CuadroInformativo";
import { CuadroClientes } from "../../components/CuadroClientes/CuadroClientes";
import { CuadroRealizarPedido } from "../../components/CuadroRealizarPedido/CuadroRealizarPedido";

const Inicio: FC = () => {

    return (
        <>
            <div className="Contenido-Inicio">
                <h1>INICIO</h1>
                {/* <div className="Cuadros-informativos">
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
                <BarChart /> */}
            </div>
        </>
    )
}

export { Inicio }