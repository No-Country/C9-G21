import React, { useState } from "react";
import {
  Col,
  Button,
  Text,
  Input,
  Row,
  FormElement,
  PressEvent,
  Card,
  Container,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { RegisterModal } from "./Modal/RegisterModal";

// import { Mail } from "./Mail";
// import { Password } from "./Password";

export default function Login() {
  const [visible, setVisible] = useState<boolean>(false);
  const [modalReg, setModalReg] = useState<boolean>(false);
  const handler = (e: PressEvent) => setVisible(true);
  const router = useRouter();
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <Container css={{ width: "fit-content" }}>
      <Card>
        <Card.Body css={{ alignContent: "center" }}>
          <Col
            css={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Text id="modal-title" size={18}>
              Iniciar Sesion
            </Text>
            <Text id="modal-title" size={14}>
              ¿No tienes Cuenta? {/* <RegisterModal/> */}
            </Text>
          </Col>
          <Button
            css={{
              color: "White",
              backgroundColor: "#09BEB2",
              borderRadius: "30px",
            }}
            shadow
            onPress={() => setModalReg(true)}
          >
            Regístrate
          </Button>
          <Col
            css={{
              paddingTop: "10px",
              display: "flex",
              // rowGap: "$sm",
              flexDirection: "column",
            }}
          >
            <Text id="modal-title" size={14}>
              Email
            </Text>
            <Input
              clearable
              bordered
              color="primary"
              size="lg"
              placeholder="ejemplo@gmail.com"
              id="emailInput"
              aria-label="Email"
              // contentLeft={<Mail fill="currentColor" />}
            />
            <Text id="modal-title" size={14} css={{ paddingTop: "10px" }}>
              Contraseña
            </Text>
            <Input
              clearable
              bordered
              color="primary"
              size="lg"
              placeholder="*******"
              id="passwordInput"
              aria-label="Password"
              // contentLeft={<Password fill="currentColor" />}
            />
          </Col>

          <Row justify="flex-end" css={{ paddingBottom: "20px" }}>
            <Text size={10}>
              <Link href="/register" style={{ color: "black" }}>
                Olvide mi contraseña
              </Link>
            </Text>
          </Row>

          <Row justify="space-between" css={{ paddingtop: "20px" }}>
            <Button
              auto
              flat
              color="error"
              onPress={() => router.push("/")}
              css={{ minWidth: "110px", marginRight: "5px" }}
            >
              Volver
            </Button>
            <Button auto onPress={closeHandler} css={{ minWidth: "110px" }}>
              Iniciar sesión
            </Button>
          </Row>
        </Card.Body>
      </Card>
      <RegisterModal setVisible={setModalReg} visible={modalReg} />
    </Container>
  );
}
