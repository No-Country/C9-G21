import mongoose from "mongoose";
import generarId from "../helpers/generarId.js";


const userSchema = mongoose.Schema({
  Nombre: {
    type: String,
    required: true,
  },
  Apellido: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Fecha: {
    type: String,
    required: true,
  },
  Hora: {
    type: String,
    required: true,
  },
  Servicio: {
    type: String,
    required: true,
  },
  Confirmacion: {
    type: Boolean,
    default: false,
  },
  Disponible: {
    type: Boolean,
    default: true,
  },
  Token:{
    type: String,
    default: generarId(),
  }
});

const Turno = mongoose.model("Turno", userSchema);
export default Turno;
