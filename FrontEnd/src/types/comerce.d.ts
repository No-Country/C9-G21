export type Detail = {
    _id:            string;
    password:       string;
    email:          string;
    phone:          string;
    token:          null;
    confirmacion:   boolean;
    fotos:          Foto[];
    name:           string;
    lastName:       string;
    address:        string;
    city:           string;
    registeredName: string;
    rubro:          string;
    descripcion:    string;
    descripcion2:   string;
    shiftDuration:  string;
    __v:            number;
    availability:   Availability[];
  }
  
  export interface Availability {
    monday?:    Day;
    tuesday?:   Day;
    wednesday?: Day;
    thursday?:  Day;
    friday?:    Day;
    saturday?:  Day;
    sunday?:    Day;
  }
  
  export interface Day {
    isActive:   boolean;
    horaInicio: string;
    horaFinal:  string;
  }
  
  export interface Foto {
    contentType: string;
    _id:         string;
  }