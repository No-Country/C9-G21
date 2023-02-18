import  {emailRegex}  from "../helpers/validaciones.js";

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    const errores = [];

    if(data.email && !emailRegex.test(data.email) ){
      const error = new Error("Formato de email no valido");
      return res.status(400).json({ msg: error.message })
  }
      if (error) {
        error.details.forEach((element) => {
          errores.push(element.context.key);
        });
        next(res.status(400).json(errores));
      }
      next();
    
  }};


export default validatorHandler;
