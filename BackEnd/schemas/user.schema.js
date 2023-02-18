import Joi from "joi";

const nombre = Joi.string();
const apellido = Joi.string();
const telefono = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);
const direccion = Joi.string();
const razonSocial = Joi.string();
const rubro = Joi.string();

const crearNegocio = Joi.object({

  nombre: nombre.required(),
  direccion: direccion.required(),
  razonSocial: razonSocial.required(),
  rubro: rubro.required(),
  apellido: apellido.required(),
  password: password.required(),
  email: email.required(),
  telefono: telefono.required(),
});

export default crearNegocio;
