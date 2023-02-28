import React from 'react';
import { Modal, Button, Text, Row, Card, Spacer, Col, Input } from "@nextui-org/react";
import { INPUTPROPS, CSSBUTTONBACK, CSSBUTTONNEXT } from "@/const/constantsUI";
import { UseFormRegister } from "react-hook-form/dist/types";
import Link from 'next/link';

export default function Pops5() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <div>
            <Button auto ghost color="error" onPress={handler}>
                pops turno dado
            </Button>
            <Modal
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
                    <Card.Image src='tildeturno.svg'></Card.Image>
                </Modal.Header>
                <Modal.Body css={{ fontSize: "16px", color: "#000000" }}>

                    <Text css={{ fontSize: "18px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign: "center" }}>
                    Tu turno con Celia Rodríguez es el día 15/03/23 a las 15:30 hs
                    </Text>
                    
                </Modal.Body>
                <Modal.Footer>
                <Link href="/#">
              <Text
                size={11}
                css={{ textDecoration: "underline",lineHeight:"18px",  fontFamily: "DM Sans",fontWeight: "700",fontSize: "14px", color: "#59B3AD",paddingLeft:"10px"}}
              >
                Cancelar turno
              </Text>
            </Link>
                    <Button css={CSSBUTTONBACK}>Volver</Button>


                </Modal.Footer>
            </Modal>
        </div>
    )
}