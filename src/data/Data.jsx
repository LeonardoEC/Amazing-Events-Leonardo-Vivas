import { useState, useEffect } from 'react';

const DATA = () => {
    const [datos, setDatos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://mindhub-xj03.onrender.com/api/amazing')
            .then(response => response.json())
            .then(data => {
                // Aquí puedes agregar las nuevas propiedades a tus datos
                for (let dateEvents of data.events) {
                    if (dateEvents.date <= data.currentDate) {
                        dateEvents.time = "past"
                        dateEvents.assistancepercentage = Number(((dateEvents.assistance / dateEvents.capacity) * 100).toFixed(2))
                        dateEvents.revenues = dateEvents.price * dateEvents.assistance
                    }
                    if (dateEvents.date >= data.currentDate) {
                        dateEvents.time = "upcoming"
                        dateEvents.estimatepercentage = Number(((dateEvents.estimate / dateEvents.capacity) * 100).toFixed(2))
                        dateEvents.revenues = dateEvents.price * dateEvents.estimate
                    }
                }
                setDatos(data);
                setIsLoading(false);
            });
    }, []);

    return { datos, isLoading };
}

export default DATA