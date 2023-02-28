import React from "react";
import EditComerceCard, { InitialValueEditComerce } from "@/components/register/EditComerceCard";

export default function EditComerce() {
  const initialValues: InitialValueEditComerce = {
    name: "",
    address: "",
    city: "",
    registeredName: "",
    rubro: "",
    descripcion: "",
    descripcion2: "",
    availability: [
      {
        monday: {
          isActive: true,
          horaInicio: "10:00",
          horaFinal: "20:00",
        },
      },
      {
        tuesday: {
          isActive: false,
          horaInicio: "10:00",
          horaFinal: "20:00",
        },
      },
      {
        wednesday: {
          isActive: false,
          horaInicio: "10:00",
          horaFinal: "20:00",
        },
      },
      {
        thursday: {
          isActive: false,
          horaInicio: "10:00",
          horaFinal: "20:00",
        },
      },
      {
        friday: {
          isActive: false,
          horaInicio: "10:00",
          horaFinal: "20:00",
        },
      },
      {
        saturday: {
          isActive: false,
          horaInicio: "10:00",
          horaFinal: "20:00",
        },
      },
      {
        sunday: {
          isActive: false,
          horaInicio: "10:00",
          horaFinal: "20:00",
        },
      }
    ],
    type: "client",
    shiftDuration: "1:00",
  }
  return <EditComerceCard initialValues={initialValues} />;
}
