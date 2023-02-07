import React, { ReactNode } from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "../../components/Navbar/Layout";

type NavbarLayoutTypes = {
    children: ReactNode
}
export default function NavbarLayout({ children }: NavbarLayoutTypes) {
    const signIn = () => {

    }
    return (
        <Layout>
            <Navbar isBordered variant={"sticky"}>
                <Navbar.Brand>
                    <Text b color="inherit" hideIn="xs">
                        app-ointment
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Navbar.Link href="#">test</Navbar.Link>

                </Navbar.Content>
                <Navbar.Content>
                    {/* <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link> */}
                    <Button onClick={() => signIn()} auto>Sign in</Button>
                    <Navbar.Item>
                        <Button auto flat as={Link} href="#">
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
            {children}
        </Layout>
    )
}
