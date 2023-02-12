import React from "react";
import { useRouter } from "next/router";
import { Modal, Row, Button, Text } from "@nextui-org/react";


export default function App() {
  const [visible, setVisible] = React.useState(false);
  const router = useRouter();
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button css={{
                  color: "White",
                  backgroundColor: "#09BEB2",
                  borderRadius: "30px",
                }} shadow onPress={handler}>
        Regístrate
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Regístrate como:
          </Text>
        </Modal.Header>
        <Modal.Body>
        <Row justify="space-around" css={{ paddingtop: "20px" }}>
                        <Button auto flat onPress={() => router.push("")} css={{ minWidth: "110px", marginRight: "5px" }} >
                            Comercio
                        </Button>
                        <Button auto onPress={() => router.push("")} css={{ minWidth: "110px" }}>
                            Usuario
                        </Button>
                    </Row>  
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Cerrar
          </Button>
          <Button auto onPress={closeHandler}>
            Registrarse
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
