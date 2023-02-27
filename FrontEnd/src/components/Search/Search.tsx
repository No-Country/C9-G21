import { Grid, Text, Spacer, Row } from "@nextui-org/react";
import SearchBar from "./SearchBar";
import CardBtn from "./CardBtn";
import { useState } from "react";

const bussines = [
  {
    name: "Mecánico",
    icon: "car.svg",
    mockName: "mecanico"
  },
  {
    name: "Peluquería",
    mockName: "Peluquería",
    icon: "scissor.svg",
  },
  {
    name: "Veterinaria",
    mockName: "Veterinaria",
    icon: "pet.svg",
  },
];

const limitedData = bussines.slice(0, 3);


export default function Search() {
  const [searchValue, setSearchValue] = useState<string>("");
  
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
              paddingLeft: "5px",
            }}
          >
            Solicita tu turno
          </Text>
        </Grid>
      </Row>
      <Spacer y={0.2} />
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
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
        {limitedData.map((e, i) => {
          return (
            <Grid key={i}>
              <CardBtn name={e?.name} img={e?.icon} mockName={e.mockName} setSearchValue={setSearchValue}/>
              <Spacer y={-0.3} />
            </Grid>
          );
        })}
        <CardBtn name="Ver más..." img={"more.svg"} />
      </Row>
    </Grid.Container>
  );
}
