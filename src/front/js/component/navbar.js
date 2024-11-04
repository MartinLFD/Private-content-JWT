import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");  // Elimina el token
        navigate("/");  // Redirige a la página de inicio de sesión
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">React Boilerplate</span>
                </Link>
                <div className="ml-auto">
                    <Link to="/demo">
                        <button className="btn btn-primary">Check the Context in action</button>
                    </Link>
                    <button onClick={handleLogout} className="btn btn-secondary ml-2">
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </nav>
    );
};
