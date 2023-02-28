import Login from "@/components/login/Login";
import { CSSBUTTONBACK, CSSBUTTONBACK2, CSSBUTTONBACK3 } from "@/const/constantsUI";
import { Button, Card, Container, Modal, Text } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";


export default function Index() {

  return (
    <Container css={{ alignItems: "center", width: "100%", height: "100vh" }}>
      <Card css={{ Top: "48px", Left: "17px", borderRadius: "20px",width: "320px",
          height: "496px", }} >



        <Text css={{
          fontSize: "24px",
          width: "238px",
          height: "24px",
          paddingLeft:"33px",
          paddingTop:"20px",
          lineHeight:"34px",
          fontWeight: "700",
          textAlign: "left"
        }}>Eliminar cuenta</Text>


        <Card.Image src='exclamacionRojo.svg' css={{
          width: "90px",
          height: "90px",
          marginTop:"48px"
        }}></Card.Image>
        <Text css={{
          height: "48px",
          width: "256px",
          left: "53px",
          top: "232px",
          fontFamily: "DM Sans",
          fontWeight:"700px",
          paddingLeft:"50px",
          paddingTop:"12px",
          fontSize: "16px",
          lineHeight: "20.83px",
          textAlign: "center"
        }}>¿Realmente quieres eliminar tu cuenta?</Text>
        <Text css={{
           height: "72px",
           width: "280px",
           left: "53px",
           top: "232px",
           paddingLeft:"30px",
           paddingTop:"12px",
          fontSize: "12px",
          fontFamily: "DM Sans",
          // color: "#000000",
          fontWeight: "400",
          // lineHeight: "15.62px",
          textAlign: "center"
        }}>Esta acción no se puede deshacer y se perderán todos los datos asociados con la cuenta. Para volver a utilizar nuestro servicio deberás crear una cuenta nuevamente.</Text>
        <Button css={CSSBUTTONBACK2}>Eliminar cuenta</Button>

        <Button css={CSSBUTTONBACK3}>Volver</Button>


      </Card>
    </Container >
  )
}
