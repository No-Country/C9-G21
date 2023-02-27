import Joi from "joi";

const name = Joi.string().min(3);
const lastName = Joi.string().min(3);
const phone = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);
const address = Joi.string().min(3);
const registeredName = Joi.string().min(3);
const city = Joi.string().min(3);

const actualizarNegocio = Joi.object({

  name: name.required(),
  address: address.required(),
  city: city.required(),
  registeredName: registeredName.required(),
  type :Joi.string().required(),

 
  
  
});

export default actualizarNegocio;
