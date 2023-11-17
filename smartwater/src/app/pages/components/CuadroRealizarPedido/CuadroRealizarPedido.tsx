import "./CuadroRealizarPedido.css";

const EnviarPedido = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Pedido Realizado")
}

const CuadroRealizarPedido = () => {
    return (
        <>
            <form action="">
                <div className="RealizarPedidoCuadro">
                    <div className="titulo-RealizarPedido">
                        <div>
                            <span className="RealizarPedido-title">Realizar Pedido</span>
                        </div>
                        <div className="opciones-svg">
                            <img src="./Opciones-icon.svg" />
                        </div>
                    </div>
                    <div>
                        <div className="selec-pedido" style={{ display: "flex", alignItems: "center" }}>
                            <select name="cliente" id="cliente">
                                <option className="opcion1" value="opciones1" >Cliente</option>
                            </select>
                            <i><img src="./FlechaAbajo-icon.svg" /></i>
                        </div>
                        <div className="selec-pedido" style={{ display: "flex", alignItems: "center" }}>
                            <select name="cliente" id="cliente">
                                <option className="opcion1" value="opciones1" >Botellon de 20 Lts</option>
                            </select>
                            <i><img src="./FlechaAbajo-icon.svg" /></i>
                        </div>
                        <div style={{ marginTop: "11px", gap: "15px", display: "flex" }}>
                            <div className="cantidad-pedido">
                                <span style={{ marginLeft: "10px" }}>Cantidad</span>
                                <div className="numero-pedido">
                                    <button type="button" className="boton"><img src="./BotonMenos-icon.svg" /></button>
                                    <div className="numero-solicitado">
                                        <span>1</span>
                                    </div>
                                    <button type="button" className="boton"><img src="./BotonMas-icon.svg" /></button>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <input type="text" defaultValue="15" className="numero-input" />
                                <div className="letras-Bs"
                                    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div>
                                        <span>Bs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "17px" }}>
                            <button type="submit" onClick={(e) => EnviarPedido(e)} className="btn-realizarPedido"><span>Realizar Pedido</span></button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export { CuadroRealizarPedido }