import { AsideItem } from "../AsideMenu/AsideItem";
import { AsideSubMenu } from "../AsideSubMenu/AsideSubMenu";
import "./Sidebar.css";
import { FC } from "react"

const Sidebar: FC = () => {

    return (
        <>
            <div className="Sidebar scrool">
                <div className="Logo">
                    <span className="smart">Smart</span><span className="water">water</span>
                </div>
                <div>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "17px" }}>
                        <AsideItem
                            tituloItem="Inicio"
                            to="/Inicio"
                            icon="./home-icon.svg"
                        />
                        <AsideItem
                            tituloItem="Clientes"
                            to="/Clientes"
                            icon="./clientes-icon.svg"
                        />
                        <AsideItem
                            tituloItem="Mapa de clientes"
                            to="/MapaClientes"
                            icon="./ubicacion-icon.svg"
                        />
                        <AsideItem
                            tituloItem="Monitoreo de Distribuidores"
                            to="/MonitoreoDistribuidores"
                            icon="./envio-cronometrado 1.png"
                        />
                        <AsideItem
                            tituloItem="Ventas"
                            to="/Ventas"
                            icon="./Ventas-icon.svg"
                        />
                        <AsideItem
                            tituloItem="Pedidos"
                            to="/Pedidos"
                            icon="./Pedidos-icon.svg"
                            notificacion="1"
                        />
                        <AsideItem
                            tituloItem="Préstamos"
                            to="/Préstamos"
                            icon="./Prestamos-icon.svg"
                        />
                        <AsideSubMenu
                            tituloItem="Finanzas"
                            icon="./Finanzas-icon.svg"
                            opciones={[
                                { titulo: "Arqueo de cajas", to: "/Finanzas/ArqueoDeCajas" },
                                { titulo: "Cuentas por cobrar - cobros", to: "/Finanzas/CuentasPorCobrarCobros" },
                                { titulo: "Egresos y gastos (listado)", to: "/Finanzas/Egresos-Y-Gastos" },
                                { titulo: "Proveedores (listados)", to: "/Finanzas/Proveedores" },
                                { titulo: "Cuentas por pagar", to: "/Finanzas/CuentasPorPagar" },
                            ]}
                        />
                        <AsideSubMenu
                            tituloItem="Reportes"
                            icon="./Reportes-icon.svg"
                            opciones={[
                                { titulo: "Ingresos (cuentas por cobrar)", to: "/Reportes/Ingresos(CuentasPorCobrar)" },
                                { titulo: "Egresos (cuentas por pagar)", to: "/Reportes/Egresos(CuentasPorPagar)" },
                                { titulo: "Resultados", to: "/Reportes/Resultados" },
                            ]}
                        />
                        <AsideSubMenu
                            tituloItem="Configuración"
                            icon="./Configuracion-icon.svg"
                            opciones={[
                                { titulo: "Configuración general", to: "/Configuración/ConfiguraciónGeneral" },
                                { titulo: "Usuario", to: "/Configuración/Usuario" },
                                { titulo: "Barrios", to: "/Configuración/Barrios" },
                                { titulo: "Zonas", to: "/Configuración/Zonas" },
                                { titulo: "Productos", to: "/Configuración/Productos" },
                                { titulo: "Items", to: "/Configuración/Items" },
                            ]}
                        />
                    </ul>
                </div>

                <div style={{ width: "100%", display: "inline-flex", justifyContent: "center", alignItems: "end", marginTop: "120px", marginBottom: "30px", }}>
                    <button className="btn-salir">
                        <div style={{ display: "inline-flex", justifyContent: "center" }}>
                            <img src="./Salir-icon.svg" />
                        </div>
                        <span>Salir</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export { Sidebar }