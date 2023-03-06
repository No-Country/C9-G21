import { CSSBUTTONBACK, CSSBUTTONNEXT, INPUTPROPS } from "@/const/constantsUI";
import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { globalContext } from "@/context/global.context";
import {
  Container,
  Card,
  Text,
  Input,
  Button,
  Row,
  Col,
  Textarea,
  Dropdown,
  Switch,
  Spacer,
  Collapse,
} from "@nextui-org/react";
import axios from "axios";
import { Twinkle_Star } from "@next/font/google";
import { endpoints } from "@/const/endpoints";

export interface MyFormProps {
  initialValues: InitialValueEditComerce
}
export type InitialValueEditComerce = {
  name: string;
  address: string;
  city: string;
  registeredName: string;
  rubro: string;
  descripcion: string;
  descripcion2: string;
  availability: [
    {
      monday: {
        isActive: true;
        horaInicio: "10:00";
        horaFinal: "20:00";
      };
    },
    {
      tuesday: {
        isActive: false;
        horaInicio: "10:00";
        horaFinal: "20:00";
      };
    },
    {
      wednesday: {
        isActive: false;
        horaInicio: "10:00";
        horaFinal: "20:00";
      };
    },
    {
      thursday: {
        isActive: false;
        horaInicio: "10:00";
        horaFinal: "20:00";
      };
    },
    {
      friday: {
        isActive: false;
        horaInicio: "10:00";
        horaFinal: "20:00";
      };
    },
    {
      saturday: {
        isActive: false;
        horaInicio: "10:00";
        horaFinal: "20:00";
      };
    },
    {
      sunday: {
        isActive: false;
        horaInicio: "10:00";
        horaFinal: "20:00";
      };
    }
  ];
  type: "negocio" | "admin" | "client"
  shiftDuration: "1:00";
};

