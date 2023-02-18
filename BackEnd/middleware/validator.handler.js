import  Boom from '@hapi/boom';
import { emailRegex } from '../helpers/validaciones.js';

function validatorHandler(schema, property) {
  return (req, res, next) => {
  
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    const errores=[];

    if (!emailRegex.test(data.email) && data.email) {
      const error = new Error("Email incorrecto");
      return res.status(400).json({ msg: error.message });
    }
    if (error) {


      (error.details.forEach(element => {
        errores.push(element.context.key)
      }))
      next(
        res.status(500).json(errores)
      )
    }
    next();
  }
}

export default validatorHandler
