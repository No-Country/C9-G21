import React from "react";
import { useRouter } from "next/router";
import { Modal, Row, Button, Text } from "@nextui-org/react";
type ModalType = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const RegisterModal = ({ visible, setVisible }: ModalType) => {
  const router = useRouter();
  const handler = () => setVisible(!true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
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
            <Button
              auto
              flat
              onPress={() => (router.push("/comerce"), setVisible(!visible))}
              css={{ minWidth: "110px", marginRight: "5px" }}
            >
              Comercio
            </Button>
            <Button
              auto
              onPress={() => (router.push("/user"), setVisible(!visible))}
              css={{ minWidth: "110px" }}
            >
              Usuario
            </Button>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
