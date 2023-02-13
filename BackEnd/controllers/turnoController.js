import Turno from "../models/Turno.js";

const crearTurno = async (req, res) => {
  try {
    const turno = new Turno(req.body);
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
    confirmarTurno.Disponible = false;
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
    await Turno.then((data) => {
      res.status(200).json(data);
    }).catch((err) => {
      const error = new Error("Error al traer los turnos");
      res.status(404).json({ msg: error.message });
    });
  }
};

export { crearTurno, confirmarTurno, buscarTurnos };
