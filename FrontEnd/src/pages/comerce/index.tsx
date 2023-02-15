import React, { useState } from "react";
import { Col, Button, Text, Input, Row, Dropdown, PressEvent, Card, Container } from "@nextui-org/react";
import { useRouter } from "next/router";


export default function Index() {
    const [visible, setVisible] = useState<boolean>(false);
    const handler = (e: PressEvent) => setVisible(true);
    const router = useRouter();
    const [selected, setSelected] = React.useState(new Set(["Rubro"]));
    const selectedValue = React.useMemo(
      () => Array.from(selected).join(", ").replaceAll("_", " "),
      [selected]
    );
    const closeHandler = () => {
        setVisible(false);
    };


    return (
        <Container css={{ width: "fit-content" }}>
            <Card >
                <Card.Body css={{ alignContent: "center" }}>
                    <Col css={{
                        display: "flex",
                        alignItems: "center", flexDirection: "column"
                    }}>
                        <Text id="modal-title" size={18} >
                            Registra tú Comercio
                        </Text>
                    </Col>

                    <Col css={{
                        paddingTop: "10px",
                        display: "flex",
                        // rowGap: "$sm",
                        flexDirection: "column"
                    }}>
                        <Text id="modal-title" size={14} >
                            Nombre y Apellido
                        </Text>
                        <Input
                            clearable
                            bordered

                            color="primary"
                            size="lg"
                            placeholder="Del titular del comercio"
                            id="nameInput"
                        />
                        <Text id="modal-title" size={14} >
                            Dirección
                        </Text>
                        <Input
                            clearable
                            bordered

                            color="primary"
                            size="lg"
                            placeholder="Dirección del comercio"
                            id="addressInput"
                        />
                        <Text id="modal-title" size={14} >
                            Telefóno
                        </Text>
                        <Input
                            clearable
                            bordered

                            color="primary"
                            size="lg"
                            placeholder="(+54)22345678"
                            id="phoneInput"
                        />
                        <Text id="modal-title" size={14} >
                            Razón Social
                        </Text>
                        <Input
                            clearable
                            bordered

                            color="primary"
                            size="lg"
                            placeholder="Nombre del Comercio"
                            id="addressComerceInput"
                        />
                        <Text id="modal-title" size={14} >
                            Rubro
                        </Text>
                        <Dropdown>
                          <Dropdown.Button  color="primary" bordered css={{ tt: "capitalize" }}>
                            {selectedValue}
                          </Dropdown.Button>
                          <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="primary"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selected}
                            onSelectionChange={setSelected}
                          >
                            <Dropdown.Item key="Mecánico">Mecánico</Dropdown.Item>
                            <Dropdown.Item key="Peluquería">Peluquería</Dropdown.Item>
                            <Dropdown.Item key="Veterinaria">Veterinaria</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Text id="modal-title" size={14} >
                            Email
                        </Text>
                        <Input
                            clearable
                            bordered

                            color="primary"
                            size="lg"
                            placeholder="ejemplo@gmail.com"
                            id="emailInput"
                            aria-label="Email"
                        // contentLeft={<Mail fill="currentColor" />}
                        />
                        <Text id="modal-title" size={14} css={{ paddingTop: "10px" }}>
                            Contraseña
                        </Text>
                        <Input
                            clearable
                            bordered
                            color="primary"
                            size="lg"
                            placeholder="*******"
                            id="passwordInput"
                            aria-label="Password"
                        // contentLeft={<Password fill="currentColor" />}
                        />
                    </Col>

                    <Row justify="flex-end" css={{ paddingBottom: "20px" }}>

                        
                    </Row>

                    <Row justify="space-between" css={{ paddingtop: "20px" }}>
                        <Button auto flat color="error" onPress={() => router.push("/")} css={{ minWidth: "110px", marginRight: "5px" }} >
                            Volver
                        </Button>
                        <Button auto onPress={closeHandler} css={{ minWidth: "110px" }}>
                            Registrarse
                        </Button>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}