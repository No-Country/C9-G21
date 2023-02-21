import axios from "axios";
import { LoginFormValues, loginUserSchema } from "./login";

type LoginPaylod = {
    email: string,
    password: string,

}
export async function loginSubmit(data: LoginFormValues) {
    try {
        const loginPayload: LoginPaylod = {
            email: loginUserSchema.parse(data).email,
            password: loginUserSchema.parse(data).password,
        }
        const user = await axios.post(`${process.env.NEXT_PUBLIC_BACKENDHOST}/api/`, loginPayload);
        console.log(user)
        return user
    } catch (err: any) {
        console.log(err.message)
        return err.message
    }
}