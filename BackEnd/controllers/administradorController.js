import Administrador from "../models/Administrador.js";

import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";
import {
  validarTelefonoAr,
  validarTelefonoPe,
  validarTelefonoCl,
  validarTelefonoCo,
  validarTelefonoVe,
  emailRegex,
} from "../helpers/validaciones.js";
import emailRegistro from "../helpers/emailRegistro.js";
import emailNuevoPassword from "../helpers/emailPasswordOlvidada.js";

const registrar = async (req, res) => {
  //const {nombre, email, password} = req.body
  //prevenir usuarios duplicados
  const { email, nombre, telefono } = req.body;
  //findone para buscar por los diferentes atributos
  if (
    validarTelefonoAr.test(telefono) ||
    validarTelefonoPe.test(telefono) ||
    validarTelefonoCl.test(telefono) ||
    validarTelefonoCo.test(telefono) ||
    validarTelefonoVe.test(telefono)
  ) {
    try {
      const existeUsuario = await Administrador.findOne({ email });

      if (existeUsuario) {
        //creo una nueva instancia de error y su argumento se lo doy en mensaje
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({ msg: error.message });
      }
      //guardar nuevo administrador
      const administrador = new Administrador(req.body);
      //.save() es de mongoose
      const administradorGuardado = await administrador.save();
      //enviar email
      emailRegistro({
        email,
        nombre,
        token: administradorGuardado.token,
      });

      res.json(administradorGuardado);
    } catch (error) {
      console.log(error);
    }
  } else {
    const error = new Error("Formato de telefono no valido");
    return res.status(400).json({ msg: error.message });
  }
};
const perfil = (req, res) => {
  const { administrador } = req;
  res.json({ perfil: administrador });
};

const confirmar = async (req, res) => {
  //para leer el parámetro dinámico se usa req.params
  const { token } = req.params;
  const usuarioConfirmar = await Administrador.findOne({ token });

  //mensje de error si existe usuarioconfirmar
  if (!usuarioConfirmar) {
    const error = new Error("Token no válido");
    return res.status(404).json({ msg: error.message });
  }

  console.log(usuarioConfirmar);
  try {
    //para eliminar el token y cambiar el estado confirmado a true, guardar
    usuarioConfirmar.token = null;
    usuarioConfirmar.confirmado = true;
    await usuarioConfirmar.save();
    res.json({ msg: "Usuario confirmado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const autenticar = async (req, res) => {
  const { email, password } = req.body;
  //comprobar si el usuario existe
  const usuario = await Administrador.findOne({ email });
  if (!usuario) {
    const error = new Error("El usuario no existe");
    return res.status(403).json({ msg: error.message });
  }
  //comprobar si el usuario está confirmado
  if (!usuario.confirmado) {
    const error = new Error("Tu cuenta no ha sido validada");
    return res.status(403).json({ msg: error.message });
  }
  //revisar el password
  if (await usuario.comprobarPassword(password)) {
    console.log(usuario);
    //autenticar
    res.json({ token: generarJWT(usuario.id) });
    console.log("Password correcto");
  } else {
    const error = new Error("El password es incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};
const passwordOlvidada = async (req, res) => {
  const { email } = req.body;
  const existeAdministrador = await Administrador.findOne({ email });
  if (!existeAdministrador) {
    const error = new Error("El usuario no existe");
    return res.status(400).json({ msg: error.message });
  }
  try {
    existeAdministrador.token = generarId();
    await existeAdministrador.save();
    //enviar email para restablecer pass
    emailNuevoPassword({
      email,
      nombre: existeAdministrador.nombre,
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
  const tokenValido = await Administrador.findOne({ token });
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
  const administrador = await Administrador.findOne({ token });
  console.log();
  if (!administrador) {
    const error = new Error("Hubo un error");
    res.status(400).json({ msg: error.message });
  }
  try {
    //desaparece el token y cambia la contraseña por la actualizada
    administrador.token = null;
    administrador.password = password;
    await administrador.save();
    res.json({ msg: "Password modificado correctamente" });
  } catch (error) {
    console.log(error);
  }
};
export {
  registrar,
  perfil,
  confirmar,
  autenticar,
  passwordOlvidada,
  comprobarToken,
  nuevoPassword,
};
