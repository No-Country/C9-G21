import React from "react";
import { Modal, Container, Button, Text, Row, Card, Spacer, Col, Input } from "@nextui-org/react";
import Link from "next/link";
import { UnLockIcon } from "./UnLockIcon";
import { LockIcon } from "./LockIcon.js";
import { INPUTPROPS, CSSBUTTONBACK, CSSBUTTONNEXT } from "@/const/constantsUI";
import { UseFormRegister } from "react-hook-form/dist/types";

//pantalla de editar perfil comercio 

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
                                <Text>Nombre del comercio</Text>
                                <Spacer x={5} />
                            </Row>


                            <Row>
                                <Input {...INPUTPROPS}></Input>
                                <Spacer x={1} />
                                
                            </Row>
                            <Text>Email</Text>
                            <Row>
                                <Input {...INPUTPROPS}></Input>
                                <Spacer y={3} />
                            </Row>
                            <Text>Telefono</Text>
                            <Row>
                                <Input {...INPUTPROPS}></Input>
                                <Spacer y={3} />
                            </Row>
                            <Text>Cambiar contraseña</Text>
                            <Spacer y={1} />
                            <Row>
                                <Card shadow style={{ padding: "10px", display: "flex", alignItems: "center" }}>
                                    <img src="/lock-icon.png" alt="Lock icon" style={{ height: "24px", marginRight: "10px" }} />
                                    
                                </Card>
                                
                            </Row>
                            <Text style={{ textAlign: "right" }}>Editar fotos</Text>
                            <Spacer y={1.6}/>
                            <Text>Texto para descripción del negocio</Text>
                            <Spacer y={1.6}/>
                            <Text style={{ textAlign: "right" }}>Editar descripción</Text>
                            <Spacer y={1.6}/>
                            <Row css={{ height: "56px", width: "1px" }}>
                                <Spacer y={1.6} />


                                
                                <Button  css={CSSBUTTONBACK}>Volver</Button>
                            
                                <Button  css={CSSBUTTONNEXT}>Guardar</Button>
                            
                            </Row>
                            <Text>Eliminar cuenta</Text>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>



                </Modal.Footer>
            </Modal>
        </div >
    );
}
