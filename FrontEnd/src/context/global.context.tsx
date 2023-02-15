import { createContext, ReactNode, useState } from "react";

export const globalContext = createContext({});

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