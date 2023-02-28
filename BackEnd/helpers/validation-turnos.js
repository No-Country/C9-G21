import Joi from "joi"

const validationSchemaTurnos = Joi.object({
    name:Joi.string().required(),
    lastName:Joi.string().required(),
    email:Joi.string().email().required(),
    fecha:Joi.string().required(),
    hora:Joi.string().required(),
    servicio:Joi.string().required(),
    negocio:Joi.string().required(),
    cliente:Joi.string().required()
})

export {validationSchemaTurnos}
