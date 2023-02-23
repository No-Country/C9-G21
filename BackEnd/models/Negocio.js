import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generarId from "../helpers/generarId.js";


const negocioSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  registeredName: {
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
    required: true
  },
  email: {
    type: String,
    required: true,
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
  
});


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