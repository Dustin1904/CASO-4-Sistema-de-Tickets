import { Schema, model, Types } from "mongoose";

const tecnicosSchema = new Schema({
    nombre: {
        type: String,
        require: true,
        trim: true,
    },
    apellido: {
        type: String,
        require: true,
        trim: true,
    },
    cedula: {
        type: String,
        require: true,
        trim: true
    },
    fecha_nacimiento: {
        type: Date,
        require: true,
    },
    genero: {
        type: String,
        enum: ["Hombre","Mujer","Prefiero no decirlo"],
        require: false,
    },
    direccion: {
        type: String,
        require: true,
        trim: true
    },
    telefono: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    }
},
{
    timestamps: true,
});

export default model("Tecnico", tecnicosSchema);
