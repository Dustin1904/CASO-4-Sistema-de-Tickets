import Ticket from "../models/tickets.js";
import mongoose, { Types } from "mongoose";
import Tecnico from "../models/tecnicos.js";
import Cliente from "../models/clientes.js";

const registrarTicket = async (req, res) => {
	const { tecnico , cliente } = req.body;

	const tecnicoEncontrado = await Tecnico.findOne({cedula:tecnico});
	const clienteEncontrado = await Cliente.findOne({cedula:cliente});

	if (!tecnicoEncontrado)
		return res
			.status(404)
			.json({ res: `No existe el tecnico con la cedula ${ tecnico }` });

	if (!clienteEncontrado)
		return res
			.status(404)
			.json({ res: `No existe el cliente con la cedula ${ cliente }`});

	const codigo =  Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;

	req.body.codigo = codigo;
	req.body.tecnico=tecnicoEncontrado._id;
	req.body.cliente=clienteEncontrado._id;

	const ticketNuevo = await Ticket.create(req.body);

	res
		.status(201)
		.json({
			res: `Registro exitoso del ticket ${ticketNuevo._id}`
		});
};

const listarTickets = async ( req , res ) => {
	const tickets = await Ticket.find().populate('cliente', "nombre apellido cedula").populate('tecnico' , "nombre apellido cedula").select("-__v -createdAt -updatedAt");
	console.log(tickets);
	
	// tickets.cliente = tickets.cliente.nombre + " " + tickets.cliente.apellido;
	// tickets.tecnico = tickets.tecnico.nombre + " " + tickets.tecnico.apellido;

	res.status(200).json(tickets);
};

const detalleTicket = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid( id ))
		return res
			.status(404)
			.json({ res: `No existe el ticket con el id ${ id }` });

	res
		.status(200)
		.json(
			await Ticket.findById( id ).populate("cliente", "_id cedula nombre apellido email telefono").populate("tecnico", "_id cedula nombre apellido email telefono").select("-createdAt -updatedAt -__v")
		);
};

const actualizarTicket = async (req, res) => {
	const { cliente , tecnico } = req.body;

	const clienteEncontrado = await Cliente.findOne({ cedula: cliente })
	const tecnicoEncontrado = await Tecnico.findOne({ cedula: tecnico })
	console.log(clienteEncontrado);
	console.log(tecnicoEncontrado);
	
	if ( !clienteEncontrado || !tecnicoEncontrado ) {
		return res 
		.status(404)
		.json({ res: "No existe el cliente o el tecnico con la cédula proporcionada" });
	}
	
	req.body.cliente = clienteEncontrado._id
	req.body.tecnico = tecnicoEncontrado._id
	
	await Ticket.findByIdAndUpdate(req.body._id , req.body);
	console.log(req.body);
	

	res.status(200).json({ res: `Ticket actualizado` });
};

const eliminarTicket = async (req, res) => {
	await Ticket.findByIdAndDelete(req.params.id);

	res.status(200).json({ res: `Ticket ${req.params.id} eliminado` });
};

// const cambiarEstado = async (req, res) => {
// 	const { id } = req.params;

// 	if (!mongoose.Types.ObjectId.isValid(id))
// 		return res
// 			.status(404)
// 			.json({ res: `No existe el tratamiento con el id ${id}` });

// 	await Tratamiento.findByIdAndUpdate(id, { estado: false });

// 	res.status(200).json({ res: `Estado del tratamiento ${id} cambiado` });
// };

export {
	listarTickets,
	detalleTicket,
	actualizarTicket,
	eliminarTicket,
	registrarTicket
};
