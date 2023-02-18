import  Boom from '@hapi/boom';

function validatorHandler(schema, property) {
  return (req, res, next) => {
  
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    const errores=[];
    if (error) {
      // error.details.forEach(element => {
      //   console.log(element.message)
      // })
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
