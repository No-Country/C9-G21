import Administrador from "../models/Administrador.js";
import Cliente from "../models/Cliente.js";
import Negocio from "../models/Negocio.js";
import generarJWT from "../helpers/generarJWT.js";


const login = async (req, res) => {
    const { email, password } = req.body;
    const cliente = await Cliente.findOne({ email });
    const negocio = await Negocio.findOne({ email });
    const admin = await Administrador.findOne({ email });
    if (admin) {
        if (await admin.comprobarPassword(password)) {
            return res.json({
                token: generarJWT(admin.id),
                data: admin,
                user: "admin"
            });
        } else {
            const error = new Error("El password es incorrecto");
            return res.json({ msg: error.message });
        }
    }else if (negocio) {
        if (await negocio.comprobarPasswordNegocio(password)) {
            return res.json({
                token: generarJWT(negocio.id),
                data: negocio,
                user: "negocio"
            });
        } else {
            const error = new Error("El password es incorrecto");
            return res.json({ msg: error.message });
        }
    }else if (cliente) {
        if (await cliente.comprobarPasswordCliente(password)) {
            return res.json({
                token: generarJWT(cliente.id),
                data: cliente,
                user: "client"
            });
        } else {
            const error = new Error("El password es incorrecto");
            return res.json({ msg: error.message });
        }
    }
    if (!cliente) {
        const error = new Error("El cliente no existe");
        return res.json({ msg: error.message });
    }
    if (!cliente.confirmado) {
        const error = new Error("La cuenta del cliente no ha sido validada");
        return res.json({ msg: error.message });
    }

};
export default login