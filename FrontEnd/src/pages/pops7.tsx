import React from 'react';
import { Modal, Button, Text, Row, Card, Spacer, Col, Input } from "@nextui-org/react";
import { INPUTPROPS, CSSBUTTONBACK, CSSBUTTONNEXT } from "@/const/constantsUI";
import { UseFormRegister } from "react-hook-form/dist/types";

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
                pops 7
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
                <Text css={{ fontSize: "20px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign: "center" }}>
                ¡Genial, tu turno fue solicitado!
          </Text>
          <Text css={{ fontSize: "16px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign: "center" }}>
          El día 18/02/23 a las 16:00 hs
          </Text>
                   <Text css={{ fontSize: "12px", fontFamily: "DM Sans", color: "#000000", fontWeight: "400", textAlign: "center" }}>En las 48 hs previas a tu turno recibirás un correo de recordatorio para confirmarlo.

Es obligatorio confirmar el turno, en caso de no hacerlo el mismo será descartado.</Text> 
                </Modal.Body>
                <Modal.Footer>
                <Button css={CSSBUTTONNEXT}>Entendido</Button>


                </Modal.Footer>
            </Modal>
        </div>
    )
}