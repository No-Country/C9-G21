import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type globalProviderT = {
    user: any,
    setUser: Dispatch<SetStateAction<{}>>
}

export const globalContext = createContext<globalProviderT>({} as globalProviderT);

type globalProvider = {
    children: ReactNode
}

export const GlobalProvider = ({ children }: globalProvider) => {
    const [user, setUser] = useState({})

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