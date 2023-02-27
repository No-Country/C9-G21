import { useEffect, useState } from "react";
import axios from "axios";
import { endpoints } from "@/const/endpoints";
import Pops2 from "./PopsMail/pops2";
import Pops3 from "./PopsMail/pops3";
import { useRouter } from "next/router";

export const AcountActivation = () => {
    const [visible, setVisible] = useState({
        negocio: false,
        clientes: false
    })
    const router= useRouter()
    useEffect(() => {
        const token = localStorage.getItem("token")
        const isUserRegister = localStorage.getItem("isUserRegister")
        const confirm = isUserRegister && isUserRegister === "true" ? "clientes" : "negocio"
        const fetchData = async () => {
            try {
                const axiosResult = await axios.get(`${endpoints.base}/api${endpoints.confirm[confirm]}/${token}`)
                localStorage.removeItem("token")
                if (axiosResult.data.msg == "Negocio confirmado correctamente") {
                    setVisible({
                        negocio: true,
                        clientes: false
                    })
                }
                if (axiosResult.data.msg == "Cliente confirmado correctamente") {
                    setVisible({
                        clientes: true,
                        negocio: false
                    })
                }
            } catch (error) {
                localStorage.removeItem("token")
                router.push("/")
            }

        }
        if (token) {
            fetchData();
        }
    }, [router])

    return (
        <>
           <Pops2 visible={visible.negocio} setVisible={setVisible}></Pops2>
           <Pops3 visible={visible.clientes} setVisible={setVisible}></Pops3>
        </>
    )
}
