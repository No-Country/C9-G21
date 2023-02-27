import React from "react";
import { Modal, Button, Text, Row, Card, Spacer, Col, Input } from "@nextui-org/react";
import Link from "next/link";
import { UnLockIcon } from "./UnLockIcon";
import { LockIcon } from "./LockIcon.js";
import { INPUTPROPS } from "@/const/constantsUI";
import { UseFormRegister } from "react-hook-form/dist/types";
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
export default function Pops4({ register }: FullNameRegisterT) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <div>
            <Button auto ghost color="error" onPress={handler}>
                pops 4
            </Button>
            <Modal
                closeButton
                preventClose
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                css={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "27px",
                    padding: "0",
                    paddingBottom: "18px",
                    paddingTop: "18px",
                }}
            >
                <Modal.Header>
                    <Text>Editar Perfil</Text>
                </Modal.Header>
                <Modal.Body css={{ fontSize: "16px", color: "#000000" }}>
                    <Row >
                        <Col>

                            <Row>
                                <Text>Nombre</Text>
                                <Spacer x={3} />
                                <Text>Apellido</Text>
                            </Row>


                            <Row>
                                <Input></Input>
                                <Input></Input>
                                <Spacer y={3} />
                            </Row>
                            <Text>Email</Text>
                            <Row>
                                <Input></Input>
                                <Spacer y={3} />
                            </Row>
                            <Text>Telefono</Text>
                            <Row>
                                <Input></Input>
                                <Spacer y={3} />
                            </Row>
                            <Text>Contraseña</Text>
                            <Spacer y={3} />
                            <Input.Password labelPlaceholder="Password" initialValue="nextui123" />
                            <Spacer y={1.6} />
                            <Row css={{ height: "56px", width: "1px" }}>
                                <Spacer y={1.6} />


                                <Button css={{ width: "1px", height: "56px", color: "rgb(9 190 178)", background: "#000000" }}></Button>
                                <Button css={{ height: "56px", width: "1px", color: "rgb(9 190 178)", background: "#000000" }}></Button>

                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>



                </Modal.Footer>
            </Modal>
        </div >
    );
}
