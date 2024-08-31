import BotonAcciones from "./components/Boton";
import TablaRegistros from "./components/tabla";
import { useState } from "react";
import RegistrarDatos from "./components/modals/Registrar";

export default function ListarTec() {

    const [ modalVisible , setModalVisible ] = useState(false);

    return (
        <>
            <BotonAcciones texto="Registrar Técnicos" accion={ ( ) => { setModalVisible(true) }} ></BotonAcciones>
            <TablaRegistros registros="tecnicos"></TablaRegistros>
            { modalVisible && <RegistrarDatos formulario="tecnicos"> <BotonAcciones texto="Cancelar" accion={ ( ) => { setModalVisible(false) }}></BotonAcciones> </RegistrarDatos> }
        </>
    );
} 