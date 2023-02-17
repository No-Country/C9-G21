import { RegisterFormValues, RegisterUserSchema, resolver } from "@/helpers/forms/register";
import { Col, Button, Text, Input, Row, FormElement, PressEvent, Card, Container, Link } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";

type RegisterT = {
    children?: ReactNode;
}


export const Register = ({ children }: RegisterT) => {
    const [visible, setVisible] = useState<boolean>(false);
    const router = useRouter();
    const closeHandler = () => {
        setVisible(false);
    };
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({ resolver });

    const onSubmit = handleSubmit(async (data) => {
        try {
            const user = await axios.post("http://localhost:5000/api/clientes/login-cliente", {
                email: RegisterUserSchema.parse(data).email,
                password: RegisterUserSchema.parse(data).password
            });
        } catch (err: any) {
            console.log(err.message)
        }
    });
    return (
        <Container css={{ width: "fit-content" }}>
            <Card >
                <Card.Body css={{ alignContent: "center" }}>
                    <form onSubmit={onSubmit}>
                        <Col css={{
                            display: "flex",
                            alignItems: "center", flexDirection: "column"
                        }}>
                            <Text id="modal-title" size={18} >
                                Registra tú usuario
                            </Text>
                        </Col>

                        <Col css={{
                            paddingTop: "10px",
                            display: "flex",
                            // rowGap: "$sm",
                            flexDirection: "column"
                        }}>



                            <Text id="modal-title" size={14} >
                                Nombre y Apellido
                            </Text>
                            <Input
                                clearable
                                bordered

                                color="primary"
                                size="lg"
                                placeholder=""
                                id="nameInput"
                            />
                            <Text id="modal-title" size={14} >
                                Dirección
                            </Text>
                            <Input
                                clearable
                                bordered

                                color="primary"
                                size="lg"
                                placeholder=""
                                id="addressInput"
                            />
                            <Text id="modal-title" size={14} >
                                Telefóno
                            </Text>
                            <Input
                                clearable
                                bordered

                                color="primary"
                                size="lg"
                                placeholder="(+54)22345678"
                                id="phoneInput"
                            />
                            {children}
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

                            />
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

                            />
                        </Col>

                        <Row justify="flex-end" css={{ paddingBottom: "20px" }}>


                        </Row>

                        <Row justify="space-between" css={{ paddingtop: "20px" }}>
                            <Button auto flat color="error" onPress={() => router.push("/")} css={{ minWidth: "110px", marginRight: "5px" }} >
                                Volver
                            </Button>
                            <Button auto onPress={closeHandler} css={{ minWidth: "110px" }}>
                                Registrarse
                            </Button>
                        </Row>
                    </form>
                </Card.Body>
            </Card>
        </Container>
    )
}
