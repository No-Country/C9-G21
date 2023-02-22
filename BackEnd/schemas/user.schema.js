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

  name: name.required(),
  address: address.required(),
  registeredName: registeredName.required(),
  rubro: rubro.required(),
  lastName: lastName.required(),
  password: password.required(),
  email: email.required(),
  phone: phone.required(),
});

export default crearNegocio;
