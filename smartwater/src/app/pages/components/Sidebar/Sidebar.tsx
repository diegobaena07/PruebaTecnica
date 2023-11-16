import "./Sidebar.css";
import { FC } from "react"

const Sidebar: FC = () =>{

    return(
        <>
        <aside className="sidebar">
            <div className="Logo">
                <span className="smart">Smart</span><span className="water">water</span>
            </div>
            <div className="frame">
                <div className="inicio">
                    <div className="frame_1">
                        <img src="./home-icon.svg" />
                        <div className="letras_inicio">
                            <span className="letras_1">Inicio</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="frame_2">
                        <img src="./clientes-icon.svg" />
                        <div className="letras_inicio">
                            <span className="letras">Clientes</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="frame_2">
                        <img src="./ubicacion-icon.svg" />
                        <div className="letras_3">
                            <span>Mapa de clientes</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        </>
    )
}

export {Sidebar}