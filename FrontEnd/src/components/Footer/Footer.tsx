import Link from "next/link";
import styles from "../../styles/Footer.module.css";
import { Container, Row, Spacer, Text, Col } from "@nextui-org/react";

const Footer = () => {
  return (
<<<<<<< HEAD
    <Container justify="center" css={{ backgroundColor: "#535971", h: "81px", position: "absolute", bottom: "0" }}>
=======
    <Container
      justify="center"
      css={{ backgroundColor: "#535971", h: "81px", maxW: "1400px" }}
    >
>>>>>>> 9e2903b449dea3ee62e8dd41912e0f42a7181672
      <Row justify="center" wrap="nowrap" css={{ paddingTop: "10px" }}>
        <Link href="/#">
          <Text
            size={11}
            css={{ color: "#FAFAFA", textDecoration: "underline" }}
          >
            Sobre nosotros
          </Text>
        </Link>
        <Spacer x={0.3} />
        <Text size={11} css={{ color: "#FAFAFA" }}>
          {" "}
          |{" "}
        </Text>
        <Spacer x={0.3} />
        <Link href="/#">
          <Text
            size={11}
            css={{ color: "#FAFAFA", textDecoration: "underline" }}
          >
            Términos y condiciones
          </Text>
        </Link>
        <Spacer x={0.5} />
        <Text size={11} css={{ color: "#FAFAFA" }}>
          {" "}
          |{" "}
        </Text>
        <Spacer x={0.5} />
        <Link href="/#">
          <Text
            size={11}
            css={{ color: "#FAFAFA", textDecoration: "underline" }}
          >
            Políticas de Privacidad
          </Text>
        </Link>
      </Row>
      <Col css={{ w: "100%", textAlign: "center" }}>
        <Text size={11} css={{ color: "#FAFAFA" }}>
          Copyright © 2023 app.ointment
        </Text>
        <Text size={11} css={{ color: "#FAFAFA" }}>
          Todos los derechos reservados
        </Text>
      </Col>
    </Container>
  );
};

export default Footer;
