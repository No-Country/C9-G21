import React from "react";
import { Modal, Button, Text, Row, Card, Spacer } from "@nextui-org/react";
import { Modaltype } from "./pops2";

export default function Pops3({ visible, setVisible }: Modaltype) {
  const closeHandler = () => {
    setVisible({
      negocio: false,
      clientes: false,
    });
  };
  return (

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
        <Text css={{ fontSize: "20px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign: "center" }}>¡Gracias por activar tu cuenta!</Text>
        <Text css={{ fontSize: "16px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign: "center" }}> Ya podes comenzar a usar la aplicación, explorar los comercios y solicitar tu primer turno.</Text>

      </Modal.Body>
      <Modal.Footer>



      </Modal.Footer>
    </Modal>

  );
}
