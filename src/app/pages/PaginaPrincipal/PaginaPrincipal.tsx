import "./PaginaPrincipal.css";
import { FC } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { BrowserRouter as Router } from 'react-router-dom';

const PaginaPrincipal: FC = () => {

    return (
        <>
            <Router>
                <div style={{ display: "flex" }}>
                    <Sidebar />
                    <h1>HOLA MUNDO</h1>
                </div>
            </Router>
        </>
    )
}

export { PaginaPrincipal }