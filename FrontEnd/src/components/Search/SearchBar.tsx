import { Text, Input, Grid, Image } from "@nextui-org/react";

export default function SearchBar() {
  return (
    <Grid.Container justify="center">
      <Grid>
        <Input
          type="text"
          shadow
          clearable
          placeholder="Buscar..."
          contentLeft={
            <Image src="Search.png" alt="Search icon" width={30} height={30} />
          }
          css={{ w: "300px" }}
        ></Input>
      </Grid>
    </Grid.Container>
  );
}
