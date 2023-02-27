import { Button, PressEvent, Text } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

type Btntype = {
  name?: string;
  img?: string;
  mockName?: string
  setSearchValue?: Dispatch<SetStateAction<string>>;
};

export default function CardBtn({ name, img, mockName,setSearchValue }: Btntype) {
  const router = useRouter()
  const handleOnPress = (e: PressEvent) => {
    if (mockName) {
      router.push("/search/freesearch/" + mockName)
    }
  }
  return (
    <Button
      icon={
        <Image
          src={img ?? ""}
          alt="icon"
          width={25}
          height={25}
          style={{ paddingLeft: "3px" }}
        />
      }
      size={"xs"}
      css={{
        alignItems: "center",
        backgroundColor: "#3E8C85",
        width: "147px",
        height: "40px",
        margin: "10px",
        borderRadius: "19px",
        boxShadow: "2px 4px 6px 0px #ACACAC",
      }}
      onPress={handleOnPress}
    >
      <Text
        size={16}
        b
        css={{
          color: "#F8F8F8",
          fontFamily: "Comfortaa",
          marginLeft: "15px",
          padding: "0px",
        }}
      >
        {name}
      </Text>
    </Button>
  );
}
