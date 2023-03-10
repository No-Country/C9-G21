import React from "react"
import { Card, Container, Text, PressEvent, Button, Col, Row } from "@nextui-org/react";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";


import  {useRouter}  from "next/router";




export default function useVerMas() {
  const router = useRouter()

  return (
    <div>
    <Container css={{alignItems: "center", width:"100%", height:"100vh" }}>
    <Card css={{top:"41px", }} >
        <Card.Body css={{alignContent: "center", width:"100%",justifyContent: "center" }}>
            <Text css={{fontFamily:"Comfortaa", fontWeight: "bold", color:"#535971", fontSize:"20px", textAlign: "center", }}>Rubros disponibles</Text>
                <Row css={{display: "flex", justifyContent: "center"}}>
            <Button icon={
                
                <Image 
                    src={"PeluIcon.svg"} 
                    alt="icon" width={25} 
                    height={25}
                    style={{ paddingLeft: "3px" }}
                    />
                }
                css={{
                    alignItems: "center",
                    backgroundColor: "#078E85",
                    width: "160px",
                    height: "40px",
                    borderRadius: "19px",
                    margin: "10px",
                    boxShadow: "2px 4px 6px 0px #ACACAC",
                  }}
                > <Text
                size={16}
                b
                css={{
                  color: "#F8F8F8",
                  fontFamily: "Comfortaa",
                  marginLeft: "15px",
                  padding: "0px",
                }}
              >
                Peluqueria
              </Text></Button>
            <Button icon={
                <Image 
                    src={"barber.svg"} 
                    alt="icon" width={25} 
                    height={25}
                    style={{ paddingLeft: "2px" }}
                    />
                }
                css={{
                    alignItems: "center",
                    backgroundColor: "#078E85",
                    width: "127px",
                    height: "40px",
                    margin: "10px",
                    borderRadius: "19px",
                    boxShadow: "2px 4px 6px 0px #ACACAC",
                  }}
                ><Text
                size={16}
                b
                css={{
                  color: "#F8F8F8",
                  fontFamily: "Comfortaa",
                  marginLeft: "15px",
                  padding: "0px",
                }}
              >
                Barber??a
              </Text></Button> 
                </Row>
                <Row css={{display: "flex", justifyContent: "center"}}>
            <Button icon={
                <Image 
                    src={"estetica.svg"} 
                    alt="icon" width={25} 
                    height={25}
                    style={{ paddingLeft: "2px" }}
                    />
                }
                css={{
                    alignItems: "center",
                    backgroundColor: "#078E85",
                    width: "127px",
                    height: "40px",
                    margin: "10px",
                    borderRadius: "19px",
                    boxShadow: "2px 4px 6px 0px #ACACAC",
                  }}
                ><Text
                size={16}
                b
                css={{
                  color: "#F8F8F8",
                  fontFamily: "Comfortaa",
                  marginLeft: "15px",
                  padding: "0px",
                }}
              >
                Est??tica
              </Text></Button>
            <Button icon={
                <Image 
                    src={"vet.svg"} 
                    alt="icon" width={25} 
                    height={25}
                    style={{ paddingLeft: "2px" }}
                    />
                }
                css={{
                    alignItems: "center",
                    backgroundColor: "#078E85",
                    width: "160px",
                    height: "40px",
                    margin: "10px",
                    borderRadius: "19px",
                    boxShadow: "2px 4px 6px 0px #ACACAC",
                  }}
                ><Text
                size={16}
                b
                css={{
                  color: "#F8F8F8",
                  fontFamily: "Comfortaa",
                  marginLeft: "15px",
                  padding: "0px",
                }}
              >
                Veterinaria
              </Text></Button>
                </Row>
                <Row css={{display: "flex", justifyContent: "center"}}>
            <Button icon={
                <Image 
                    src={"vector.svg"} 
                    alt="icon" width={25} 
                    height={25}
                    style={{ paddingLeft: "2px" }}
                    />
                }
                css={{
                    alignItems: "center",
                    backgroundColor: "#078E85",
                    width: "160px",
                    height: "40px",
                    margin: "10px",
                    borderRadius: "19px",
                    boxShadow: "2px 4px 6px 0px #ACACAC",
                  }}
                ><Text
                size={16}
                b
                css={{
                  color: "#F8F8F8",
                  fontFamily: "Comfortaa",
                  marginLeft: "15px",
                  padding: "0px",
                }}
              >
                Mec??nico
              </Text></Button>
            <Button icon={
                <Image 
                    src={"Salud.svg"} 
                    alt="icon" width={25} 
                    height={25}
                    style={{ paddingLeft: "2px" }}
                    />
                }
                css={{
                    alignItems: "center",
                    backgroundColor: "#078E85",
                    width: "127px",
                    height: "40px",
                    margin: "10px",
                    borderRadius: "19px",
                    boxShadow: "2px 4px 6px 0px #ACACAC",
                  }}
                ><Text
                size={16}
                b
                css={{
                  color: "#F8F8F8",
                  fontFamily: "Comfortaa",
                  marginLeft: "15px",
                  padding: "0px",
                }}
              >
                Salud
              </Text></Button>
                </Row>
                <Row css={{display: "flex", justifyContent: "center"}}>
            <Button icon={
                <Image 
                    src={"diente.svg"} 
                    alt="icon" width={25} 
                    height={25}
                    style={{ paddingLeft: "2px" }}
                    />
                }
                css={{
                    alignItems: "center",
                    backgroundColor: "#078E85",
                    width: "160px",
                    height: "40px",
                    margin: "10px",
                    borderRadius: "19px",
                    boxShadow: "2px 4px 6px 0px #ACACAC",
                  }}
                ><Text
                size={16}
                b
                css={{
                  color: "#F8F8F8",
                  fontFamily: "Comfortaa",
                  marginLeft: "15px",
                  padding: "0px",
                }}
              >
                Odontologia
              </Text></Button>
            <Button icon={
                <Image 
                    src={"manicura.svg"} 
                    alt="icon" width={25} 
                    height={25}
                    style={{ paddingLeft: "2px" }}
                    />
                }
                css={{
                    alignItems: "center",
                    backgroundColor: "#078E85",
                    width: "160px",
                    height: "40px",
                    margin: "10px",
                    borderRadius: "19px",
                    boxShadow: "2px 4px 6px 0px #ACACAC",
                  }}
                ><Text
                size={16}
                b
                css={{
                  color: "#F8F8F8",
                  fontFamily: "Comfortaa",
                  marginLeft: "15px",
                  padding: "0px",
                }}
              >
                Manicura
              </Text></Button>
                </Row>
                <Row css={{display: "flex", justifyContent: "center"}}>
            <Button icon={
                <Image 
                    src={"mental.svg"} 
                    alt="icon" width={25} 
                    height={25}
                    style={{ paddingLeft: "2px" }}
                    />
                }
                css={{
                    alignItems: "center",
                    backgroundColor: "#078E85",
                    width: "160px",
                    height: "40px",
                    margin: "10px",
                    borderRadius: "19px",
                    boxShadow: "2px 4px 6px 0px #ACACAC",
                  }}
                ><Text
                size={16}
                b
                css={{
                  color: "#F8F8F8",
                  fontFamily: "Comfortaa",
                  marginLeft: "15px",
                  padding: "0px",
                }}
              >
                Salud mental
              </Text></Button>
            <Button icon={
                <Image 
                    src={"otros.svg"} 
                    alt="icon" width={25} 
                    height={25}
                    style={{ paddingLeft: "2px" }}
                    />
                }
                css={{
                    alignItems: "center",
                    backgroundColor: "#078E85",
                    width: "160px",
                    height: "40px",
                    margin: "10px",
                    borderRadius: "19px",
                    boxShadow: "2px 4px 6px 0px #ACACAC",
                  }}
                ><Text
                size={16}
                b
                css={{
                  color: "#F8F8F8",
                  fontFamily: "Comfortaa",
                  marginLeft: "15px",
                  padding: "0px",
                }}
              >
                Otros
              </Text></Button>
                </Row>
              
        </Card.Body>
    </Card>
    </Container>
    <Footer/>    
      </div>

  )
}
