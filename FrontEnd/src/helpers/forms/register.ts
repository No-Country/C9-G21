import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";


export const RegisterUserSchema = z.object({
    name: z.string(),
    lastName: z.string(),
    phone: z.string(),
    email: z.string().email(),
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
}).required();

export type RegisterFormValues = z.infer<typeof RegisterUserSchema>

const validationSchema = z
    .object({
        name: z.string().min(1, { message: "El nombre es requerido" }),
        lastName: z.string().min(1, { message: "El apellido es requerido" }),
        email: z.string().min(1, { message: "El mensaje es requerido" }).email({
            message: "Debe ser un email valido",
        }),
        phone: z.string().min(1, { message: "El apellido es requerido" }),
        password: z
            .string()
            .min(3, { message: "La contraseña debe tener al menos tres caracteres" }),
        confirmPassword: z
            .string()
            .min(1, { message: "Confirmar la Contraseña es requerido" }),

    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Password don't match",
    });


export const resolver = zodResolver(validationSchema);