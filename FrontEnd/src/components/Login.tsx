import React, { useState } from "react";
import { Col, Button, Text, Input, Row, FormElement, PressEvent, Card, Container, Link, Modal } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useForm, Resolver } from "react-hook-form";
import axios from 'axios'

type FormValues = {
    email: string;
    password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.email ? values : {},
        errors: !values.email
            ? {
                email: {
                    type: 'required',
                    message: 'El usuario es requerido.',
                },
                password:{
                    type: "required",
                    message: "la contraseña es requerida."
                }
            }
            : {},
    };
};
export default function Login() {
    const [errorLoggedUser, setErrorLoggedUser] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
    const onSubmit = handleSubmit(async (data) => {
        try {
            const user = await axios.post("http://localhost:5000/api/administradores/login", {
                email: data.email,
                password: data.password
            });
        } catch (error: any) {
            setErrorLoggedUser(error)
        }
    });

    const resetError = ()=>{
        setErrorLoggedUser(undefined)
    }
    return (
        <Container css={{ width: "fit-content" }}>
            <Card >
                <Card.Body css={{ alignContent: "center" }}>
                    <Col css={{
                        display: "flex",
                        alignItems: "center", flexDirection: "column"
                    }}>
                        <Text id="modal-title" size={18} >
                            Iniciar Sesion
                        </Text>
                        <Text id="modal-title" size={14} >
                            ¿No tienes Cuenta?{" "}
                            <Modal></Modal>
                        </Text>
                    </Col>

                    <form onSubmit={onSubmit}>
                        <Col css={{
                            paddingTop: "10px",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <Text id="modal-title" size={14} >
                                Email
                            </Text>
                            <Input
                                clearable
                                bordered
                                color="primary"
                                size="lg"
                                placeholder="ejemplo@gmail.com"
                                id="emailInput"
                                aria-label="Email"
                                {...register("email")}
                                onChange={resetError}
                            />
                            {errors?.email && <p>{errors.email.message}</p>}
                            <Text id="modal-title" size={14} css={{ paddingTop: "10px" }}>
                                Contraseña
                            </Text>
                            <Input
                                clearable
                                bordered
                                color="primary"
                                size="lg"
                                placeholder="*******"
                                id="passwordInput"
                                aria-label="Password"
                                type="password"
                                {...register("password")}
                                onChange={resetError}
                            />
                            {errors?.email && <p>{errors.email.message}</p>}
                        </Col>

                        <Row justify="flex-end" css={{ paddingBottom: "20px" }}>

                            <Text size={10}><Link href="/register" style={{ color: "black" }}>Olvide mi contraseña</Link></Text>
                        </Row>
                        <Row>
                        {errorLoggedUser&& <Text >
                            {(errorLoggedUser as any)?.response?.data.msg}
                            </Text>}
                        </Row>
                        <Row justify="space-between" css={{ paddingtop: "20px" }}>
                            <Button auto flat color="error" css={{ minWidth: "110px", marginRight: "5px" }} >
                                Volver
                            </Button>
                            <Button auto type="submit" css={{ minWidth: "110px" }}>
                                Iniciar sesión
                            </Button>
                        </Row>
                    </form>
                </Card.Body>
            </Card>
        </Container>
    );
}
