import axios from "axios";
import { useState } from "react";
import BotonAcciones from "../Boton";

export default function RegistrarDatos({ formulario , children }) {

	const [form, setForm] = useState({});

	const ejemplo = {
		clientes: {
			"cedula":"text",
			"nombre":"text",
			"apellido":"text",
			"ciudad":"text",
			"direccion":"text",
			"fecha_nacimiento":"date",
			"email":"email",
			"dependencia":"text",
			"telefono":"tel"
		},
		tecnicos: {
			"cedula":"text",
			"nombre":"text",
			"apellido":"text",
			"genero":"text",
			"fecha_nacimiento":"date",
			"direccion":"text",
			"email":"email",
			"telefono":"tel",
		},
		tickets: {"descripcion":"text",
			"tecnico":"text", 
			"cliente":"text"
		},
	};	

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const respuesta = await axios.post(
				`${process.env.REACT_APP_BACKEND}/${formulario}/registro`, form , 
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				}
			);
			window.parent.location=window.parent.location.href;
			console.log("Datos enviados correctamente", respuesta.data);
		} catch (error) {
			console.log("Error al enviar datos", error);
		}
	};

    const handleChange = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<div className="flex justify-center items-center backdrop-blur-sm bg-black/25 inset-0 m-auto absolute z-10">

		<form className="flex flex-col gap-6 backdrop-blur-sm bg-black/10 z-20 items-center border rounded-lg w-1/2 overflow-y-scroll p-5 h-96" onSubmit={handleSubmit}>
			<h1 className="text-white text-3xl" > Registro de {formulario} </h1>
			<hr className="border border-white w-full" /> 
			{ Object.keys(ejemplo[formulario]).map(( input ) => {
				if ( input === "genero" ) {
					return(
						<div className="relative w-4/5">
							<select className="bg-transparent w-full rounded-full border-2 text-white py-1 pr-3 pl-8 placeholder:text-white focus:outline-none autofill:bg-transparent" 
							name={input} value={form[input]} onChange={handleChange}
							>
								<option value="">Genero</option>
								<option className="text-black" value="Hombre"> Hombre </option>
								<option className="text-black" value="Mujer"> Mujer </option>
								<option className="text-black" value="Prefiero no decirlo"> Prefiero no decirlo </option>
							</select>
						</div>
					)
				}
				return (

					<div className="relative w-4/5">
						<input
							className="bg-transparent w-full rounded-full border-2 text-white py-1 pr-3 pl-8 placeholder:text-white focus:outline-none autofill:bg-transparent"
							placeholder={ input }
							type={ ejemplo[formulario][input] }
							name={ input }
							onChange={handleChange}
						/>
					</div>
						
				);
			})}
			<div className="flex gap-3" >
				<BotonAcciones texto="Enviar Datos"></BotonAcciones>
				{ children }
			</div>
		</form>
		</div>
	);
}
