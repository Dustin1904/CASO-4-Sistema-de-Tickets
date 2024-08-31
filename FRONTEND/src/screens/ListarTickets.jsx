import BotonAcciones from "./components/Boton";
import TablaRegistros from "./components/tabla";
import { useState } from "react";
import RegistrarDatos from "./components/modals/Registrar";

export default function ListarTick() {

    const [ modalVisible , setModalVisible ] = useState(false);

    return(
        <> 
            <BotonAcciones texto="Registrar Tickets" accion={ ( ) => { setModalVisible(true) }}></BotonAcciones>
            <TablaRegistros registros="tickets"></TablaRegistros>
            { modalVisible && <RegistrarDatos formulario="tickets"> <BotonAcciones texto="Cancelar" accion={ ( ) => { setModalVisible(false) }}></BotonAcciones> </RegistrarDatos> }
        </>
    );
}