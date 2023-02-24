import { CSSBUTTONBACK, CSSBUTTONNEXT, INPUTPROPS } from "@/const/constantsUI";
import { registerSubmit } from "@/helpers/forms/registerSubmit.helper";
import { RegisterFormValues, RegisterUserSchema, resolverUser, resolverComerce } from "@/helpers/forms/register";
import { Col, Button, Text, Input, Row, Card, Container, Spacer, Modal } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { FullNameRegister } from "./FullNameRegister";
import { EmptyModal } from "../Modal/EmptyModal";

type ComerceRegisterT = {
    children?: ReactNode;
    isUserRegister?: boolean
    test: RegisterFormValues
}

export const ComerceRegister = ({ children, isUserRegister = true, test }: ComerceRegisterT) => {
    const router = useRouter();
    const resolver = isUserRegister ? resolverUser : resolverComerce
    const [visible, setVisible] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<typeof test>({ resolver });

    const onSubmit = handleSubmit(async (data) => {
        if (await registerSubmit(data, isUserRegister) === "ERR_BAD_REQUEST") {
            setVisible(true)
        }
    });

    return (
        <form onSubmit={onSubmit}>
           <EmptyModal visible={visible} setVisible={setVisible} msg={"Ups! El usuario ya se encuentra registrado, intenta con un email valido"} />
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
