import { Schema, model , Types } from 'mongoose'
import bcrypt from "bcryptjs"

const ticketSchema = new Schema({
    codigo: {
        type: String,
        require: true,
        trim: true
    },
    descripcion: {
        type: String,
        require: true,
        trim: true
    },
    tecnico: {
        type: Schema.Types.ObjectId,
        ref: 'Tecnico',
        trim: true,
        default: null
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        trim: true,
        default: null
    }
}, {
    timestamps:true
})

export default model('Ticket', ticketSchema);