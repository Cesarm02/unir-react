import React from "react";
import {useParams} from "react-router"

export const Component = () => {
    const { value } = useParams();

    return <div>
        <h1> Componente {value} </h1>
    </div>
}