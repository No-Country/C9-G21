import Joi from "joi";

const validationSchemaAdministrador = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

export { validationSchemaAdministrador };
