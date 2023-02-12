import Turno from "../models/Turno.js";


const crearTurno =(req, res) => {
    const turno = Turno(req.body);
    
    turno
      .save()
      .then((data) => {

        if (turno.Hora != "17:30" && turno.Fecha !="13/02/2023" && turno.Servicio != "peluqueria") {
            turno.Disponible=false;
            res.json(data);
        }else{
            res.send("ese turno no esta disponible")
        }
      })
      .catch((err) => {
        res.json({ message: err });
      });
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