import { AsideItem } from "../AsideMenu/AsideItem";
import "./Sidebar.css";
import { FC } from "react"

const Sidebar: FC = () => {

    return (
        <>
            <div className="Sidebar">
                <div className="Logo">
                    <span className="smart">Smart</span><span className="water">water</span>
                </div>
                <div>
                    <ul>
                        <li>
                            <AsideItem />
                        </li>
                    </ul>
                </div>

                {/* <div style={{ width: "100%", display: "inline-flex", justifyContent: "center", marginTop: "100px", marginBottom: "50px" }}>
                        <div className="boton-salir">
                            <div>
                                <img src="./Salir-icon.svg" />
                            </div>
                            <span>Salir</span>
                        </div>
                    </div> */}
            </div>
        </>
    )
}

export { Sidebar }