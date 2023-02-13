import Turno from "../models/Turno.js";


const crearTurno =async (req, res) => {
    const {Hora, Fecha, Servicio , Disponible} = req.body;
    //findone para buscar por los diferentes atributos
    const existeTurno = await Turno.find({Servicio});
    console.log(existeTurno)
    if(existeTurno){
        //creo una nueva instancia de error y su argumento se lo doy en mensaje
        const error = new Error("Turno ya dado");
        return res.status(400).json({msg: error.message});
    }
    try{
        //guardar nuevo Turno
        const turno = new Turno(req.body);
        console.log(turno)
        //.save() es de mongoose
        const turnoGuardado = await turno.save()
        res.json(turnoGuardado)
    }catch(error){
        console.log(error)
    }
  }
  const buscarTurnos =(req, res) => {
    const { Email } = req.query;
    if (Email) {
      Turno
        .find({ Email: { $regex: Email } })
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json({ message: err });
        });
    } else {
      Turno
        .find()
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json({ message: err });
        });
    }
  }
const buscarTurno=(req, res) => {
    const { id } = req.params;
    Turno
      .findById(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ message: err });
      });
  }
  const actualizarTurno=(req, res) => {
    const { id } = req.params;
    const { Hora, Fecha  } = req.body;
    Turno
      .updateOne({ _id: id }, { $set: { Hora ,Fecha} })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ message: err });
      });
  }
  const eliminarTurno=(req, res) => {
    const { id } = req.params;
    Turno
      .remove({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ message: err });
      });
  }

  export {
    crearTurno,
    buscarTurno,
    buscarTurnos,
    actualizarTurno,
    eliminarTurno,
  };