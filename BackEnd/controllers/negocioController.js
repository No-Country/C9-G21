
import Negocio from "../models/Negocio.js";
import{validarTelefonoAr,
  validarTelefonoPe,
  validarTelefonoCl,
  validarTelefonoCo,
  validarTelefonoVe,
  emailRegex} from "../helpers/validaciones.js"

const registroNegocio = async (req, res) => {
  const { email,telefono } = req.body;
  const existeNegocio = await Negocio.findOne({ email });

  if (
    validarTelefonoAr.test(telefono) ||
    validarTelefonoPe.test(telefono) ||
    validarTelefonoCl.test(telefono) ||
    validarTelefonoCo.test(telefono) ||
    validarTelefonoVe.test(telefono)
  ) {
  if(!emailRegex.test(email)){
    const error = new Error("Email incorrecto");
      return res.status(400).json({ msg: error.message });
  }
  
  if (existeNegocio) {
    const error = new Error("Negocio ya resgistrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const negocio = new Negocio(req.body);
    const negocioSave = await negocio.save();
    res.json(negocioSave);
  } catch (err) {
    console.log(err);
  }
}else{
  const error = new Error("Formato de telefono no valido");
    return res.status(400).json({ msg: error.message });
}
}
;
const modificarContraseña = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  await Negocio.updateOne({ _id: id }, { $set: { password } }).then((data) =>
    res.json(data)
  ).catch((err)=>{
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  });
};
const confirmarNegocio = async (req, res) => {
  const { token } = req.params;
  const negocioConfirmar = await Negocio.findOne({ token });

  if (!negocioConfirmar) {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  }

  console.log(negocioConfirmar);

  try {
    negocioConfirmar.token = null;
    negocioConfirmar.confirmacion = true;
    await negocioConfirmar.save();
    res.json({ msg: "Negocio confirmado correctamente" });
  } catch (err) {
    console.log(err);
  }
};
const autenticarNegocio = async (req, res) => {
  const { email } = req.body;
  const negocio = await Negocio.findOne({ email });
  if (!negocio) {
    const error = new Error("El negocio no existe");
    return res.status(403).json({ msg: error.message });
  }
  if (!negocio.confirmacion) {
    const error = new Error("La cuenta del negocio no ha sido validada");
    return res.status(403).json({ msg: error.message });
  }
  res.json({ msg: "Autenticando" });
};
const passwordOlvidada = async (req, res) => {
  const { email } = req.body;
  const existeNegocio = await Negocio.findOne({ email });
  if (!existeNegocio) {
    const error = new Error("El usuario no existe");
    return res.status(400).json({ msg: error.message });
  }
  try {
    existeNegocio.token = generarId();
    await existeNegocio.save();
    res.json({
      msg: "Se ha enviado un email con las instrucciones para cambiar la contraseña",
    });
  } catch (error) {
    console.log(error);
  }
};
const comprobarToken = async (req, res) => {
  const { token } = req.params;
  const tokenValido = await Negocio.findOne({ token });
  if (tokenValido) {
    //el token es valido, el usuario existe
    res.json({ msg: "Token válido, el usuario existe" });
  } else {
    const error = new Error("Token no válido");
    return res.status(400).json({ msg: error.message });
  }
};
const nuevoPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  const negocio = await Negocio.findOne({ token });
  console.log();
  if (!negocio) {
    const error = new Error("Hubo un error");
    res.status(400).json({ msg: error.message });
  }
  try {
    //desaparece el token y cambia la contraseña por la actualizada
    negocio.token = null;
    negocio.password = password;
    await negocio.save();
    res.json({ msg: "Password modificado correctamente" });
  } catch (error) {
    console.log(error);
  }
};
const buscarServicios = async (req, res) => {
  const { rubro } = req.query;
  try {
    await Negocio.find({ rubro: { $regex: rubro, $options: "i" } })
      .then((data) => {
        console.log(data);
        res.status(200).json(data);
      })
      .catch((err) => {
        const error = new Error("No existe Turno con ese servicio");
        res.status(404).json({ msg: error.message });
      });
  } catch (err) {
    const error = new Error("Error al buscar un servicio");
    res.status(404).json({ msg: error.message });
  }
};
export {
  registroNegocio,
  confirmarNegocio,
  modificarContraseña,
  autenticarNegocio,
  nuevoPassword,
  comprobarToken,
  passwordOlvidada,
  buscarServicios,
};
