import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Modal from "../Modal/Modal"
import {
  Button,
  Navbar,
  Spacer,
  Card,
  Text,
  PressEvent,
} from "@nextui-org/react";
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
  const handlerBtn = (e: PressEvent) => {
    setOpenMenu(!openMenu);
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
            <Modal></Modal>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </Layout>
  );
}
