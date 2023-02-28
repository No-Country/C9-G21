import { Grid, Row, Spacer } from "@nextui-org/react";
import InfoCard from "./InfoCard";
import infocliente from "../../../public/infoCliente.png";
import infocomercio from "../../../public/infoComercio.png";
import PopsTurnos from "../PopsMail/popsTurnos";

function InfoHome() {
  return (
    <Grid.Container
      justify="center"
      css={{
        width: "100%",
        height: "100%",
        padding: "0.8rem",
        paddingTop: "0",
        paddingBottom: "9px",
      }}
    >
      <PopsTurnos></PopsTurnos>
      <Row justify="center" css={{ maxW: "1400px" }}>
        <Grid xs={6}>
          <InfoCard
            title={"Clientes"}
            image={infocliente}
            text1={"Como cliente podes"}
            text2={"contactarte de manera sencilla"}
            text3={"con el comercio y solicitar tu"}
            text4={"turno"}
          />
        </Grid>
        <Spacer x={0.5} />
        <Grid xs={6}>
          <InfoCard
            title={"Comercios"}
            image={infocomercio}
            text1={"Como comercio podes"}
            text2={"configurar tu perfil y organizar"}
            text3={"tus tiempos de manera fácil y"}
            text4={"rápida"}
          />
        </Grid>
      </Row>
    </Grid.Container>
  );
}

export default InfoHome;
