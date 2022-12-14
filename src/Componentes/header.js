import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useFecth } from "../Hooks/consumo";

const fechaHoraActual = () => {
    let currentDate = new Date();
    let dateTime = currentDate.getDate() + "/"
    + (currentDate.getMonth() + 1) + "/"
    + currentDate.getFullYear() + " - "
    + currentDate.getHours() + ":"
    + currentDate.getMinutes() + ":"
    + currentDate.getSeconds();
    return dateTime;
}

export const Header = ({numero}) => {
    return <div className="unir-header">
        <p><b>UNIR - HEADER{numero}</b></p>
        <b>{fechaHoraActual()}</b>
    </div>;
};

export const Hook = ({numero}) => {
    const[contador, setContador] = useState(0);
    console.log("Renderizando.." + contador);

    return <div className="unir-header">
        <p><b>UNIR-HEADER{numero}</b></p>
        <b>{contador}</b>
        <br></br>
        <button onClick={() => setContador(
            contador+1)
        }> Modificar estado</button>
    </div>
};

export const PruebaEfect = ({numero}) => {
    const[contadorUno, setContadorUno] = useState(0);
    const[contadorDos, setContadorDos] = useState(0);

    useEffect(() =>{
        console.log("EFecto una vez")
    }, []);

    useEffect(() =>{
        console.log("Efecto con dependencia");
    });
    
    useEffect(()=>{
        console.log("Efecto ligado 1 cambiado");
    }, [contadorUno]);

    useEffect(()=>{
        console.log("Efecto ligado 2 cambiado");
    }, [contadorDos]);

    return <div className="unir-header">
        <p><b>UNIR-HEADER {numero}</b></p>
        <b>{contadorUno}</b>
        <br></br>
        <button onClick={() => setContadorUno(contadorUno + 1)}>Modificar contador 1</button> 
        <br></br>
        <b>{contadorDos}</b>
        <br></br>
        <button onClick={() => setContadorDos(contadorDos + 1)}>Modificar contador 2</button> 

    </div>

};

export const FetchUse = ({numero}) => {

    const[contadorUno, setContadorUno] = useState(0);
    const{fetchResponse} = useFecth("https://api.chucknorris.io/jokes/random", contadorUno);

    console.log("Montando header");
    return <div className="unir-header">
        <p><b>UNIR-HEADER{numero}</b></p>
        <b>{fetchResponse}</b>
        <br></br>
        <button onClick={() => setContadorUno(contadorUno + 1)}> Pedir chiste</button>
    </div>

};