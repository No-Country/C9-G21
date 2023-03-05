import { endpoints } from "@/const/endpoints";
import axios, { AxiosError } from "axios";
import {
  RegisterFormValues,
  RegisterUserSchema,
  RegisterComerceSchema,
} from "./register";

type RegisterPaylod = {
  email: string;
  password: string;
  phone: string;
  name?: string;
  lastName?: string;
  type: "negocio" | "clientes";
};
export async function registerSubmit(
  data: RegisterFormValues,
  isUserRegister: boolean
) {
  try {
    const register = isUserRegister ? "clientes" : "negocio";
    const registerPayload: RegisterPaylod = {
      email: RegisterComerceSchema.parse(data).email,
      password: RegisterComerceSchema.parse(data).password,
      phone: RegisterComerceSchema.parse(data).phone,
      type: register,
    };
    if (isUserRegister) {
      registerPayload.name = RegisterUserSchema.parse(data).name;
      registerPayload.lastName = RegisterUserSchema.parse(data).lastName;
    }
    const user = await axios.post(
      `${endpoints.base}/api/${register}/registrar`,
      registerPayload
    );
    return user;
  } catch (err) {
    const error = err as AxiosError;
    console.log(error.code);
    return error.code;
  }
}
