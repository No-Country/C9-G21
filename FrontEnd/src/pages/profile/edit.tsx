import {Grid, Link, Container, Text, Row, Col, Spacer, Input, Card, Button} from '@nextui-org/react'
import React from 'react';
import { INPUTPROPS, CSSBUTTONBACK, CSSBUTTONNEXT } from "@/const/constantsUI";
import Footer from "@/components/footer/footer";

const edit = () => {
  return (
    <Container css={{ width: "fit-content" }}>
      <Card>
        <Card.Body css={{ alignItems: "center" }}>
          <Row>
            <Col
              css={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Text id="modal-title" size={18}>
                Editar Perfil
              </Text>
              <form>
                <Col
                  css={{
                    paddingTop: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Input
                    {...INPUTPROPS}
                    placeholder="Peluquería Flores"
                    id="nombrecomercioInput"
                    label="Nombre del comercio"
                    aria-label="Nombre del comercio"
                  />
                  <Input
                    {...INPUTPROPS}
                    placeholder="ejemplo@gmail.com"
                    id="emailInput"
                    label="Email"
                    aria-label="Email"
                    //{...register("email")}
                  />
                  <Input
                    {...INPUTPROPS}
                    placeholder="+56964368559"
                    id="telefonoInput"
                    label="Teléfono"
                    aria-label="Teléfono"
                  />
                  <Spacer x={1.6} />
                </Col>
                <Row justify="flex-start" css={{ paddingBottom: "20px" }}>
                  <Text>
                    <Link href="/" style={{ color: "#09BEB2" }}>
                      Cambiar contraseña
                    </Link>
                  </Text>
                </Row>
                <Card
                  style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/lock-icon.png"
                    alt="Lock icon"
                    style={{ height: "24px", marginRight: "10px" }}
                  />
                </Card>
                <Spacer x={1.6} />
                <Row justify="flex-end" css={{ paddingBottom: "20px" }}>
                  <Text>
                    <Link href="/" style={{ color: "#09BEB2" }}>
                      Editar fotos
                    </Link>
                  </Text>
                </Row>
                <Row>
                  <Text>Texto para descripción del negocio</Text>
                </Row>
                <Spacer x={1.6} />
                <Row justify="flex-end" css={{ paddingBottom: "20px" }}>
                  <Text>
                    <Link href="/" style={{ color: "#09BEB2" }}>
                      Editar descripción
                    </Link>
                  </Text>
                </Row>
                <Row justify="space-between" css={{ paddingTop: "20px" }}>
                  <Button
                    auto
                    flat
                    color="error"
                    css={CSSBUTTONBACK}
                    onPress={() => router.back()}
                  >
                    Volver
                  </Button>
                  <Button auto type="submit" css={CSSBUTTONNEXT}>
                    Guardar
                  </Button>
                </Row>
                <Spacer x={1.6} />
                <Row justify="flex-start" css={{ paddingBottom: "20px" }}>
                  <Text>
                    <Link href="/" style={{ color: "red" }}>
                      Eliminar cuenta
                    </Link>
                  </Text>
                </Row>
              </form>
              <Footer />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default edit;