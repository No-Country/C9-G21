import Joi from "joi"

const validationSchema = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    direccion: Joi.string().required(),
    razonSocial: Joi.string().required(),
    rubro: Joi.string().required(),
    password: Joi.string().min(8).max(16).alphanum().required(),
    email: Joi.string().email().required(),
    telefono: Joi.string().required()
});

export default validationSchema
