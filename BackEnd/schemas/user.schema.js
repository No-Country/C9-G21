import Joi from "joi";

const nombre = Joi.string().min(3);
const apellido = Joi.string().min(3);
const telefono = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);
const direccion = Joi.string().min(3);
const razonSocial = Joi.string().min(3);
const rubro = Joi.string().min(3);

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
