import React, { useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox, PressEvent, Card, Container } from "@nextui-org/react";
// import { Mail } from "./Mail";
// import { Password } from "./Password";

export default function Login() {
    const [visible, setVisible] = useState<boolean>(false);
    const handler = (e: PressEvent) => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
    };

    return (

        <Container css={{ width: "fit-content" }}>
            <Card >
                <Card.Body >

                    <Text id="modal-title" size={18} >
                        Welcome to{" "}
                        <Text b size={18}>
                            app-ointment
                        </Text>
                    </Text>

                    <Input
                        clearable
                        bordered

                        color="primary"
                        size="lg"
                        placeholder="Email"
                        id="emailInput"
                        aria-label="Email"
                    // contentLeft={<Mail fill="currentColor" />}
                    />
                    <Input
                        clearable
                        bordered

                        color="primary"
                        size="lg"
                        placeholder="Password"
                        id="passwordInput"
                        aria-label="Password"
                    // contentLeft={<Password fill="currentColor" />}
                    />
                    <Row justify="space-between">
                        <Checkbox>
                            <Text size={14}>Remember me</Text>
                        </Checkbox>
                        <Text size={14}>Forgot password?</Text>
                    </Row>

                    <Row justify="space-around">

                        <Button auto flat color="error" onPress={closeHandler}>
                            go Back
                        </Button>
                        <Button auto onPress={closeHandler}>
                            Sign in
                        </Button>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}
