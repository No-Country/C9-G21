import { CSSBUTTONBACK, CSSBUTTONNEXT, INPUTPROPS } from "@/const/constantsUI";
import { registerSubmit } from "@/helpers/forms/registerSubmit.helper";
import { RegisterFormValues, RegisterUserSchema, resolverUser, resolverComerce } from "@/helpers/forms/register";
import { Col, Button, Text, Input, Row, Card, Container, Spacer, Modal } from "@nextui-org/react";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { FullNameRegister } from "./FullNameRegister";
import { EmptyModal } from "../Modal/EmptyModal";
import Pops1 from "../PopsMail/pops1";
import Pops9 from "../PopsMail/pops9"



type ComerceRegisterT = {
    children?: ReactNode;
    isUserRegister?: boolean
    test: RegisterFormValues
}
export type visibleT = {
    registered: boolean,
    alreadyCreated: boolean
}

// guardar token el localstorage
export const ComerceRegister = ({ children, isUserRegister = true, test }: ComerceRegisterT) => {
    const router = useRouter();
    const resolver = isUserRegister ? resolverUser : resolverComerce
    const [visible, setVisible] = useState<visibleT>({
        registered: false,
        alreadyCreated: false
    })
    const { register, handleSubmit, formState: { errors } } = useForm<typeof test>({ resolver });
    const onSubmit = handleSubmit(async (data) => {
        const response = await registerSubmit(data, isUserRegister)
        if (response === "ERR_BAD_REQUEST") {
            setVisible((prev) => {
                return { ...prev, alreadyCreated: true }
            })
        } else {
            localStorage.setItem("token", (response as any).data.token)
            localStorage.setItem("isUserRegister", isUserRegister ? "true" : "false")
            setVisible((prev) => {
                return { ...prev, registered: true }
            })
        }
    });

    const alreadyCreated = () => setVisible((prev) => {
        return {
            ...prev,
            alreadyCreated: false
        }
    })
    return (
        <form onSubmit={onSubmit}>
            <EmptyModal
                visible={visible.alreadyCreated} closeHandler={alreadyCreated}
                body={<Text>El email ya ha sido registrado</Text>}
            />
            <Pops1 visible={visible.registered} setVisible={setVisible} ></Pops1>
            <Pops9  ></Pops9>



            <Container css={{ width: "fit-content", height: "100vh" }}>
                {/* <Pops1></Pops1> */}
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
