import axios from "axios";
import { RegisterFormValues, RegisterUserSchema, RegisterComerceSchema } from "./register";

type RegisterPaylod = {
    email: string,
    password: string,
    phone: string,
    name?: string,
    lastName?: string,
}
export async function registerSubmit(data: RegisterFormValues, isUserRegister: boolean) {
    try {
        const registerPayload: RegisterPaylod = {
            email: RegisterComerceSchema.parse(data).email,
            password: RegisterComerceSchema.parse(data).password,
            phone: RegisterComerceSchema.parse(data).phone
        }
        const endpoint = isUserRegister ? "clientes" : "negocio"
        if (isUserRegister) {
            registerPayload.name = RegisterUserSchema.parse(data).name
            registerPayload.lastName = RegisterUserSchema.parse(data).lastName
        }
        const user = await axios.post(`${process.env.NEXT_PUBLIC_BACKENDHOST}/api/${endpoint}/registrar`, registerPayload);
        console.log(user)
        return user
    } catch (err: any) {
        console.log(err.message)
        return err.message
    }
}