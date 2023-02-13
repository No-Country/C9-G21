import Cliente from "../models/Cliente.js";
import generarJWT from "../helpers/generarJWT.js";

const registrarCliente = async (req, res) => {
  const { email } = req.body;
  const existeCliente = await Cliente.findOne({ email });

  if (existeCliente) {
    const error = new Error("Cliente ya resgistrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const cliente = new Cliente(req.body);
    const clienteGuardado = await cliente.save();
    res.json(clienteGuardado);
  } catch (error) {
    console.log(error);
  }
};

const modificarContraseña = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  await Cliente.updateOne({ _id: id }, { $set: { password } }).then((data) =>
    res.json(data)
  ).catch((err)=>{
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  });
};

const confirmarCliente = async (req, res) => {
  const { token } = req.params;
  const clienteConfirmar = await Cliente.findOne({ token });

  if (!clienteConfirmar) {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  }

  console.log(clienteConfirmar);

  try {
    clienteConfirmar.token = null;
    clienteConfirmar.confirmacion = true;
    await clienteConfirmar.save();
    res.json({ msg: "Cliente confirmado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const autenticarCliente = async (req, res) => {
  const { email } = req.body;
  const cliente = await Cliente.findOne({ email });
  if (!cliente) {
    const error = new Error("El cliente no existe");
    return res.status(403).json({ msg: error.message });
  }
  if (!cliente.confirmacion) {
    const error = new Error("La cuenta del cliente no ha sido validada");
    return res.status(403).json({ msg: error.message });
  }
  res.json({ msg: "Autenticando" });
};

export {
  registrarCliente,
  confirmarCliente,
  modificarContraseña,
  autenticarCliente,
};
