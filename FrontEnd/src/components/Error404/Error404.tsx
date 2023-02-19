import React from 'react';
import { Card, Container, Text, Col, Row } from '@nextui-org/react';

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
                        
                    </Col>
                    
                </Card.Body>
            </Card>
    </Container>
  )
}

export default Error404