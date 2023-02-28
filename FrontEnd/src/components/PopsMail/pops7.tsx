import React from 'react';
import { Modal, Button, Text, Row, Card, Spacer, Col, Input } from "@nextui-org/react";
import { INPUTPROPS, CSSBUTTONBACK, CSSBUTTONNEXT } from "@/const/constantsUI";
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
export default function Pops5({ register }: FullNameRegisterT) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <div>
            <Button auto ghost color="error" onPress={handler}>
                pops 7
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
                    <Text>Cambiar contraseña</Text>
                </Modal.Header>
                <Modal.Body css={{ fontSize: "16px", color: "#000000" }}>
                    <Row >
                        <Col>
                            <Text>Contraseña actual</Text>
                            <Input.Password {...INPUTPROPS} initialValue="nextui123" />
                            <Spacer y={1} />
                            <Text>Nueva contraseña</Text>
                            <Input.Password {...INPUTPROPS} initialValue="nextui123" />
                            <Spacer y={1} />
                            <Text>Repetir contraseña</Text>
                            <Input.Password {...INPUTPROPS} initialValue="nextui123" />
                            <Spacer y={1} />

                            <Row css={{ height: "56px", width: "1px" }}>
                            <Spacer y={1.6} />


                                
                                <Button  css={CSSBUTTONBACK}>Volver</Button>
                            
                                <Button  css={CSSBUTTONNEXT}>Guardar</Button>
                            
                            </Row>
                        </Col>
                        
                    </Row>
                    
                </Modal.Body>
                <Modal.Footer>



                </Modal.Footer>
            </Modal>
        </div>
    )
}