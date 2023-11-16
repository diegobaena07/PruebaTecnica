import "./PaginaPrincipal.css";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { FC } from "react";

const PaginaPrincipal: FC = () => {

    return (
        <>
            <div>
                <Sidebar/>
            </div>
        </>
    )
}

export { PaginaPrincipal }