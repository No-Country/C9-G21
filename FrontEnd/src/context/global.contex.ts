
export interface userT {
    user: "negocio" | "admin" | "client"
    token: string | undefined
    data: Data
}

export interface Data {
    availability: Availability[]
    _id: string
    password: string
    email: string
    phone: string
    token: any
    confirmacion: boolean
    __v: number
    address: string
    city: string
    name: string
    registeredName: string
    descripcion: string
    descripcion2: string
    rubro: string
    shiftDuration: string
}

export interface Availability {
    monday?: Day
    tuesday?: Day
    wednesday?: Day
    thursday?: Day
    friday?: Day
    saturday?: Day
    sunday?: Day
}

export interface Day {
    isActive: boolean
    horaInicio: string
    horaFinal: string
}