const EditComerceCard: React.FC<MyFormProps> = ({ initialValues }: MyFormProps) => {
  const [step, setstep] = useState(1);
  const [selected, setSelected] = useState<any>(new Set(["Rubro"]));
  const [selectedTime, setSelectedTime] = useState<any>(new Set(["1 hora"]));
  const [values, setValues] = useState(initialValues);
  const { user } = useContext(globalContext);
  const router = useRouter();

  // path step 1 and 2
  const path = `${endpoints.base}/api/negocio/actualizarNegocio${step}/${user.data._id}`;
  useEffect(() => {
    if (!user.token) {
      router.push("/");
    } else {
    }
  }, [router, user.token]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  // step 1 and 2
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.put(`${path}`, { ...values, type: user.user });
      setstep(step + 1);
      setValues(initialValues);
      console.log("Form submitted:", response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(values)
  const handleRubro = (e: any) => {
    setSelected(e.currentKey);
    setValues({
      ...values,
      ["rubro"]: e.currentKey.toLowerCase(),
      type: user.user
    });
  };
  const handletime = (e: any) => {
    setSelectedTime(e.currentKey);
    setValues({
      ...values,
      ["shiftDuration"]: e.currentKey.toLowerCase(),
      type: user.user
    });
  };

  return (
    <Container css={{ width: "100%", height: "100vh", marginTop: "3rem" }}>
      {step === 1 ? (
        <form onSubmit={handleSubmit}>
          <Card aria-labelledby="Card-title">
            <Card.Header css={{ justifyContent: "center" }}>
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
                required={true}
                placeholder={user.data?.name ? user.data?.name : "Las flores"}
                label="Nombre del comercio"
                aria-label="Nombre del comercio"
                value={values?.name}
                id="name"
                name="name"
                onChange={handleChange}
              />
              <Input
                {...INPUTPROPS}
                required={true}
                placeholder={
                  user.data?.registeredName
                    ? user.data?.registeredName
                    : "Peluquería Las Flores S. L."
                }
                label="Razón Social"
                aria-label="Razón Social"
                value={values?.registeredName}
                name="registeredName"
                onChange={handleChange}
              />
              <Input
                {...INPUTPROPS}
                required={true}
                placeholder={
                  user.data?.address ? user.data?.address : "Mar del Plata"
                }
                label="Dirección"
                aria-label="Nombre del comercio"
                value={values?.address}
                name="address"
                onChange={handleChange}
              />
              <Input
                {...INPUTPROPS}
                required={true}
                placeholder={
                  user.data?.city ? user.data?.city : "Mar del Plata"
                }
                label="Ciudad"
                aria-label="Nombre del comercio"
                value={values?.city}
                name="city"
                onChange={handleChange}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify="center" css={{ paddingtop: "20px" }}>
                <Button auto type="submit" rounded css={CSSBUTTONNEXT}>
                  Continuar
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </form>
      ) : step === 2 ? (
        <form onSubmit={handleSubmit}>
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
                  onSelectionChange={handleRubro}
                >
                  <Dropdown.Item key="Mecanico">Mecanico</Dropdown.Item>
                  <Dropdown.Item key="Peluqueria">Peluqueria</Dropdown.Item>
                  <Dropdown.Item key="Veterinaria">Veterinaria</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Textarea
                {...INPUTPROPS}
                required={true}
                minRows={2}
                maxRows={2}
                placeholder={
                  user.data?.descripcion
                    ? user.data?.descripcion
                    : "¿Algo que quieras contar sobre tu comercio?"
                }
                label="Descripción"
                aria-label="Descripción"
                css={{ boxSizing: "border-box" }}
                value={values?.descripcion}
                name="descripcion"
                onChange={handleChange}
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
                required={true}
                placeholder={
                  user.data?.descripcion2
                    ? user.data?.descripcion2
                    : "Lunes a viernes de 09:00 a 18:00"
                }
                label="Horarios de atención"
                aria-label="Horarios de atención"
                css={{ boxSizing: "border-box" }}
                value={values?.descripcion2}
                name="descripcion2"
                onChange={handleChange}
              />
            </Card.Body>
            <Card.Footer>
              <Row justify="center" css={{ paddingtop: "20px" }}>
                <Button
                  auto
                  flat
                  rounded
                  onPress={() => (setstep(1), setValues(initialValues))}
                  css={CSSBUTTONBACK}
                >
                  Volver
                </Button>
                <Button auto rounded css={CSSBUTTONNEXT} type="submit">
                  Continuar
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </form>
      ) : (
        step === 3 && (
          <form>
            <Card aria-labelledby="Card-title">
              <Card.Header css={{ justifyContent: "center" }}>
                <Text b size={18}>
                  Añadí tus turnos disponibles
                </Text>
              </Card.Header>
              <Card.Body>
                <Col
                  css={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Text css={{ textAlign: "left" }}>
                    Los turnos se confuguran cada:
                  </Text>
                  <Dropdown>
                    <Dropdown.Button flat css={CSSBUTTONNEXT}>
                      {selectedTime}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      aria-label="Single selection actions"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selected}
                      onSelectionChange={handletime}
                    >
                      <Dropdown.Item key="00:30">30 minutos</Dropdown.Item>
                      <Dropdown.Item key="1:00">1 hora</Dropdown.Item>
                      <Dropdown.Item key="1:30">1h 30m</Dropdown.Item>
                      <Dropdown.Item key="2:00">2 horas</Dropdown.Item>
                      <Dropdown.Item key="2:30">2h 30min</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>
                  <Text>Días y horarios</Text>

                  <Card
                    css={{
                      boxShadow: "2px 2px 6px #ACACAC",
                      borderRadius: "20px",
                      padding: "10px",
                    }}
                  >
                    <Row>
                      <Spacer x={1} />
                      <Text size={14} css={{ padding: "20x" }}>
                        Lunes
                      </Text>
                      <Spacer x={8.5} />
                      <Switch size="xs" />
                    </Row>
                    <Spacer y={0.5} />

                    <Row justify="center">
                      <Spacer x={-0.3} />
                      <Text size={12}>Desde</Text>
                      <Spacer x={0.3} />
                      <Input
                        size="xs"
                        type={"time"}
                        required={true}
                        placeholder="00:00"
                        aria-label="horaInicio"
                        value={values?.address}
                        name="horaFinal"
                        onChange={handleChange}
                      />
                      <Spacer x={0.3} />
                      <Text size={12}>Hasta</Text>
                      <Spacer x={0.3} />
                      <Input
                        size="xs"
                        type={"time"}
                        required={true}
                        placeholder="00:00"
                        aria-label="horaFinal"
                        name="horaFinal"
                      />
                    </Row>
                  </Card>
                </Col>
              </Card.Body>
              <Card.Footer>
                <Row justify="center" css={{ paddingtop: "20px" }}>
                  <Button
                    auto
                    flat
                    rounded
                    onPress={() => (setstep(2), setValues(initialValues))}
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
          </form>
        )
      )}
    </Container>
  );
};

export default EditComerceCard;
