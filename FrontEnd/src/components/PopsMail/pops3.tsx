import React from "react";
import { Modal, Button, Text, Row, Card, Spacer } from "@nextui-org/react";
import Link from "next/link";

export default function Pops3() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button auto ghost color="error" onPress={handler}>
        pops 3
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
          <Card.Image src='iconoCliente.png'></Card.Image>
        </Modal.Header>
        <Modal.Body css={{ fontSize: "16px", color: "#000000" }}>
          <Text css={{ fontSize: "20px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign:"center"}}>¡Gracias por activar tu cuenta!</Text>
          <Text css={{ fontSize: "16px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign:"center" }}> Ya podes comenzar a usar la aplicación, explorar los comercios y solicitar tu primer turno.</Text>

        </Modal.Body>
        <Modal.Footer>

          

        </Modal.Footer>
      </Modal>
    </div >
  );
}
