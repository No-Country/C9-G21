import Joi from "joi";

const name = Joi.string().min(3);
const lastName = Joi.string().min(3);
const phone = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);
const address = Joi.string().min(3);
const registeredName = Joi.string().min(3);
const rubro = Joi.string().min(3);

const crearNegocio = Joi.object({
  password: password.required(),
  email: email.required(),
  phone: phone.required(),
  type: Joi.string().required()

});

export default crearNegocio;
