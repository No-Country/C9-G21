import { Grid, Text, Spacer, Row } from "@nextui-org/react";
import SearchBar from "./SearchBar";
import CardBtn from "./CardBtn";

const bussines = [
  {
    name: "Mecánico",
    icon: "car.svg",
  },
  {
    name: "Peluquería",
    icon: "scissor.svg",
  },
  {
    name: "Veterinaria",
    icon: "pet.svg",
  },
];

const limitedData = bussines.slice(0, 3);

const renderedData = limitedData.map((e, i) => {
  return (
    <Grid key={i}>
      <CardBtn name={e?.name} img={e?.icon} />
      <Spacer y={-0.3} />
    </Grid>
  );
});

export default function Search() {
  return (
    <Grid.Container
      justify="center"
      css={{
        width: "100%",
        height: "100%",
      }}
    >
      <Spacer y={0.5} />
      <Row justify="center" css={{ maxW: "1400px" }}>
        <Grid xs={12}>
          <Spacer x={0.5} />
          <Text
            h1
            size={20}
            weight="bold"
            css={{
              fontFamily: "Comfortaa",
              color: "#1E1E1E",
              lineHeight: "20px",
              textShadow: "0.1px 0px 0px #1E1E1E",
            }}
          >
            Solicita tu turno
          </Text>
        </Grid>
      </Row>
      <Spacer y={0.2} />
      <SearchBar />
      <Spacer y={0.2} />

      <Row
        justify="center"
        gap={2}
        wrap="wrap"
        css={{
          w: "100%",
          i: "50px",
        }}
      >
        {renderedData}
        <CardBtn name="Ver más..." img={"more.svg"} />
      </Row>
    </Grid.Container>
  );
}
