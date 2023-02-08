import React from "react";
import { Navbar, Button, Link, Text, PressEvent } from "@nextui-org/react";
import { Layout } from "../../components/Navbar/Layout";
import Router, { useRouter } from "next/router";

type NavbarLayoutTypes = {
    children: JSX.Element
}
export default function NavbarLayout({ children }: NavbarLayoutTypes): JSX.Element {
    const { route } = useRouter();
    const signIn = (e: PressEvent) => {
        Router.push("/login")
    }

    const routesWithoutNavbar = ["/login", "/register"];
    if (routesWithoutNavbar.includes(route)) {
        return children
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
                    <Button auto shadow onPress={signIn}>
                        Log In
                    </Button>
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
