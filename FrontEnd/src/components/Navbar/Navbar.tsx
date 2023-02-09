import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Navbar, Spacer, Card } from "@nextui-org/react";
import { Layout } from "../../components/Navbar/Layout";
import menuicon from "../../../public/menu.png";
import logo from "../../../public/logo.png";
import closeMenu from "../../../public/closeMenu.png";

type NavbarLayoutTypes = {
  children: ReactNode;
};

export default function NavbarLayout({ children }: NavbarLayoutTypes) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Layout>
      <Navbar isCompact variant={"sticky"} css={{ backgroundColor: "white" }}>
        <Navbar.Brand>
          <Spacer x={0.5} />
          <Link href="/">
            <Image width={40} src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Content>
          <Link href="/register">
            <Button rounded size="xs" color="secondary">
              Registrate
            </Button>
          </Link>
          <Spacer x={-2.3} />
          <Link href="/login">
            <Button light ripple={false} size="xs" color="secondary">
              Iniciar sesión
            </Button>
          </Link>
          <Spacer x={-2.3} />
          <Navbar.Item>
            <Navbar.Toggle
              onPress={(e) => setOpenMenu(!openMenu)}
              css={{ paddingTop: "9px" }}
            >
              {!openMenu ? (
                <Image width={20} height={20} src={menuicon} alt="icono" />
              ) : (
                <Image width={15} height={15} src={closeMenu} alt="icono" />
              )}
            </Navbar.Toggle>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse
          css={{
            width: "fit-content",
            margin: "0",
            padding: "0",
            display: "flex",
            left: "revert",
          }}
        >
          <Navbar.CollapseItem>
            <Link href="/">Home</Link>
          </Navbar.CollapseItem>
          <Card.Divider />
          <Navbar.CollapseItem>
            <Link href="#">Sobre nosotros</Link>
          </Navbar.CollapseItem>
          <Card.Divider />
          <Navbar.CollapseItem>
            <Link href="#">Ayuda en línea</Link>
          </Navbar.CollapseItem>
          <Card.Divider />
          <Navbar.CollapseItem>
            <Link href="/login">Iniciar sesión</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="/register">
              <Button color="secondary">Registrate</Button>
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </Layout>
  );
}
