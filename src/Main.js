import React from "react";
import { Header } from "./Componentes/header";
import { AppRouter } from "./Router/route";
export const MainApp = () =>{
    return (<>
    <Header numero="1"></Header>)
    
    <AppRouter></AppRouter>
    </>
    )
};