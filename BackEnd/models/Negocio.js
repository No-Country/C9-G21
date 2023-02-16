import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generarId from "../helpers/generarId.js";
import mongooseBcrypt from "mongoose-bcrypt";


const negocioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
  },
  direccion: {
    type: String,
    required: true,
    trim: true,
  },
  razonSocial: {
    type: String,
    required: true,
    trim: true,
  },
  rubro: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    bcrypt:true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  telefono: {
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
});

negocioSchema.plugin(mongooseBcrypt)

negocioSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

negocioSchema.methods.comprobarPasswordNegocio = async function(formularioPassword){
  return await bcrypt.compare(formularioPassword, this.password)
}


const Negocio = mongoose.model("Negocio",negocioSchema)
export default Negocio