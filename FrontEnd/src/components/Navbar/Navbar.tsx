import React, { ReactNode, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  Spacer,
  Card,
  Text,
  Button,
  Divider,
  Row,
} from "@nextui-org/react";
import { Layout } from "../../components/Navbar/Layout";
import menuicon from "../../../public/menu.png";
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

  let logged = true;

  return (
    <Layout>
      <Navbar
        isCompact
        variant={"static"}
        height={79}
        disableBlur={true}
        css={{
          $$navbarBackgroundColor: "#535971",
          $$navbarBlurBackgroundColor: "transparent",
        }}
      >
        <Navbar.Brand>
          <Spacer x={0.5} />
          <Link href={"/"}>
            <Image width={60} height={40} src={"logo.svg"} alt="logo" />
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
                width={25}
                height={25}
                src={menuicon}
                alt="icono"
              />
            ) : (
              <Image width={18} height={18} src={closeMenu} alt="icono" />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse
            css={{
              width: "fit-content",
              maxHeight: !logged ? "250px" : "329px",
              margin: "0",
              padding: "0",
              display: "flex",
              borderRadius: "0px 0px 5px 5px",
              left: "revert",
              overflow: "hidden",
              boxShadow: "0px 4px 6px 0px #ACACAC",
              "@lg": {
                marginRight: "171px",
              },
            }}
          >
            <Navbar.CollapseItem>
              <Link href="/" onClick={handleClick}>
                <Text
                  weight={"bold"}
                  css={{ paddingRight: "120px", paddingLeft: "5px" }}
                  b
                >
                  Home
                </Text>
              </Link>
            </Navbar.CollapseItem>

            <Card.Divider />

            <Navbar.CollapseItem css={{ display: logged ? "" : "none" }}>
              <Link href="#" onClick={handleClick}>
                <Spacer y={0.5} />
                <Text weight={"semibold"} css={{ paddingLeft: "5px" }}>
                  {" "}
                  Perfil
                </Text>
              </Link>
            </Navbar.CollapseItem>

            <Divider css={{ display: logged ? "" : "none" }} />

            <Navbar.CollapseItem css={{ display: logged ? "" : "none" }}>
              <Link href="#" onClick={handleClick}>
                <Spacer y={0.5} />
                <Text weight={"semibold"} css={{ paddingLeft: "5px" }}>
                  {" "}
                  Mis Turnos
                </Text>
              </Link>
            </Navbar.CollapseItem>

            <Divider css={{ display: logged ? "" : "none" }} />

            <Navbar.CollapseItem css={{ display: logged ? "" : "none" }}>
              <Link href="#" onClick={handleClick}>
                <Spacer y={0.5} />
                <Text weight={"semibold"} css={{ paddingLeft: "5px" }}>
                  {" "}
                  Configuración
                </Text>
              </Link>
            </Navbar.CollapseItem>

            <Divider css={{ display: logged ? "" : "none" }} />

            <Navbar.CollapseItem>
              <Link href="#" onClick={handleClick}>
                <Spacer y={0.5} />
                <Text weight={"semibold"} css={{ paddingLeft: "5px" }}>
                  {" "}
                  Ayuda en línea
                </Text>
              </Link>
            </Navbar.CollapseItem>
            <Card.Divider />

            <Navbar.CollapseItem css={{ display: logged ? "none" : "" }}>
              <Link href="/login" onClick={handleClick}>
                <Spacer y={0.5} />
                <Text weight={"semibold"} css={{ paddingLeft: "5px" }}>
                  Iniciar sesión
                </Text>
              </Link>
            </Navbar.CollapseItem>
            <Card.Divider />
            <Spacer y={0.8} />
            <Navbar.CollapseItem
              css={{ display: logged ? "none" : "", paddingLeft: "10px" }}
            >
              <Button
                size={"sm"}
                hidden={true}
                css={{
                  color: "White",
                  backgroundColor: "#09BEB2",
                  borderRadius: "30px",
                  width: "154px",
                  height: "40px",
                }}
                shadow
                onPress={() => (
                  setVisible(true), handleClick(), setOpenMenu(!openMenu)
                )}
              >
                Regístrate
              </Button>
            </Navbar.CollapseItem>
            <Spacer y={-1} />
            <Navbar.CollapseItem
              css={{ display: logged ? "" : "none", padding: "0" }}
            >
              <Spacer x={5} />
              <Link href="#" onClick={handleClick}>
                <Spacer y={0.5} />
                <Row align="center">
                  <Text weight={"semibold"}> Salir</Text>
                  <Spacer x={0.5} />
                  <Image
                    src="exit.svg"
                    alt="exit icon"
                    width={18}
                    height={18}
                  />
                </Row>
              </Link>
            </Navbar.CollapseItem>
          </Navbar.Collapse>
        </Navbar.Content>
      </Navbar>
      <RegisterModal setVisible={setVisible} visible={visible} />
      {children}
    </Layout>
  );
}
