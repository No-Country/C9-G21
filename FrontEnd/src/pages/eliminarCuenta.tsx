import Login from "@/components/login/Login";
import { CSSBUTTONBACK, CSSBUTTONBACK2, CSSBUTTONBACK3 } from "@/const/constantsUI";
import { Button, Card, Container, Modal, Text } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";


export default function Index() {
    
    return (
      <Container css={{alignItems: "center", width:"100%", height:"100vh" }}>
        <Card css={{ Top:"48px",Left:"17px", borderRadius:"20px"}} >
    


        <Text>Eliminar cuenta</Text>
        <Card.Image src='interrogacionRojo.svg'></Card.Image>
        <Text css={{font:"DM Sans", width:"256px",height:"48px",top:"232px",left:"53px"}}>¿Realmente quieres eliminar tu cuenta?</Text>
        <Text>Esta acción no se puede deshacer y se perderán todos los datos asociados con la cuenta. Para volver a utilizar nuestro servicio deberás crear una cuenta nuevamente.</Text>
        <Button css={CSSBUTTONBACK2}>Eliminar cuenta</Button>

              <Button css={CSSBUTTONBACK3}>Volver</Button>


        </Card>
      </Container>
    )
}
