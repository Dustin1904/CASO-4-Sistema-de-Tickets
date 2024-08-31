import Tecnico from "../models/tecnicos.js";
import { Types } from "mongoose";
import Ticket from "../models/tickets.js"; 

const registrarTecnico = async ( req , res ) => {
    const { email } = req.body;

    if ( Object.values(req.body).includes("")) return res.status(400).json({ res : "Rellene todos los campos por favor"});

    const existeEmail = await Tecnico.findOne({ email });

    if ( existeEmail ) return res.status( 400 ).json({ res: "ERROR!! El tecnico ya se encuentra registrado"});

    const tecnico = new Tecnico(req.body);

    await tecnico.save();

    res.json({ res: "Tecnico registrado con exito" });
}

const listarTecnicos = async ( req , res ) => {
    res.status( 200 ).json( await Tecnico.find().select("-createdAt -updatedAt -__v"));
}

const detalleTecnico = async ( req , res ) => {
    const { id } = req.params;

    const tecnico = await Tecnico.findById( id ).select("-createdAt -updatedAt -__v");

    const tickets = await Ticket.find().where('tecnico').equals( id ).populate("cliente", "_id cedula nombre apellido email telefono").populate("tecnico", "_id cedula nombre apellido email telefono").select("-createdAt -updatedAt -__v"); 

    if ( !tecnico ) return res.status(404).json({ res: "ERROR!!, Tecnico no encontrado"});

    res.status(200).json({ tecnico , tickets });
}

const actualizarTecnico = async ( req , res ) => {
    const { id } = req.params;
    
    if ( !Types.ObjectId.isValid( id )) return res.status(400).json({ res: `ID ${ id } no valido`});

    if ( Object.values( req.body ).includes("")) return res.status(400).json({ res: "Por favor rellene todos los campos"});

    await Tecnico.findByIdAndUpdate( id , req.body );

    res.status(200).json({ res : "Tecnico actualizado con exito"});
}

const eliminarTecnico = async ( req , res ) => {
    const { id } = req.params;

    if ( !Types.ObjectId.isValid( id )) return res.status(404).json({ res: `ID ${id} no valido`});

    await Tecnico.findByIdAndDelete( id );

    res.status( 200 ).json({ res: "Tecnico eliminado con exito"});
}

export { 
    registrarTecnico,
    listarTecnicos,
    detalleTecnico,
    actualizarTecnico,
    eliminarTecnico
};