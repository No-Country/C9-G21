import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";


export const RegisterUserSchema = z.object({
    name: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
}).required();
export const RegisterComerceSchema = z.object({
    email: z.string().email(),
    phone: z.string(),
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
}).required();

export type RegisterUserFormValues = z.infer<typeof RegisterUserSchema>
export type RegisterComerceFormValues = z.infer<typeof RegisterComerceSchema>
export type RegisterFormValues = RegisterUserFormValues | RegisterComerceFormValues

const validationUserSchema = z
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
    
const validationComerceSchema = z
    .object({
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


export const resolverUser = zodResolver(validationUserSchema);
export const resolverComerce = zodResolver(validationComerceSchema);