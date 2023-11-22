import "./PaginaPrincipal.css";
import { FC } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Clientes } from "../Contenido/Clientes/Clientes";
import { Inicio } from "../Contenido/Inicio/Inicio";

const PaginaPrincipal: FC = () => {

    return (
        <>
            <Router>
                <div style={{ display: "flex" }}>
                    <Sidebar />
                    <div className="content">
                        <Routes>
                            <Route path="" element={<Navigate to='/Inicio' />} />

                            <Route path='/Inicio' element={<Inicio />} />

                            <Route path='/Clientes' element={<Clientes />} />

                            <Route path="*" element={<Navigate to='/Inicio' />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
}

export { PaginaPrincipal }