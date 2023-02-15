import { Grid, Card, Text, Row, Spacer } from "@nextui-org/react";
import InfoCard from "./InfoCard";

function InfoHome() {
  return (
    <Grid.Container
      justify="center"
      css={{
        width: "100%",
        height: "100%",
        padding: "0.6rem",
      }}
    >
      <Row justify="center" css={{ maxW: "1400px" }}>
        <Grid xs={6}>
          <InfoCard
            title={"Clientes"}
            image={"infoCliente.png"}
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
            image={"infoComercio.png"}
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
