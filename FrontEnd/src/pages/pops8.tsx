import React from 'react';
import { Modal, Button, Text, Row, Card, Spacer, Col, Input, Grid } from "@nextui-org/react";
import { INPUTPROPS, CSSBUTTONBACK, CSSBUTTONNEXT } from "@/const/constantsUI";
import { UseFormRegister } from "react-hook-form/dist/types";
import Image from 'next/image';

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
                <Card.Image src='exclamacionAmarillo.svg'></Card.Image>
                </Modal.Header>
                <Modal.Body css={{ fontSize: "16px", color: "#000000" }}>
                <Text css={{ fontSize: "20px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign: "center" }}>
                ¿Queres eliminar esta imagen?
          </Text>
          <Grid>
          <Card.Image src='SlideShow-1.jpg' css={{ borderRadius:"6px"}}></Card.Image>

      </Grid>
                </Modal.Body>
                <Modal.Footer>
                    <Row>

                <Button css={CSSBUTTONBACK}>volver</Button>
                <Button css={CSSBUTTONNEXT}>Sí Eliminar</Button>
                    </Row>


                </Modal.Footer>
            </Modal>
        </div>
    )
}