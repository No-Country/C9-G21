import React from "react";
import { useRouter } from "next/router";
import { Modal, Row, Button, Text, Card, Spacer, Col } from "@nextui-org/react";
import Image from "next/image";
import comercio from "../../../public/infoComercio.png";
import iconCliente from "../../../public/iconCliente.svg";
import Link from "next/link";

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
    <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
      css={{
        height: "340px",
        margin: "15px",
        backgroundColor: "White",
      }}
    >
      <Modal.Header css={{ m: "0", p: "0" }}>
        <Col>
          <Text weight={"bold"} size={20}>
            Registrate
          </Text>
          <Spacer y={-0.4} />
          <Text size={12}>
            ¿Ya tenes cuenta?{" "}
            {
              <Link
                href={"/login"}
                onClick={() => setVisible(!visible)}
                style={{ color: "#078E85", textDecoration: "underline" }}
              >
                {" "}
                <b>inicia sesión</b>
              </Link>
            }
          </Text>
        </Col>
      </Modal.Header>
      <Modal.Body>
        <Row justify="space-around" css={{ background: "White" }}>
          <Card
            onPress={() => (router.push("/comerce"), setVisible(!visible))}
            isPressable
            css={{
              width: "110px",
              height: "110px",
              boxShadow: "0px 2px 6px 0px #ACACAC",
            }}
          >
            <Card.Header
              css={{
                justifyContent: "center",
                margin: "0",
                padding: "0",
                paddingTop: "10px",
              }}
            >
              <Text size={12}>
                Soy un <b>negocio</b>
              </Text>
            </Card.Header>
            <Card.Body
              css={{
                justifyContent: "center",
                alignItems: "center",
                margin: "0",
                padding: "0",
                paddingBottom: "18px",
              }}
            >
              <Image src={comercio} alt="comercio" width={50} height={50} />
            </Card.Body>
          </Card>
          <Spacer x={-5} />
          <Card
            onPress={() => (router.push("/user"), setVisible(!visible))}
            isPressable
            css={{
              width: "110px",
              height: "110px",
              boxShadow: "0px 2px 6px 0px #ACACAC",
            }}
          >
            <Card.Header
              css={{
                justifyContent: "center",
                margin: "0",
                padding: "0",
                paddingTop: "10px",
              }}
            >
              <Text size={12}>
                Soy un <b>cliente</b>
              </Text>
            </Card.Header>
            <Card.Body
              css={{
                justifyContent: "center",
                alignItems: "center",
                margin: "0",
                padding: "0",
                paddingBottom: "18px",
              }}
            >
              <Image src={iconCliente} alt="comercio" width={50} height={50} />
            </Card.Body>
          </Card>
        </Row>
      </Modal.Body>
      <Modal.Footer
        justify="center"
        css={{ position: "relative", top: "-55px" }}
      >
        <Button
          size={"sm"}
          bordered
          onPress={closeHandler}
          css={{
            borderColor: "#078E85",
            borderRadius: "30px",
            width: "50px",
            height: "50px",
            boxShadow: "0px 2px 6px 0px #ACACAC",
          }}
        >
          <Text size={15} b css={{ color: "#078E85" }}>
            Volver
          </Text>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
