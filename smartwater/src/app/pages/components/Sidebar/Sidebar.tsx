import "./Sidebar.css";
import { AsideItem } from "../AsideMenu/AsideItem";
import { FC } from "react"

const Sidebar: FC = () => {

    return (
        <>
            <aside className="sidebar">
                <div className="Logo">
                    <span className="smart">Smart</span><span className="water">water</span>
                </div>
                <div className="frame">
                    <div className="inicio">
                        <img src="./home-icon.svg" />
                        <div className="letras_inicio">
                            <span className="letras_1">Inicio</span>
                        </div>
                    </div>
                    <AsideItem
                        titulo="Clientes"
                        img="./clientes-icon.svg" />
                    <AsideItem
                        titulo="Mapa de clientes"
                        img="./ubicacion-icon.svg" />
                    <AsideItem
                        titulo="Monitoreo de Distribuidores"
                        img="./envio-cronometrado 1.png" />
                    <AsideItem
                        titulo="Ventas"
                        img="./Ventas-icon.svg" />
                    <div className="item-pedidos">
                        <AsideItem
                            titulo="Pedidos"
                            img="./Pedidos-icon.svg" />
                        <div className="notificacion">1</div>
                    </div>
                    <AsideItem
                        titulo="Préstamos"
                        img="./Prestamos-icon.svg" />
                    <AsideItem
                        titulo="Finanzas"
                        img="./Finanzas-icon.svg"
                        iconDesplegable="Desplegable-icon.svg" />
                    <AsideItem
                        titulo="Reportes"
                        img="./Reportes-icon.svg"
                        iconDesplegable="Desplegable-icon.svg" />
                    <AsideItem
                        titulo="Configuracion"
                        img="./Configuracion-icon.svg"
                        iconDesplegable="Desplegable-icon.svg" />
                </div>
                <div style={{ width: "100%", display: "inline-flex", justifyContent: "center", marginTop: "100px", marginBottom: "50px" }}>
                    <div className="boton-salir">
                        <div>
                            <img src="./Salir-icon.svg" />
                        </div>
                        <span>Salir</span>
                    </div>
                </div>
            </aside>
        </>
    )
}

export { Sidebar }