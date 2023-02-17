import {  Resolver } from "react-hook-form";
export type FormValues = {
    email: string;
    password: string;
};


export const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.email ? values : {},
        errors: !values.email
            ? {
                email: {
                    type: 'required',
                    message: 'El usuario es requerido.',
                },
                password: {
                    type: "required",
                    message: "la contraseña es requerida."
                }
            }
            : {},
    };
};