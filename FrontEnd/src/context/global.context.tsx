import { comercioT } from "@/pages/search/freesearch/[index]";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { userT } from "./global.contex";


type globalProviderT = {
    user: userT,
    setUser: Dispatch<SetStateAction<userT>>
    comerceSelected: comercioT | undefined,
    setComerceSelected: Dispatch<SetStateAction<comercioT | undefined>>
}

export const globalContext = createContext<globalProviderT>({} as globalProviderT);

type globalProvider = {
    children: ReactNode
}

export const GlobalProvider = ({ children }: globalProvider) => {
    const [user, setUser] = useState<userT>({
        "token": undefined,
        "data": {
            "availability": [
                {
                    "monday": {
                        "isActive": true,
                        "horaInicio": "10:00",
                        "horaFinal": "20:00"
                    }
                },
                {
                    "tuesday": {
                        "isActive": true,
                        "horaInicio": "10:00",
                        "horaFinal": "20:00"
                    }
                },
                {
                    "wednesday": {
                        "isActive": true,
                        "horaInicio": "10:00",
                        "horaFinal": "20:00"
                    }
                },
                {
                    "thursday": {
                        "isActive": true,
                        "horaInicio": "10:00",
                        "horaFinal": "20:00"
                    }
                },
                {
                    "friday": {
                        "isActive": true,
                        "horaInicio": "10:00",
                        "horaFinal": "20:00"
                    }
                },
                {
                    "saturday": {
                        "isActive": true,
                        "horaInicio": "10:00",
                        "horaFinal": "20:00"
                    }
                },
                {
                    "sunday": {
                        "isActive": true,
                        "horaInicio": "10:00",
                        "horaFinal": "20:00"
                    }
                }
            ],
            "_id": "63f7cdc4e048302c7a9dc21a",
            "password": "$2b$10$7DflWtcsre4CpgHKbR/Kuex3uPZDUArqUOax2v9M7py7waEK02sGG",
            "email": "rodrigoagustin@mail.com.ar",
            "phone": "2616636369",
            "token": null,
            "confirmacion": true,
            "__v": 0,
            "address": "sanb martin 1355",
            "city": "mendoza",
            "name": "lets Print",
            "registeredName": "lets print 3d",
            "descripcion": "descripcion",
            "descripcion2": "descripcion 2",
            "rubro": "mecanica",
            "shiftDuration": "2:00"
        },
        "user": "negocio"
    })

    const [comerceSelected, setComerceSelected] = useState<comercioT | undefined>()

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