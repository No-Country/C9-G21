import React from "react";
import EditRegister from "@/components/register/editRegister";
import { useForm } from "react-hook-form";

export default function EditRegist() {
  const { register, handleSubmit } = useForm();
  return <EditRegister register={register} />;
}