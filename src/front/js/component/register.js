import React, { useState } from 'react';

export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await fetch("https://supernatural-spooky-wand-q7xg5vgv9q6295xr-3001.app.github.dev/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        if (response.ok) {
            alert("Usuario registrado correctamente");
        } else {
            alert("Error al registrar el usuario");
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Registrarse</button>
        </form>
    );
};


