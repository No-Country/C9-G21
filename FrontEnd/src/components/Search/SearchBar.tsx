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
            <Image src="Search.png" alt="Search icon" width={35} height={35} />
          }
          css={{
            w: "17rem",
            height: "32px",
            boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.25)",
            borderRadius: "9px",
          }}
        ></Input>
      </Grid>
    </Grid.Container>
  );
}
