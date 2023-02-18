import Turno from "../models/Turno.js";


const crearTurno = async (req, res) => {
  const { Hora, Fecha, Servicio } = req.body;
  const existeTurno = await Turno.findOne({ Hora, Fecha, Servicio });

  if (existeTurno) {
    const error = new Error("Turno ya dado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const turno = new Turno(req.body);
    turno.Disponible = false;
    const turnoSave = await turno.save();
    res.json(turnoSave);
  } catch (err) {
    const error = new Error("Error no se puedo crear el turno");
    return res.status(400).json({ msg: error.message });
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
        const error = new Error("No existe un turno con ese nombre");
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
export {
  crearTurno,
  confirmarTurno,
  buscarTurnos,
  eliminarTurno,
  buscarServicios,
  actualizarTurno
};
