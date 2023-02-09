import Administrador from "../models/Administrador.js";

const registrar = async (req, res)=> {
    
    //const {nombre, email, password} = req.body
    //prevenir usuarios duplicados
    const {email} = req.body;
    //findone para buscar por los diferentes atributos
    const existeUsuario = await Administrador.findOne({email});
    if(existeUsuario){
        //creo una nueva instancia de error y su argumento se lo doy en mensaje
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({msg: error.message});
    }
    try{
        //guardar nuevo administrador
        const administrador = new Administrador(req.body);
        //.save() es de mongoose
        const administradorGuardado = await administrador.save()
        res.json(administradorGuardado)
    }catch(error){
        console.log(error)
    }
    
}
const perfil = (req, res) =>{
    res.json({msg: 'mostrando perfil'})
}

const confirmar = async (req,res) => {
    //para leer el parámetro dinámico se usa req.params
    const {token} = req.params;
    const usuarioConfirmar = await Administrador.findOne({token});
    
    //mensje de error si existe usuarioconfirmar
    if(!usuarioConfirmar){
        const error = new Error('Token no válido');
        return res.status(404).json({msg: error.message})
    }
    
    console.log(usuarioConfirmar)
    try {
        //para eliminar el token y cambiar el estado confirmado a true, guardar
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();
        res.json({msg: "Usuario confirmado correctamente"});
    } catch (error) {
       console.log(error) 
    }  
}

const autenticar = async (req, res)=>{
    const {email} = req.body;
    //comprobar si el usuario existe
    const usuario = await Administrador.findOne({email});
    if(!usuario){
        const error = new Error('El usuario no existe');
        return res.status(403).json({msg: error.message});
    }
    //comprobar si el usuario está confirmado
    if(!usuario.confirmado){
        const error = new Error('Tu cuenta no ha sido validada');
        return res.status(403).json({msg: error.message})
    }
    res.json({msg: "Autenticando"});
}

export {
    registrar, perfil, confirmar, autenticar
}