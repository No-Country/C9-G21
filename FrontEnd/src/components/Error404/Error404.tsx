import React from 'react';
import { Card, Container, Text, Col, Row, Button } from '@nextui-org/react';
import { CSSBUTTONNEXT } from "@/const/constantsUI";

const Error404 = () => {


  return (
    <Container>
        <Card >
                <Card.Body css={{ alignContent: "center" }}>
                    <Col css={{
                        display: "flex",
                        alignItems: "center", flexDirection: "column"
                    }}>
                        <Text id="modal-title" size={18} >
                            Página no encontrada
                        </Text>
                        <Row justify="center">
                            <Text id="modal-title" size={14} >
                                La página solicitada no existe. Haz click en el siguiente botón para ir a nuestra página de inicio.
                            </Text>
                        </Row>
                        <Row justify='center'>
                            <Button href="/index" css={CSSBUTTONNEXT}>INICIO</Button>
                        </Row>
                        <Row>
                            <Card.Image src='error404.svg'></Card.Image>
                        </Row>
                        
                    </Col>
                    
                </Card.Body>
            </Card>
    </Container>
  )
}

export default Error404