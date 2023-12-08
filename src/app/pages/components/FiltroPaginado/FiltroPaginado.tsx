import "./FiltroPaginado.css";
import { FC, ReactNode } from "react";

type Componentes = {
    exportar: boolean;
    add: boolean;
    paginacion: boolean;
    children?: ReactNode;
    onAdd?: () => void;
};

const FiltroPaginado: FC<Componentes> = ({ exportar, add, paginacion, children, onAdd }) => {

    return(
        <>
        <div className="filtro-contenido" style={{marginTop: "2em", maxHeight: "100vh"}}>
            <div style={{ width:"100%", display: "flex"}}>
                <div style={{ width:"70%", minWidth: "70%", marginRight: "2em", display: "flex", flexDirection: "column"}}>
                    <form className="search__container" onSubmit={(e) => e.preventDefault()} role="Buscar">
                        <input className="search__input" type="text" placeholder="Buscar" required />
                        <button type="submit" className="boton-buscar">
                            <img style={{width: "24px", height: "24.5px"}} src="./Buscar.svg" alt="" />
                        </button>
                    </form>
                    <div style={{ width:"100%", display: "flex", justifyContent: "end", gap: "50px"}}>
                        <div className="resultado-busqueda">
                            <span>Resultados:</span>
                            <span style={{color: "#1A3D7D"}}> 42</span>
                        </div>
                        <div className="resultado-busqueda">
                            <span>Ordenar por: </span>
                            <select className="select-filtro" name="filter">
                                <option value="">Más reciente</option>
                                <option value="">Más antiguos</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: "6px", display: "flex", justifyContent:"space-between",  gap: "90px", height: "30px", width: "30%"}}>
                    <div>
                        <button type="button" className="boton-filtro">
                            <span style={{marginRight: "5px"}}>Filtrar</span>
                            <img src="./Filtro.svg" alt="Filtro" />
                        </button>
                    </div>
                    {paginacion && 
                        <div style={{display: "flex", gap: "15px", width: "145px", minWidth: "145px"}}>
                            <div>
                                <button type="button" className="boton-paginado">
                                    <img style={{transform: "rotate(90deg)"}} src="./Desplegable-icon.svg" alt="" />
                                </button>
                            </div>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <span className="text-paginado">3 De 20</span>
                            </div>
                            <div>
                                <button type="button" className="boton-paginado">
                                    <img style={{transform: "rotate(-0.25turn)"}} src="./Desplegable-icon.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div style={{height: "62vh", maxHeight: "62vh", backgroundColor: "black", marginTop: "1em", marginBottom: "1em"}}>
                {children}
            </div>
            {paginacion &&
                <div style={{width: "100%", display: "flex", justifyContent: "end"}}>
                    <div style={{display: "flex", gap: "15px", width: "145px", minWidth: "145px"}}>
                        <div>
                            <button type="button" className="boton-paginado">
                                <img style={{transform: "rotate(90deg)"}} src="./Desplegable-icon.svg" alt="" />
                            </button>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <span className="text-paginado">3 De 20</span>
                        </div>
                        <div>
                            <button type="button" className="boton-paginado">
                                <img style={{transform: "rotate(-0.25turn)"}} src="./Desplegable-icon.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            }
            <div style={{width: "100%", display:"flex", justifyContent: "space-between", alignItems: "end"}}>
                {exportar && 
                    <div className="boton-exportar">
                        <button type="button" className="btn-export">
                            <img src="./IconDocumento.svg" alt="" />
                        </button>
                        <span style={{textAlign: "center"}}>Exportar</span>
                    </div>
                }
                {add && onAdd &&
                    <div style={{marginBottom: "1em"}}>
                        <button type="button" className="btn-agregar" onClick={onAdd}>
                            <img src="./IconMas.svg" alt="" />
                        </button>
                    </div>
                }
            </div>
        </div>
        </>
    )
}

export{ FiltroPaginado }