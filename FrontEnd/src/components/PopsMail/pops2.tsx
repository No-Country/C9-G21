import React from "react";
import { Modal, Button, Text, Row, Card, Spacer } from "@nextui-org/react";
import Link from "next/link";

export default function Pops2() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button auto ghost color="error" onPress={handler}>
        pops 2
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
          <Card.Image src='iconComercio.svg'></Card.Image>
        </Modal.Header>
        <Modal.Body css={{ fontSize: "16px", color: "#000000" }}>
          <Text css={{ fontSize: "20px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign:"center"}}>¡Gracias por activar tu cuenta!</Text>
          <Text css={{ fontSize: "16px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign:"center" }}> Ya podes comenzar a usar la aplicación. Solo necesitamos que  configures tu perfil de negocio para que tus futuros clientes puedan encontrarte.</Text>

        </Modal.Body>
        <Modal.Footer>

          <Row justify="center" wrap="nowrap" css={{ paddingTop: "10px" }}>
            <Link href="/EditComerce">
              <Text
                size={11}
                css={{ textDecoration: "underline",fontWeight: "700", fontSize: "16px", color: "#59B3AD", textAlign:"center"}}
              >
                Configurar Perfil
              </Text>
            </Link>
            
           
            <Spacer x={0.5} />

          </Row>

        </Modal.Footer>
      </Modal>
    </div >
  );
}
