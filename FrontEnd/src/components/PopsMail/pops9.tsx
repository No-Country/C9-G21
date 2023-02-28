import React from "react";
import { Modal, Button, Text, Row, Card, Spacer, Input } from "@nextui-org/react";
import Link from "next/link";
import { INPUTPROPS, CSSBUTTONBACK, CSSBUTTONNEXT } from "@/const/constantsUI";

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
        <Text css={{fontSize: "18px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign:"center" }}>
            ¿Realmente quieres cancelar este turno?
        </Text>
          <Text css={{ fontSize: "12px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign:"center" }}>
            Esta acción no podrá deshacerse, tu cliente tendrá que tomar un turno nuevamente
          </Text>
          <Row justify="center">
          
            <Input {...INPUTPROPS} placeholder="¿Quieres decirle a tu cliente por qué cancelas el turno?" ></Input>
                <Spacer y={3} />
            </Row>
        </Modal.Body>
        <Modal.Footer>

          <Row justify="center" wrap="nowrap" css={{ paddingTop: "10px", marginLeft: "9px" }}>
          <Button  css={CSSBUTTONBACK}>No, salir</Button>
                            
          <Button  css={CSSBUTTONNEXT}>Sí, cancelar</Button>
            


          </Row>

        </Modal.Footer>
      </Modal>
    </div >
  );
}
