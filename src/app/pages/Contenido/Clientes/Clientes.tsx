import { SmartwaterContext } from "../../../SmartwaterContext";
import { FiltroPaginado } from "../../components/FiltroPaginado/FiltroPaginado";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { AgregarCliente } from "./AgregarCliente/AgregarCliente";
import "./Clientes.css";
import { FC, useContext } from "react";

const Clientes: FC = () => {

    const { showModal, setShowModal } = useContext(SmartwaterContext);

    const AddCliente = () => {
        setShowModal(true)
    }

    return (
        <>
            <div>
                <PageTitle titulo="Clientes" icon="./clientes-icon.svg" />
                <FiltroPaginado add={true} exportar={true} paginacion={true} onAdd={AddCliente}>
                    
                </FiltroPaginado>
            </div>
            {showModal && <AgregarCliente/>}
        </>
    )
}

export { Clientes }