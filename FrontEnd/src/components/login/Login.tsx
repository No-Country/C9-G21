import React, { Dispatch, SetStateAction, useState } from "react";
import { Col, Button, Text, Input, Row, Card, Container, Link, Modal } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { z } from 'zod'
import { FormValues, resolver } from "@/helpers/forms/login";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { RegisterModal } from "../Modal/RegisterModal";

const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
}).required();
type Ilogin = {
    setModalReg: Dispatch<SetStateAction<boolean>>
    modalReg: boolean
}
export default function Login({ setModalReg, modalReg }: Ilogin) {
    const [errorLoggedUser, setErrorLoggedUser] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });

    const { user, setUser } = useGlobalContext()

    const onSubmit = handleSubmit(async (data) => {
        try {
            const user = await axios.post("http://localhost:5000/api/clientes/login-cliente", {
                email: userSchema.parse(data).email,
                password: userSchema.parse(data).password
            });
            setUser(user)
        } catch (err: any) {
            console.log(err.message)
            setErrorLoggedUser(err.message)
        }
    });

    const resetError = () => {
        setErrorLoggedUser(undefined)
    }
    console.log(errorLoggedUser)
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
                    <Button
                        css={{
                            color: "White",
                            backgroundColor: "#09BEB2",
                            borderRadius: "30px",
                        }}
                        shadow
                        onPress={() => setModalReg(true)}
                    >
                        Regístrate
                    </Button>
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
                            <Input.Password
                                clearable
                                bordered
                                color="primary"
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
                            {errorLoggedUser && <Text >
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
            <RegisterModal setVisible={setModalReg} visible={modalReg} />
        </Container>
    );
}
