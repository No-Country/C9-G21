import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export type userT = {
    token: string,
    role: "admin" | "users" | "comerce",
    email: string
}
type globalProviderT = {
    user: userT,
    setUser: Dispatch<SetStateAction<userT>>
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

    return (
        <>
            <globalContext.Provider
                value={{ user, setUser }}
            >
                {children}
            </globalContext.Provider>
        </>
    )
}