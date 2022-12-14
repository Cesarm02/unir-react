import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import { Header } from "../Componentes/header";
import { Hook } from "../Componentes/header";
import { FetchUse } from "../Componentes/header";
import {Component} from "../Componentes/componente"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element = {<Header/>}></Route>
                    <Route exact path="/hook" element = {<Hook/>}></Route>
                    <Route exact path="/fe" element = {<FetchUse/>}></Route>
                    <Route exact path="/:value" element = {<Component/>}></Route>
                    //Acá se configura para cualquier ruta
                    <Route  path="*" element = {<Home/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export const Home = () =>{
    return <div>
        <h1> Home</h1>
    </div>
}

