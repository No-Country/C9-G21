import Joi from "joi"

const validationSchemaTurnos = Joi.object({
    name:Joi.string().required(),
    lastName:Joi.string().required(),
    Email:Joi.string().email().required(),
    Fecha:Joi.string().required(),
    Hora:Joi.string().required(),
    Servicio:Joi.string().required()
})

export {validationSchemaTurnos}
