import "./CuadroRealizarPedido.css";

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
                        <select name="cliente" id="cliente" className="selec-pedido">
                            <option className="opcion1" value="opciones1" >Cliente</option>
                        </select>
                        <select name="cliente" id="cliente" className="selec-pedido">
                            <option value="opciones1" >Botellon de 20 Lts</option>
                        </select>
                        <div style={{ marginTop: "11px" }}>
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
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export { CuadroRealizarPedido }