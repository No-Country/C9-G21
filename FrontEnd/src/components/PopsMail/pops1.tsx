import React from "react";
import { Modal, Button, Text, Row, Card, Spacer } from "@nextui-org/react";
import Link from "next/link";
import { visibleT } from "../register/ComerceRegister";


export type Modaltype = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<visibleT>>
}

export default function Pops1({ visible, setVisible }: Modaltype) {
  const closeHandler = () => {
    setVisible((prev) => {
      return { ...prev, registered: false }
    })
  };
  return (
    <div>
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
          <Card.Image src='confirmacion.svg'></Card.Image>
        </Modal.Header>
        <Modal.Body>
          <Text css={{ fontSize: "20px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign: "center" }}>
            Genial ya estas registrado
          </Text>
          <Text css={{ fontSize: "16px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign: "center" }}>
            Revisa tu email para poder activar tu cuenta, y ya
            poder comenzar a usar la aplicación.
          </Text>
        </Modal.Body>
        <Modal.Footer>

          <Row justify="center" wrap="nowrap" css={{ paddingTop: "10px" }}>
            <Link href="/#">
              <Text
                size={11}
                css={{ textDecoration: "underline", fontSize: "20px", color: "#59B3AD" }}
              >
                Ir al Home
              </Text>
            </Link>


          </Row>

        </Modal.Footer>
      </Modal>
    </div>
  );
}
