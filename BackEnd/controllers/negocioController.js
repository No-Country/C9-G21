
import Negocio from "../models/Negocio.js";

const registroNegocio = async (req, res) => {
  const { email } = req.body;
  const existeNegocio = await Negocio.findOne({ email });

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
};

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

export {
  registroNegocio,
  confirmarNegocio,
  modificarContraseña,
  autenticarNegocio,
};
