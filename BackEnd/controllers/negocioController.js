import Negocio from "../models/Negocio.js";
import {
  validatePhoneAr,
  validatePhonePe,
  validatePhoneCl,
  validatePhoneCo,
  validatePhoneVe,
  emailRegex,
} from "../helpers/validaciones.js";

import emailRegistro from "../helpers/emailRegistroNegocio.js";
import emailNuevoPassword from "../helpers/emailPasswordOlvidadaNegocio.js";
import completarNegocio from "../helpers/completardatos.js";


const registrarNegocio = async (req, res) => {
  const { email, phone, name } = req.body;

  const existeNegocio = await Negocio.findOne({ email });

  if (
    validatePhoneAr.test(phone) ||
    validatePhonePe.test(phone) ||
    validatePhoneCl.test(phone) ||
    validatePhoneCo.test(phone) ||
    validatePhoneVe.test(phone)
  ) {
    if (!emailRegex.test(email)) {
      const error = new Error("Email incorrecto");
      return res.status(400).json({ msg: error.message });
    }
    if (existeNegocio) {
      const error = new Error("Negocio ya resgistrado");
      return res.status(400).json({ msg: error.message });
    }

    try {
      const negocio = new Negocio(req.body);
      completarNegocio(negocio);
      const negocioGuardado = await negocio.save();
      //enviar email
      emailRegistro({
        email,
        name,
        token: negocioGuardado.token,
      });

      res.json(negocio);
    } catch (error) {
      console.log(error);
    }
  } else {
    const error = new Error("Formato de phone no valido");
    return res.status(400).json({ msg: error.message });
  }
};
const perfilNegocio = async (req, res) => {
  try {
    const perfil = await Negocio.findById(req.params.id).lean();
    res.json(perfil);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const modificarContraseña = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  await Negocio.updateOne({ _id: id }, { $set: { password } })
    .then((data) => res.json(data))
    .catch((err) => {
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
    emailNuevoPassword({
      email,
      name: existeAdministrador.name,
      token: existeAdministrador.token,
    });
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
  // console.log();
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

const actualizarNegocio1 = async (req, res) => {
  const { id } = req.params;
  const { name, address, registeredName, city } = req.body;
  const negocio = await Negocio.findById(id);
  try {
    if (!negocio) {
      const error = new Error("Id no valido");
      return res.status(404).json({ msg: error.message });
    }
    await Negocio.updateOne(
      { _id: id },
      { $set: { name, address, registeredName, city } }
    )
      .then((data) => {
        console.log(data);
        res.json(negocio);
      })
      .catch((err) => {
        const error = new Error("Id no valido para actualizar el negocio");
        res.status(404).json({ msg: error.message });
      });
  } catch (err) {
    const error = new Error("Error al actualizar el negocio");
    res.status(404).json({ msg: error.message });
  }
};

const actualizarNegocio2 = async (req, res) => {
  const { id } = req.params;
  const { rubro, descripcion, fotos, descripcion2 } = req.body;
  const negocio = await Negocio.findById(id);
  try {
    if (!negocio) {
      const error = new Error("Id no valido");
      return res.status(404).json({ msg: error.message });
    }
    await Negocio.updateOne(
      { _id: id },
      { $set: { rubro, descripcion, fotos, descripcion2 } }
    )
      .then((data) => {
        console.log(data);
        res.json(negocio);
      })
      .catch((err) => {
        const error = new Error("Id no valido para actualizar el negocio");
        res.status(404).json({ msg: error.message });
      });
  } catch (err) {
    const error = new Error("Error al actualizar el negocio");
    res.status(404).json({ msg: error.message });
  }
};

const disponibilidad = async (req, res) => {
  const { id } = req.params;
  const { availability, shiftDuration } = req.body;

  try {
    const negocioActualizado = await Negocio.findOneAndUpdate(
      { _id: id },
      { availability, shiftDuration },
      { new: true }
    );

    res.status(200).json(negocioActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export {
  registrarNegocio,
  confirmarNegocio,
  modificarContraseña,
  perfilNegocio,
  autenticarNegocio,
  nuevoPassword,
  comprobarToken,
  passwordOlvidada,
  buscarServicios,
  actualizarNegocio1,
  actualizarNegocio2,
  disponibilidad,
};
