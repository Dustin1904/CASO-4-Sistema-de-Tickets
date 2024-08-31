import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TablaRegistros from "./components/tabla";

export default function VisualizarEspecificData( ) {

    const [ datos , setDatos ] = useState({});

    const [ ticketsRelacionados , setTicketsRelacionados ] = useState([]);

    const params = useParams();

    const getData = async ( ) => {  
        try {
            const respuesta = await axios.get(`${process.env.REACT_APP_BACKEND}/${params?.formulario}/${params?.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            console.log(respuesta.data);
            
            
            if (params?.formulario === "tickets") {
                setDatos(respuesta.data)
            }else if ( params?.formulario === "clientes" ){
                setDatos({...respuesta.data.cliente , tickets: respuesta.data.tickets});
            }else if ( params?.formulario === "tecnicos"){
                setDatos({...respuesta.data.tecnico , tickets: respuesta.data.tickets});
            }
            
            console.log(ticketsRelacionados);

        } catch (error) {
            console.error("ERROR, aparte del programador: ", error);
        }

    }

    const formatearFecha = (fecha) => {
		const nuevaFecha = new Date(fecha);
		nuevaFecha.setMinutes(
			nuevaFecha.getMinutes() + nuevaFecha.getTimezoneOffset()
		);
		return new Intl.DateTimeFormat("es-EC", { dateStyle: "long" }).format(
			nuevaFecha
		);
	};

    useEffect(() => { 
        getData();
    }, [ ]);

    return(
        <div className="flex flex-col gap-3 backdrop-blur-sm bg-black/50 w-3/4 justify-center p-4 border rounded-lg" >
            <h1 className="text-white"> Visualizar datos de {datos.nombre || "ticket " + datos.codigo } </h1>
            <hr />
            {Object.keys(datos).map(( dato ) => {
                if (dato === "cliente" || dato === "tecnico") {
                    return(
                        <TablaRegistros className="w-full text-white" key={dato} informacion={[datos[dato]]} mostrarAcciones={false} columnaAcciones={false} ></TablaRegistros>
                    )
                }
                if (dato === "tickets") {
                    return(
                        <TablaRegistros className="w-full text-white" informacion={datos[dato]} mostrarAcciones={false}></TablaRegistros>
                    )
                }
                return(
                    <div className="text-white" key={dato}>
                        <strong> {dato} </strong>
                        <span> {dato.includes("fecha") ? formatearFecha(datos[dato]) : datos[dato] } </span>
                    </div>
                )
            })
        }
        </div>
    );
}