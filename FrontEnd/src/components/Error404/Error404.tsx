import React from 'react';
import { Card, Container, Text, Col, Row, Button } from '@nextui-org/react';

import { CSSBUTTONNEXT } from "@/const/constantsUI";
import Link from "next/link";

const Error404 = () => {

  
  return (
    <Container css={{alignContent: "center", width:"100%", height:"100vh" }}>
        <Card css={{top:"41px"}} >
                <Card.Body css={{ alignContent: "center", width:"100%" }}>
                    <Col css={{
                        display: "flex",
                        alignItems: "center", flexDirection: "column", padding:"20px"
                    }}>
                        <Text css={{marginTop:"-5px",textAlign:"center",fontFamily: "Comfortaa,cursive", color:"#078E85", width:"286px", height: "32px", fontWeight: "bold"}} size={24} >
                            Página no encontrada
                        </Text>
                        <Row justify="center">
                            <Text id="modal-title" css={{marginTop:"10px", textAlign: "center", marginRight: "10px", marginLeft: "10px"}} size={14}>
                                La página solicitada no existe. Haz click en el siguiente botón para ir a nuestra página de inicio.
                            </Text>
                        </Row>
                        <Row justify='center' css={{top:"5px",margin: "15px"}}>
                            <Link href="/">
                                <Button  css={CSSBUTTONNEXT}>INICIO</Button>
                            </Link>
                        </Row>
                        <Row css={{top:"5px"}}>
                            <Card.Image src='error404.svg'></Card.Image>
                        </Row>
                        
                    </Col>
                    
                </Card.Body>
            </Card>
    </Container>
  )
}

export default Error404