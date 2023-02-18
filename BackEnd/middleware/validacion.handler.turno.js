import { emailRegex, fechaRegex, horaRegex } from "../helpers/validaciones.js";

function validatorHandlerTurno(schema, property) {
  return (req, res, next) => {
  
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    const errores=[];

    if(data.Hora && !horaRegex.test(data.Hora)){
      const error = new Error("Formato de la hora no valido");
      return res.status(400).json({ msg: error.message })
    }

    if(data.Fecha && !fechaRegex.test(data.Fecha)){
      const error = new Error("Formato de fecha no valido");
      return res.status(400).json({ msg: error.message })
    }

    if(data.Email && !emailRegex.test(data.Email) ){
        const error = new Error("Formato de email no valido");
        return res.status(400).json({ msg: error.message })
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

export default validatorHandlerTurno