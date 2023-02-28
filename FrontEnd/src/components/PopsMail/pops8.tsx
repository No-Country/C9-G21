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
        <Card.Image src='iconOk.svg'></Card.Image>
        </Modal.Header>
       
        <Modal.Body>
        <Text css={{fontSize: "18px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign:"center" }}>
            Tu Turno con (comercio) es el día (dia) a las (hora)
        </Text>
          <Text css={{ fontSize: "12px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign:"center" }}>
            En las 48 hs previas a tu turno recibirás un correo de recordatorio para confirmarlo.
        <Spacer y={1} />
            Es obligatorio confirmar el turno, en caso de no hacerlo el mismo será descartado.
          </Text>
        </Modal.Body>
        <Modal.Footer>

          <Row justify="center" wrap="nowrap" css={{ paddingTop: "10px", marginLeft: "9px" }}>
            <Text>Cancelar turno</Text>
            <Spacer x={1} />
            <Button bordered color="primary" css={{color:"#09BEB2", borderColor:"#09BEB2", marginRight: "10px", borderRadius:"20px"}} auto onClick={closeHandler}>
                Volver
            </Button>
            


          </Row>

        </Modal.Footer>
      </Modal>
    </div >
  );
}
