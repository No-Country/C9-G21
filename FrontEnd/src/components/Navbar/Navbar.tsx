import React, {
  ReactNode,
  useState,
  useRef,
  useContext,
  useEffect,
} from "react";

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
  User,
} from "@nextui-org/react";
import { Layout } from "../../components/Navbar/Layout";
import menuicon from "../../../public/menu.png";
import closeMenu from "../../../public/closeMenu.png";
import { RegisterModal } from "../Modal/RegisterModal";
import { CSSBUTTONNEXT } from "@/const/constantsUI";
import { globalContext } from "@/context/global.context";

type NavbarLayoutTypes = {
  children: ReactNode;
};

export default function NavbarLayout({ children }: NavbarLayoutTypes) {
  const [openMenu, setOpenMenu] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => isOpen && ref.current?.click();
  const { user } = useContext(globalContext);
  const [userLogged, setUserLogged] = useState<string>(user?.data?.name);
  let logged = user.token ? true : false;

  useEffect(() => {
    setUserLogged(user?.data?.name);
  }, [user]);

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
              maxHeight: !logged
                ? "250px"
                : user.user === "negocio"
                ? "370px"
                : "315px",
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
            <Navbar.CollapseItem css={{ display: logged ? "" : "none" }}>
              <Spacer y={0.5} x={0.25} />
              <Row wrap="nowrap">
                <Text
                  weight={"semibold"}
                  css={{ width: "180px", overflowWrap: "anywhere" }}
                >
                  Hola,{" "}
                  {user?.data?.name
                    ? userLogged?.slice(0, 18)
                    : "configura tu negocio "}
                </Text>
              </Row>
            </Navbar.CollapseItem>
            <Divider css={{ display: logged ? "" : "none" }} />
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

            <Navbar.CollapseItem
              css={{ display: logged && user.user === "negocio" ? "" : "none" }}
            >
              <Link href="/EditComerce" onClick={handleClick}>
                <Spacer y={0.5} />
                <Text weight={"semibold"} css={{ paddingLeft: "5px" }}>
                  {" "}
                  Configuraci??n
                </Text>
              </Link>
            </Navbar.CollapseItem>

            <Divider css={{ display: logged ? "" : "none" }} />

            <Navbar.CollapseItem>
              <Link href="/error404" onClick={handleClick}>
                <Spacer y={0.5} />
                <Text weight={"semibold"} css={{ paddingLeft: "5px" }}>
                  {" "}
                  Ayuda en l??nea
                </Text>
              </Link>
            </Navbar.CollapseItem>
            <Card.Divider />

            <Navbar.CollapseItem css={{ display: logged ? "none" : "" }}>
              <Link href="/login" onClick={handleClick}>
                <Spacer y={0.5} />
                <Text weight={"semibold"} css={{ paddingLeft: "5px" }}>
                  Iniciar sesi??n
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
                css={CSSBUTTONNEXT}
                shadow
                onPress={() => (
                  setVisible(true), handleClick(), setOpenMenu(!openMenu)
                )}
              >
                Reg??strate
              </Button>
            </Navbar.CollapseItem>
            <Spacer y={-1} />
            <Navbar.CollapseItem
              css={{ display: logged ? "" : "none", padding: "0" }}
            >
              <Spacer x={5} />
              <Link href="#" onClick={() => (user.token = "")}>
                <Spacer y={0.5} />
                <Row align="center">
                  <Text weight={"semibold"} css={{ color: "#078E85" }}>
                    {" "}
                    Salir
                  </Text>
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
