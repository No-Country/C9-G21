import React from 'react';
import { Card, Container, Text, Col, Row, Button } from '@nextui-org/react';

import { CSSBUTTONNEXT } from "@/const/constantsUI";

const Error404 = () => {

  
  return (
    <Container>
        <Card >
                <Card.Body css={{ alignContent: "center", width:"100%", height:"100vh" }}>
                    <Col css={{
                        display: "flex",
                        alignItems: "center", flexDirection: "column"
                    }}>
                        <Text css={{fontFamily: "Comfortaa", color:"#078E85"}} size={24} >
                            Página no encontrada
                        </Text>
                        <Row justify="center">
                            <Text id="modal-title" size={14} >
                                La página solicitada no existe. Haz click en el siguiente botón para ir a nuestra página de inicio.
                            </Text>
                        </Row>
                        <Row justify='center' css={{margin: "15px"}}>
                            <Button  css={CSSBUTTONNEXT}>INICIO</Button>
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