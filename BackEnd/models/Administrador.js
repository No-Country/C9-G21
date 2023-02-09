import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generarId from '../helpers/generarId.js'

const administradorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    telefono:{
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String,
        default: null
    },
    token: {
        type: String,
        default: generarId()
    },
    //empieza en false, si su cuenta está confirmada se pasará a true
    confirmado:{
        type: Boolean,
        default: false
    }
});

//antes de almacenar el registro, lo hasheo
administradorSchema.pre('save', async function(next){
    //para que un password hasheado no lo vuelva a hashear, que pase al siguiente
    if(!this.isModified("password")){
        next();
    }
    //salt son rondas de hasheo
    const salt = await bcrypt.genSalt(10);
    //entonces al this password le hago hash y salt
    this.password = await bcrypt.hash(this.password, salt);
} );

administradorSchema.methods.comprobarPassword = async function(passwordFormulario){
    //para comparar si es la misma, toma dos parámetros, retorna true o false
    return await bcrypt.compare(passwordFormulario, this.password)
}

//registro mi model para que moongose pueda usarlo como model, le pasamos administrador y como segundo parametro el schema
const Administrador = mongoose.model("Administrador", administradorSchema);
export default Administrador;