import { useEffect, useState } from "react";

export const useFecth = (url, flag) => {
    console.log("Ejecutando funcion fetch");
    const[fetchResponse, setFetchResponse] = useState('...');

    useEffect(() => {

        const fetchRequest = async () =>{
            console.log("Realizando petición");
            let res = await fetch(url);
            let data = await res.json();
            setFetchResponse(data.value);
        };

        fetchRequest();
    }, [url, flag]);

    return {fetchResponse};

};
