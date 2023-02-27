import { CSSBUTTONBACK, CSSBUTTONNEXT, INPUTPROPS } from "@/const/constantsUI";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Card,
  Text,
  Input,
  Button,
  Row,
  Col,
  Spacer,
  Textarea,
  Dropdown,
} from "@nextui-org/react";

import { string } from "zod";

interface MyFormProps {
  initialValues: {
    name: "string";
  };
}

export default function EditComerceCard() {
  const [step, setstep] = useState(1);
  const [selected, setSelected] = useState<any>(new Set(["Rubro"]));
  const [data, setdata] = useState({
    nombreDelComercio: string,
    razonSocial: string,
    direccion: string,
    ciudad: string,
    rubro: string,
    descripcion: string,
    fotos: string,
    horariosDeAtencion: string,
  });

  const router = useRouter();

  const handleRubro = (e: any) => {
    setSelected(e.target.value);
  };

  const hadlerchange = (e: any) => {};

  return (
    <Container css={{ width: "100%", height: "100vh" }}>
      {step === 1 ? (
        <Card aria-labelledby="Card-title">
          <Card.Header>
            <Text b size={18}>
              Configura tu perfil
            </Text>
          </Card.Header>
          <Card.Body>
            <Col
              css={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            ></Col>
            <Input
              {...INPUTPROPS}
              placeholder="Las flores"
              label="Nombre del comercio"
              aria-label="Nombre del comercio"
            />
            <Input
              {...INPUTPROPS}
              placeholder="Peluquería Las Flores S. L."
              label="Razón Social"
              aria-label="Nombre del comercio"
            />
            <Input
              {...INPUTPROPS}
              placeholder="Mar del Plata"
              label="Dirección"
              aria-label="Nombre del comercio"
            />
            <Input
              {...INPUTPROPS}
              placeholder="Mar del Plata"
              label="Ciudad"
              aria-label="Nombre del comercio"
            />
          </Card.Body>
          <Card.Footer>
            <Row justify="center" css={{ paddingtop: "20px" }}>
              <Button
                auto
                rounded
                css={CSSBUTTONNEXT}
                onPress={() => setstep(2)}
              >
                Continuar
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      ) : step === 2 ? (
        <Card aria-labelledby="Card-title">
          <Card.Header>
            <Text b size={18}>
              Configura tu perfil
            </Text>
          </Card.Header>
          <Card.Body>
            <Col
              css={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            ></Col>
            <Dropdown>
              <Dropdown.Button flat css={CSSBUTTONNEXT}>
                {selected}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
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
            <Textarea
              {...INPUTPROPS}
              minRows={2}
              maxRows={2}
              placeholder="¿Algo que quieras contar sobre tu comercio?"
              label="Descripción"
              aria-label="Descripción"
              css={{ boxSizing: "border-box" }}
            />
            <Textarea
              {...INPUTPROPS}
              minRows={2}
              maxRows={2}
              placeholder="Podes subir las fotos de tu comercio aquí. (Máximo 12)"
              label="Fotos"
              aria-label="Fotos"
              css={{ boxSizing: "border-box" }}
            />
            <Textarea
              {...INPUTPROPS}
              minRows={1}
              maxRows={1}
              placeholder="Lunes a viernes de 09:00 a 18:00"
              label="Horarios de atención"
              aria-label="Horarios de atención"
              css={{ boxSizing: "border-box" }}
            />
          </Card.Body>
          <Card.Footer>
            <Row justify="center" css={{ paddingtop: "20px" }}>
              <Button
                auto
                flat
                rounded
                onPress={() => setstep(1)}
                css={CSSBUTTONBACK}
              >
                Volver
              </Button>
              <Button
                auto
                rounded
                css={CSSBUTTONNEXT}
                onPress={() => setstep(3)}
              >
                Continuar
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      ) : (
        step === 3 && (
          <Card aria-labelledby="Card-title">
            <Card.Header>
              <Text b size={18}>
                Configura tu perfil
              </Text>
            </Card.Header>
            <Card.Body>
              <Col
                css={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              ></Col>
              <Input
                {...INPUTPROPS}
                placeholder="Las flores"
                label="Nombre del comercio"
                aria-label="Nombre del comercio"
              />
              <Input
                {...INPUTPROPS}
                placeholder="Peluquería Las Flores S. L."
                label="Razón Social"
                aria-label="Nombre del comercio"
              />
              <Input
                {...INPUTPROPS}
                placeholder="Mar del Plata"
                label="Dirección"
                aria-label="Nombre del comercio"
              />
              <Input
                {...INPUTPROPS}
                placeholder="Mar del Plata"
                label="Ciudad"
                aria-label="Nombre del comercio"
              />
            </Card.Body>
            <Card.Footer>
              <Row justify="center" css={{ paddingtop: "20px" }}>
                <Button
                  auto
                  flat
                  rounded
                  onPress={() => setstep(2)}
                  css={CSSBUTTONBACK}
                >
                  Volver
                </Button>
                <Button
                  auto
                  rounded
                  css={CSSBUTTONNEXT}
                  onPress={() => router.push("/")}
                >
                  Guardar
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        )
      )}
    </Container>
  );
}