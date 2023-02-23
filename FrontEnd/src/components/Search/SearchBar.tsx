import { Text, Input, Grid, Image, FormElement } from "@nextui-org/react";
import { useRouter } from "next/router";
import { ChangeEvent, Dispatch, SetStateAction, useState, KeyboardEventHandler } from "react";
type SearchBarT = {
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchValue: string
}

export default function SearchBar({ searchValue, setSearchValue }: SearchBarT) {

  const router = useRouter()
  const handleOnChange = (e: ChangeEvent<FormElement>) => {
    setSearchValue(e.target.value);
  }
  const handleEnter: KeyboardEventHandler<FormElement> = (e) => {
    if (e.key === "Enter") {
      router.push("/search/freesearch/" + searchValue)
    }
  }

  return (
    <Grid.Container justify="center">
      <Grid>
        <Input
          type="text"
          shadow
          clearable
          placeholder="Buscar..."
          aria-label="Buscar"
          contentLeft={
            <Image src="Search.png" alt="Search icon" width={35} height={35} />
          }
          css={{
            w: "17rem",
            height: "32px",
            boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.25)",
            borderRadius: "9px",
          }}
          onChange={handleOnChange}
          value={searchValue}
          onKeyDown={handleEnter}
        ></Input>
      </Grid>
    </Grid.Container>
  );
}
