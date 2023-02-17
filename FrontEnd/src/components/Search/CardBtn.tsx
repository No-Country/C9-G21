import { Button, Text, Image } from "@nextui-org/react";

type Btntype = {
  name?: string;
  img?: string;
};

export default function CardBtn({ name, img }: Btntype) {
  return (
    <Button
      icon={
        <Image
          src={img ?? ""}
          alt="icon"
          width={35}
          height={35}
          css={{ paddingRight: "5px", margin: "6px", paddingBottom: "10px" }}
        />
      }
      size={"xs"}
      css={{
        alignItems: "center",
        backgroundColor: "#3E8C85",
        width: "147px",
        height: "40px",
        margin: "10px",
        padding: "0px",
        borderRadius: "19px",
        boxShadow: "2px 4px 6px 0px #ACACAC",
      }}
    >
      <Text
        size={16}
        b
        css={{
          color: "#F8F8F8",
          fontFamily: "Comfortaa",
          marginLeft: "30px",
          padding: "0px",
        }}
      >
        {name}
      </Text>
    </Button>
  );
}
