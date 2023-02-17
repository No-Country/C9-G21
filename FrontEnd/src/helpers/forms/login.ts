import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

export const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
}).required();

export type LoginFormValues =z.infer<typeof loginUserSchema>

const validationSchema = z
    .object({
        email: z.string().min(1, { message: "El mensaje es requerido" }).email({
            message: "Debe ser un email valido",
        }),
        password: z
            .string()
            .min(3, { message: "La contraseña debe tener al menos tres caracteres" }),
        
    })

export const resolver = zodResolver(validationSchema);