import nodemailer from "nodemailer";

const emailNuevoPassword = async (datos) =>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
        }
    });
    const {email, name, token} = datos;
    //enviar email
    const info = await transport.sendMail({
        from: '"App.ointment"<correo@appointment.com',
        to: `${email}`,
        subject: "Restablece tu contraseña en App.ointment",
        text: "Restablece tu contraseña en App.ointment",
        html:`<p> Hola ${name}, has solicitado restablecer tu contraseña en App.ointment. </p>
        <p> Accede al siguiente enlace para generar una nueva contraseña.
        <a href="https://c9-g21-e5xc.vercel.app//api/clientes/password-olvidada/${token}">Restablecer contraseña</a> </p>
        <p> Si no solicitaste restablecer tu contraseña, ignora este mensaje.</p>
        `
    });
    console.log("Mensaje enviado: %s", info.messageId)
};

export default emailNuevoPassword;