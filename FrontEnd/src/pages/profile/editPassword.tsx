import {Grid, Link, Container, Text, Row, Col, Spacer, Input, Card, Button} from '@nextui-org/react'
import React from 'react';
import { INPUTPROPS, CSSBUTTONBACK, CSSBUTTONNEXT } from "@/const/constantsUI";
import Footer from "@/components/Footer/Footer";
import { useRouter } from 'next/router';

const Edit = () => {
  const router = useRouter();
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
                Cambiar contraseña
              </Text>
              <form>
                <Col
                  css={{
                    paddingTop: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                <Input.Password
                                {...INPUTPROPS}
                                placeholder="*******"
                                id="passwordInput"
                                aria-label="Password"
                                label="Contraseña actual"
                                type="password"
                               
                            />
                <Input.Password
                                {...INPUTPROPS}
                                placeholder="*******"
                                id="passwordInput"
                                aria-label="Password"
                                label="Nueva contraseña"
                                type="password"
                               
                            />
                <Input.Password
                                {...INPUTPROPS}
                                placeholder="*******"
                                id="passwordInput"
                                aria-label="Password"
                                label="Repetir contraseña"
                                type="password"
                               
                            />
                  <Spacer x={1.6} />
                </Col>
                
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
              </form>
              <Footer />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Edit;