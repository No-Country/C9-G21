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
            console.log(admin);
            res.json({
                token: generarJWT(admin.id),
                data: admin,
                user: "admin"
            });
            console.log("Password correcto");
        } else {
            const error = new Error("El password es incorrecto");
            return res.status(403).json({ msg: error.message });
        }
    }
    if (negocio) {
        if (await negocio.comprobarPassword(password)) {
            res.json({
                token: generarJWT(cliente.id),
                data: negocio,
                user: "negocio"
            });
            console.log("Password correcto");
        } else {
            const error = new Error("El password es incorrecto");
            return res.status(403).json({ msg: error.message });
        }
    }
    if (cliente) {
        if (await cliente.comprobarPassword(password)) {
            res.json({
                token: generarJWT(cliente.id),
                data: cliente,
                user: "client"
            });
            console.log("Password correcto");
        } else {
            const error = new Error("El password es incorrecto");
            return res.status(403).json({ msg: error.message });
        }
    }
    if (!cliente) {
        const error = new Error("El cliente no existe");
        return res.status(403).json({ msg: error.message });
    }
    if (!cliente.confirmado) {
        const error = new Error("La cuenta del cliente no ha sido validada");
        return res.status(403).json({ msg: error.message });
    }

};
export default login