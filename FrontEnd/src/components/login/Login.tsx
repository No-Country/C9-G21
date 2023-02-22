import React, { Dispatch, SetStateAction, useState } from "react";
import { Col, Button, Text, Input, Row, Card, Container, Link, Modal, Spacer } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { LoginFormValues, resolver } from "@/helpers/forms/login";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { RegisterModal } from "../Modal/RegisterModal";
import { useRouter } from "next/router";
import { CSSBUTTONBACK, CSSBUTTONNEXT, INPUTPROPS } from "@/const/constantsUI";
import { loginSubmit } from "@/helpers/forms/loginSubmit.helper";
import { userT } from "@/context/global.context";

type Ilogin = {
    setModalReg: Dispatch<SetStateAction<boolean>>
    modalReg: boolean
}
export default function Login({ setModalReg, modalReg }: Ilogin) {
    const [errorLoggedUser, setErrorLoggedUser] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({ resolver });

    const { user, setUser } = useGlobalContext()

    const onSubmit = handleSubmit(async (data) => {
        setUser(await loginSubmit(data))
    });
    const router = useRouter()
  
    console.log(user, errorLoggedUser)
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
                        <Row justify="center">
                            <Text id="modal-title" size={14} >
                                ¿No tienes Cuenta?{" "}
                                <Modal></Modal>
                            </Text>
                            <Spacer x={0.3} />
                            <Text id="modal-title" size={13} color={"#09BEB2"} onClick={() => setModalReg(true)}>
                                Regístrate
                            </Text>
                        </Row>
                    </Col>
                    <form onSubmit={onSubmit}>
                        <Col css={{
                            paddingTop: "10px",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <Input
                                {...INPUTPROPS}
                                placeholder="ejemplo@gmail.com"
                                id="emailInput"
                                label="Email"
                                aria-label="Email"
                                {...register("email")}
                            />
                            <Input.Password
                                {...INPUTPROPS}
                                placeholder="*******"
                                id="passwordInput"
                                aria-label="Password"
                                label="Contraseña"
                                type="password"
                                {...register("password")}
                            />
                        </Col>
                        <Row justify="flex-end" css={{ paddingBottom: "20px" }}>
                            <Text size={10}><Link href="/register" style={{ color: "#09BEB2" }}>Olvide mi contraseña</Link></Text>
                        </Row>
                     
                        <Row justify="space-between" css={{ paddingtop: "20px" }}>
                            <Button auto flat color="error" css={CSSBUTTONBACK} onPress={() => router.back()} >
                                Volver
                            </Button>
                            <Button auto type="submit" css={CSSBUTTONNEXT}>
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
