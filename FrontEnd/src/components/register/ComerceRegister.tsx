import { CSSBUTTONBACK, CSSBUTTONNEXT, INPUTPROPS } from "@/const/constantsUI";
import { RegisterFormValues, RegisterUserSchema, resolver } from "@/helpers/forms/register";
import { Col, Button, Text, Input, Row, FormElement, PressEvent, Card, Container, Link, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { FullNameRegister } from "./FullNameRegister";

type ComerceRegisterT = {
    children?: ReactNode;
    isUserRegister?: boolean
}

export const ComerceRegister = ({ children, isUserRegister = true }: ComerceRegisterT) => {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({ resolver });

    const onSubmit = handleSubmit(async (data) => {
        try {
            const user = await axios.post("http://localhost:5000/api/clientes/registrar", {
                email: RegisterUserSchema.parse(data).email,
                password: RegisterUserSchema.parse(data).password
            });
        } catch (err: any) {
            console.log(err.message)
        }
    });
    console.log(errors)
    return (
        <form onSubmit={onSubmit}>
            <Container css={{ width: "fit-content", height: "100vh" }}>
                <Card >
                    <Card.Body css={{ alignContent: "center", rowGap: "$10" }}>
                        <Col css={{
                            display: "flex",
                            alignItems: "center", flexDirection: "column"

                        }}>
                            <Text id="modal-title" size={18} >
                                Registra tú usuario
                            </Text>
                        </Col>
                        {isUserRegister && <FullNameRegister register={register} />}
                        <Input
                            {...INPUTPROPS}
                            placeholder="ejemplo@gmail.com"
                            id="emailInput"
                            label="Email"
                            aria-label="Email"
                            {...register("email")}
                        />
                        <Input
                            {...INPUTPROPS}
                            placeholder="(+54)22345678"
                            id="phoneInput"
                            label="Teléfono"
                            {...register("phone")}
                        />
                        <Row align="center">
                            <Col css={{ justifyContent: "center" }}>
                                <Input.Password
                                    {...INPUTPROPS}
                                    placeholder="*******"
                                    id="passwordInput"
                                    aria-label="Password"
                                    label="Contraseña"
                                    {...register("password")}
                                />
                            </Col>
                            <Spacer x={1} />
                            <Col>
                                <Input.Password
                                    {...INPUTPROPS}
                                    placeholder="*******"
                                    id="confirmPaswordInput"
                                    aria-label="ConfirmPassword"
                                    label="Repetir Contraseña"
                                    {...register("confirmPassword")}
                                />
                            </Col>
                        </Row>

                        <Row justify="space-between" css={{ paddingtop: "20px" }}>
                            <Button auto flat rounded onPress={() => router.back()} css={CSSBUTTONBACK} >
                                Volver
                            </Button>
                            <Button auto type="submit" rounded css={CSSBUTTONNEXT}>
                                Registrarse
                            </Button>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </form>
    )
}
