const completarNegocio = (negocio) => {
    if (!negocio.name) {
      negocio.name = "";
    }
    if (!negocio.lastName) {
      negocio.lastName = "";
    }
    if (!negocio.address) {
      negocio.address = "";
    }
    if (!negocio.city) {
      negocio.city = "";
    }
    if (!negocio.registeredName) {
      negocio.registeredName = "";
    }
    if (!negocio.rubro) {
      negocio.rubro = "";
    }
    if (!negocio.descripcion) {
      negocio.descripcion = "";
    }
    if (!negocio.descripcion2) {
      negocio.descripcion2 = "";
    }
    if (!negocio.shiftDuration) {
      negocio.shiftDuration = "";
    }
    if (!negocio.availability) {
      negocio.availability = {
        monday: { isActive: false, horaInicio: "", horaFinal: "" },
        tuesday: { isActive: false, horaInicio: "", horaFinal: "" },
        wednesday: { isActive: false, horaInicio: "", horaFinal: "" },
        thursday: { isActive: false, horaInicio: "", horaFinal: "" },
        friday: { isActive: false, horaInicio: "", horaFinal: "" },
        saturday: { isActive: false, horaInicio: "", horaFinal: "" },
        sunday: { isActive: false, horaInicio: "", horaFinal: "" },
      };
    }
    return negocio;
  };
  
  export default completarNegocio;
  