import { Grid, Text, Row } from "@nextui-org/react";
import SearchBar from "./SearchBar";

export default function Search() {
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
        <Grid xs={12}>
          <Text
            h1
            size={20}
            weight="bold"
            css={{ fontFamily: "Comfortaa", color: "#1E1E1E" }}
          >
            Solicita tu turno
          </Text>
        </Grid>
      </Row>
      <SearchBar />
    </Grid.Container>
  );
}
