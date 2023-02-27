import React from "react";
import { Modal, Button, Text, Row, Card, Spacer } from "@nextui-org/react";
import Link from "next/link";

export default function PopsTurnos() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
       <Button auto ghost color="error" onPress={handler}>
        pop
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
        <Card.Image src='cambioTurno.svg'></Card.Image>
        </Modal.Header>
       
        <Modal.Body>
          <Text css={{ fontSize: "20px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign: "center" }}>
            ¿Realmente quieres cancelar ese turno?
          </Text>
          <Text css={{ fontSize: "16px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign:"center" }}>
            Esta acción no puede deshacerse, tendrás que solicitar un turno nuevamente.
          </Text>
        </Modal.Body>
        <Modal.Footer>

          <Row justify="center" wrap="nowrap" css={{ paddingTop: "10px", marginLeft: "9px" }}>
            <Button bordered color="primary" css={{color:"#09BEB2", borderColor:"#09BEB2", marginRight: "10px", borderRadius:"20px"}} auto onClick={closeHandler}>
                No,salir
            </Button>
            <Link href="/">
                <Button color="primary" css={{backgroundColor:"#09BEB2", borderColor:"#09BEB2", borderRadius:"20px"}} auto>
                    Si,Cancelar
                </Button>
            </Link>


          </Row>

        </Modal.Footer>
      </Modal>
    </div >
  );
}
