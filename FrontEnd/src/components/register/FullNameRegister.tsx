import { INPUTPROPS } from '@/const/constantsUI'
import { RegisterFormValues } from '@/helpers/forms/register'
import { Col, Input, Row, Spacer } from '@nextui-org/react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import React from 'react'

type FullNameRegisterT = {
    register: UseFormRegister<{
        email: string;
        name: string;
        lastName: string;
        phone: string;
        password: string;
        confirmPassword: string;
    } | Omit<{
        email: string;
        name: string;
        lastName: string;
        phone: string;
        password: string;
        confirmPassword: string;
    }, "name" | "lastName">>
}

export const FullNameRegister = ({ register }: FullNameRegisterT) => {
    return (
        <Row >
            <Col css={{ justifyContent: "center" }}>
                <Input
                    {...INPUTPROPS}
                    placeholder="Maria"
                    id="nameInput"
                    label="Nombre"
                    aria-label="nameInput"
                    {...register("name", { required: true })}
                />
            </Col>
            <Spacer x={1} />
            <Col>
                <Input
                    {...INPUTPROPS}
                    placeholder="Lopez"
                    aria-label="lastName"
                    id="lastNameInput"
                    label="Apellido"
                    {...register("lastName")}
                />
            </Col>
        </Row>
    )
}
