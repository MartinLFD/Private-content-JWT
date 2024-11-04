import React, { useEffect, useState } from 'react';

export function PrivateContent() {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            const response = await fetch("https://supernatural-spooky-wand-q7xg5vgv9q6295xr-3001.app.github.dev/api/private", {
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` },
            });
            
            if (response.ok) {
                const data = await response.json();
                setContent(data.message);
            } else {
                setContent("No autorizado. Inicia sesión.");
            }
        };
        fetchData();
    }, []);

    return <div>Hola soy el contenido privado de esta página .__.</div>;
};


