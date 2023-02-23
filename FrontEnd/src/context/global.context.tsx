import { comercioT } from "@/pages/search/freesearch/[...index]";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export type userT = {
    token: string,
    role: "admin" | "users" | "comerce",
    email: string
}
type globalProviderT = {
    user: userT,
    setUser: Dispatch<SetStateAction<userT>>
    comerceSelected: comercioT,
    setComerceSelected: Dispatch<SetStateAction<comercioT>>
}

export const globalContext = createContext<globalProviderT>({} as globalProviderT);

type globalProvider = {
    children: ReactNode
}

export const GlobalProvider = ({ children }: globalProvider) => {
    const [user, setUser] = useState<userT>({
        token: "",
        role: "users",
        email: "jimmy@test.com",
    })

    const [comerceSelected, setComerceSelected] = useState<comercioT>({
        id: "",
        description: "",
        title: "",
        img: "",
        distancia: "",
    })

    return (
        <>
            <globalContext.Provider
                value={{ user, setUser, comerceSelected, setComerceSelected }}
            >
                {children}
            </globalContext.Provider>
        </>
    )
}