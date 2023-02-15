import React, { ReactNode, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Spacer, Card, Text, Button } from "@nextui-org/react";
import { Layout } from "../../components/Navbar/Layout";
import menuicon from "../../../public/menu.png";
import logo from "../../../public/logoappointment 1.png";
import closeMenu from "../../../public/closeMenu.png";
import { RegisterModal } from "../Modal/RegisterModal";

type NavbarLayoutTypes = {
  children: ReactNode;
};

export default function NavbarLayout({ children }: NavbarLayoutTypes) {
  const [openMenu, setOpenMenu] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => isOpen && ref.current?.click();

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
            showIn="lg"
            ref={ref}
            onChange={() => (setOpenMenu(!openMenu), setIsOpen(!isOpen))}
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
            <Link href="/" onClick={handleClick}>
              <Text b>Home</Text>
            </Link>
          </Navbar.CollapseItem>
          <Card.Divider />
          <Navbar.CollapseItem>
            <Link href="#" onClick={handleClick}>
              <Text> Ayuda en línea</Text>
            </Link>
          </Navbar.CollapseItem>
          <Card.Divider />
          <Navbar.CollapseItem>
            <Link href="/login" onClick={handleClick}>
              <Text>Iniciar sesión</Text>
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Button
              css={{
                color: "White",
                backgroundColor: "#09BEB2",
                borderRadius: "30px",
              }}
              shadow
              onPress={() => (
                setVisible(true), handleClick(), setOpenMenu(!openMenu)
              )}
            >
              Regístrate
            </Button>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
      <RegisterModal setVisible={setVisible} visible={visible} />
      {children}
    </Layout>
  );
}
