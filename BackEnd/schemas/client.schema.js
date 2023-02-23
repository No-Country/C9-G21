import Joi from "joi";

const name = Joi.string().min(3);
const lastName = Joi.string().min(3);
const phone = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);


const crearUsuario = Joi.object({

  name: name.required(),
  lastName: lastName.required(),
  password: password.required(),
  email: email.required(),
  phone: phone.required(),
});

export default crearUsuario;
