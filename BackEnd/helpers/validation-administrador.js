import Joi from "joi";

const validationSchemaAdministrador = Joi.object({
  nombre: Joi.string().required(),
  apellido: Joi.string().required(),
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  telefono: Joi.string().required(),
});

export { validationSchemaAdministrador };
