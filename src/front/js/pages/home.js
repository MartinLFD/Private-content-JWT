import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import { Register } from "../component/register";
import { Login } from "../component/login";
import { PrivateContent } from "../component/privateContent";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handlePrivateContent = () => {
        const token = localStorage.getItem("token");
        if (token) {
            
            console.log(token)
            navigate("/private"); 
        } else {
            navigate("/login");   
        }
    };

    return (
        <div className="text-center mt-5">
            <h1>Regístrate</h1>
            <Register />
            
            <h2>Inicia sesión</h2>
            <Login />

            <Link to="/private" onClick={handlePrivateContent} className="btn btn-primary mt-3">
                Acceder a Contenido Privado
            </Link>
        </div>
    );
};
