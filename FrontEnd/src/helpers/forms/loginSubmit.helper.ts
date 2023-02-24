import { endpoints } from "@/const/endpoints";
import { userT } from "@/context/global.contex";
import axios from "axios";
import { LoginFormValues, loginUserSchema } from "./login";

type LoginPaylod = {
    email: string,
    password: string,
}
export const loginSubmit = async (data: LoginFormValues): Promise<userT> => {
    try {
        const loginPayload: LoginPaylod = {
            email: loginUserSchema.parse(data).email,
            password: loginUserSchema.parse(data).password,
        }
        const user = await axios.post<userT>(`${endpoints.base}/api${endpoints.login}`, loginPayload);
        console.log(user.data)
        return user.data
    } catch (err: any) {
        console.log(err.message)
        return err.message
    }
}