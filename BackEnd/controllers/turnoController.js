import Negocio from "../models/Negocio.js";
import Turno from "../models/Turno.js";


const crearTurno = async (req, res) => {
  const { hora, fecha, servicio } = req.body;
  const existeTurno = await Turno.findOne({ hora, fecha, servicio });


try {
  if (existeTurno) {
    const error = new Error("Turno ya dado");
    return res.status(400).json({ msg: error.message });
    }
    const turno = new Turno(req.body);
    turno.Disponible = false;
    const turnoSave = await turno.save();
    res.json(turnoSave);
  } catch (err) {
    // const error = new Error("Error no se puedo crear el turno");
    return res.status(400).json(err);
  }
};

const confirmarTurno = async (req, res) => {
  const { Token } = req.params;
  const confirmarTurno = await Turno.findOne({ Token });

  if (!confirmarTurno) {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  }

  try {
    confirmarTurno.Token = null;
    confirmarTurno.Confirmacion = true;
    await confirmarTurno.save();
    res.status(200).json({ msg: "El turno fue confirmado correctamente" });
  } catch (err) {
    const error = new Error("Error no se puedo confirmar el turno");
    return res.status(400).json({ msg: error.message });
  }
};

const buscarTurnos = async (req, res) => {
  const { Email } = req.query;
  if (Email) {
    await Turno.find({ Email: { $regex: Email, $options: "i" } })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        const error = new Error("No existe un turno con ese name");
        res.status(404).json({ msg: error.message });
      });
  } else {
    await Turno.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        const error = new Error("Error al traer los turnos");
        res.status(404).json({ msg: error.message });
      });
  }
};

const buscarServicios = async (req, res) => {
  const { Servicio } = req.query;
  try {
    await Turno.find({ Servicio: { $regex: Servicio, $options: "i" } })
      .then((data) => {
        console.log(data);
        res.status(200).json(data);
      })
      .catch((err) => {
        const error = new Error("No existe Turno con ese servicio");
        res.status(404).json({ msg: error.message });
      });
  } catch (err) {
    const error = new Error("Error al buscar un servicio");
    res.status(404).json({ msg: error.message });
  }
};

const actualizarTurno = async (req, res) => {
  const { id } = req.params;
  const { Hora, Fecha } = req.body;
  try{
    await Turno.updateOne({ _id: id }, { $set: { Hora, Fecha } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        const error = new Error("Id no valido para actualizar turno");
        res.status(404).json({ msg: error.message });
      });
  }catch(err){
    const error = new Error("Error al actualizar turno");
    res.status(404).json({ msg: error.message });
  }
};

const eliminarTurno = async (req, res) => {
  const { id } = req.params;
  await Turno.remove({ _id: id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      const error = new Error("Id no existente");
      res.status(404).json({ msg: error.message });
    });
};

//añadir turno a negocio
const agregarTurno = async (req, res) => {
  const turno = new Turno(req.body);
  turno.negocio = req.negocio._id;
  try{
    const turnoAlmacenado = await turno.save();
    res.json(turnoAlmacenado)
  }catch(error){
    console.log(error)
  }
}
//filtrar turnos x negocio
const obtenerTurnos = async (req, res) =>{
  const turnos = await Turno.find().where("negocio").equals(req.negocio);
  res.json(turnos);
}
//para ver 1 turno en particular
const obtenerTurno = async (req, res) => {
  const {id} = req.params;
  const turno = await Turno.findById(id);
  if(!turno){
    res.status(404).json({msg: "Turno no encontrado"});
  }
  if(turno.negocio._id.toString() !== req.negocio._id.toString()){
    return res.json({msg: "Acción no válida"});
  }
  res.json(turno);
}
const editarTurno = async (req, res) =>{
  const {id} = req.params;
  const turno = await Turno.findById(id);
  if(!turno){
    res.status(404).json({msg: "No encontrado"})
  }
  if(turno.negocio._id.toString() !== req.negocio._id.toString()){
    return res.json({msg: "Acción no válida"});
  }
  //actualizar turno
  turno.name = req.body.name || turno.name;
  turno.lastName = req.body.lastName || turno.lastName;
  turno.email = req.body.email || turno.email;
  turno.fecha = req.body.fecha || turno.fecha;
  turno.hora = req.body.hora || turno.hora;
  turno.servicio = req.body.servicio || turno.servicio;
  turno.confirmacion = req.body.confirmacion || turno.confirmacion;
  turno.disponible = req.body.disponible || turno.disponible;
  try {
    const turnoEditado = turno.save();
    res.json(turnoEditado);
  } catch (error) {
    console.log(error);
  }

}

function obtenerTurnosNegocio(req, res){
  Turno.find({}, function(err, turnos){
    Negocio.populate(turnos, {path: "negocio", function (err, turnos) {
      res.status(200).send(turnos);
      
    }})
  })
}

export {
  crearTurno,
  confirmarTurno,
  buscarTurnos,
  eliminarTurno,
  buscarServicios,
  actualizarTurno,
  agregarTurno,
  obtenerTurno,
  obtenerTurnos,
  editarTurno,
  obtenerTurnosNegocio
};
