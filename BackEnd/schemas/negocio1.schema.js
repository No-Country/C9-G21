import Joi from "joi";

const name = Joi.string().min(3);
const address = Joi.string().min(3);
const phone = Joi.string();
const email = Joi.string().email();
const city = Joi.string().min(8);
const fotos = Joi.string().min(3);
const descripcion = Joi.string().min(3);
const rubro = Joi.string().min(3);

const ActualizarNegocio1 = Joi.object({

  name: name.required(),
  address: address.required(),
  city: city.required(),
 
});

export default ActualizarNegocio1;
