import Joi from "joi";

const name = Joi.string().min(3);
const lastName = Joi.string().min(3);
const phone = Joi.string();
const email = Joi.string().email();
const descripcion2 = Joi.string().min(8);
const fotos = Joi.string().min(3);
const descripcion = Joi.string().min(3);
const rubro = Joi.string().min(3);

const ActualizarNegocio2 = Joi.object({

  rubro: rubro.required(),
  descripcion: descripcion.required(),
  descripcion2: descripcion2.required(),
 
});

export default ActualizarNegocio2;
