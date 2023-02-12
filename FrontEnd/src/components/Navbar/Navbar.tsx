import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Navbar, Spacer, Card, Text } from "@nextui-org/react";
import { Layout } from "../../components/Navbar/Layout";
import menuicon from "../../../public/menu.png";
import logo from "../../../public/logoappointment 1.png";
import closeMenu from "../../../public/closeMenu.png";

type NavbarLayoutTypes = {
  children: ReactNode;
};

export default function NavbarLayout({ children }: NavbarLayoutTypes) {
  const [openMenu, setOpenMenu] = useState(false);

  const router = useRouter();

  const handlerRoute = (rute: string) => {
    return router.push(rute);
  };

  return (
    <Layout>
      <Navbar
        isCompact
        variant={"static"}
        height={70}
        disableBlur={true}
        css={{
          $$navbarBackgroundColor: "#535971",
          $$navbarBlurBackgroundColor: "transparent",
        }}
      >
        <Navbar.Brand>
          <Spacer x={0.5} />
          <Link href={"/"}>
            <Image width={48} height={37} src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Content>
          <Spacer x={-2.3} />
          <Navbar.Toggle
            onPress={(e) => setOpenMenu(!openMenu)}
            css={{ paddingTop: "9px" }}
          >
            {!openMenu ? (
              <Image
                color="whithe"
                width={20}
                height={20}
                src={menuicon}
                alt="icono"
              />
            ) : (
              <Image width={15} height={15} src={closeMenu} alt="icono" />
            )}
          </Navbar.Toggle>
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
            <Link href="/">
              <Text b>Home</Text>
            </Link>
          </Navbar.CollapseItem>
          <Card.Divider />
          <Navbar.CollapseItem>
            <Link href="#">
              <Text> Ayuda en línea</Text>
            </Link>
          </Navbar.CollapseItem>
          <Card.Divider />
          <Navbar.CollapseItem>
            <Link href="/login">
              <Text>Iniciar sesión</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="/register">
              <Button
                size="sm"
                css={{
                  color: "White",
                  backgroundColor: "#09BEB2",
                  borderRadius: "30px",
                }}
              >
                Registrate
              </Button>
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </Layout>
  );
}
