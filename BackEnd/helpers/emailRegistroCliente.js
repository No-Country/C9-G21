//hagan npm i nodemailer
//pidanme el archivo .env
import nodemailer from "nodemailer";

const emailRegistro = async (datos) =>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
        }
    });
    const {email, nombre, token} = datos;
    //enviar email
    const info = await transport.sendMail({
        from: '"App.ointment"<correo@appointment.com',
        to: `${email}`,
        subject: "Valida tu cuenta en App.ointment",
        text: "Valida tu cuenta en App.ointment",
        html:`<p> Hola ${nombre}, valida tu cuenta en App.ointment. </p>
        <p> Tu cuenta está lista, sólo debes validarla en el siguiente enlace:
        <a href="http://localhost:5000/api/clientes/confirmar/${token}">Comprobar cuenta</a> </p>
        <p> Si tu no creaste esta cuenta, ignora este mensaje.</p>
        `
    });
    console.log("Mensaje enviado: %s", info.messageId)
};

export default emailRegistro;