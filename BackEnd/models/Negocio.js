import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generarId from "../helpers/generarId.js";

import add from 'multer'

import availabilitySchema from "../schemas/schema.horarios.js";


const negocioSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  registeredName: {
    type: String,
    trim: true,
  },
  rubro: {
    type: String,
    trim: true,
  },
  distancia: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  fotos: [
    {
      data: Buffer,
      contentType: String
    }
  ],
  descripcion: {
    type: String,
    trim: true,
  },
  descripcion2: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  token: {
    type: String,
    default: generarId(),
  },
  confirmacion: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
  },


  availability: 
    {
      monday: { isActive: Boolean, horaInicio: String, horaFinal: String },
      tuesday:  { isActive: Boolean, horaInicio: String, horaFinal: String },
      wednesday:  { isActive: Boolean, horaInicio: String, horaFinal: String },
      thursday:  { isActive: Boolean, horaInicio: String, horaFinal: String },
      friday:  { isActive: Boolean, horaInicio: String, horaFinal: String },
      saturday:  { isActive: Boolean, horaInicio: String, horaFinal: String },
      sunday:  { isActive: Boolean, horaInicio: String, horaFinal: String },
    },
  
  shiftDuration:{
    type: String,
    trim: true,
}
});

negocioSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

negocioSchema.methods.comprobarPasswordNegocio = async function (
  formularioPassword
) {
  return await bcrypt.compare(formularioPassword, this.password);
};


const Negocio = mongoose.model("Negocio", negocioSchema);
export default Negocio;
