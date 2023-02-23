import mongoose from "mongoose";
import generarId from "../helpers/generarId.js";


const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  servicio: {
    type: String,
    required: true,
  },
  confirmacion: {
    type: Boolean,
    default: false,
  },
  disponible: {
    type: Boolean,
    default: true,
  },
  token:{
    type: String,
    default: generarId(),
  },
  negocio:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Negocio'
  }, 
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente'
  }
  
});

const Turno = mongoose.model("Turno", userSchema);
export default Turno;
