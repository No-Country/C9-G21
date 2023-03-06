
const paginaInicio = (req,res)=>{
    try{
        res.status(200).send(
            {   
                msg1: "Bienvenido a la api rest de appointment",
                rutas:{
                    clientes: "/api/clientes",
                    negocio: "/api/negocio",
                    turno:"/api/turno",
                    login:"/api/login"
                },
                msg2:"Visualizar estas rutas a traves de postman",
                msg3:"Importante: Debes petenecer a No Country para poder entrar al repositorio",
                github:"https://github.com/No-Country/C9-G21"
            }
        )

    }catch(err){
        res.status(400).send({msg:err.message})
    }
}

export {
    paginaInicio
}