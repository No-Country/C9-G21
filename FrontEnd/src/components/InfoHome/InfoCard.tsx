import { Card, Text, Col, Spacer, Grid } from "@nextui-org/react";

type cardTypes = {
  title: String;
  image: String;
  text1: String;
  text2: String;
  text3: String;
  text4: String;
};

export default function InfoCard({
  title,
  image,
  text1,
  text2,
  text3,
  text4,
}: cardTypes) {
  return (
    <Card
      css={{
        width: "100%",
        margin: "1px",
        borderRadius: "20px",
        backgroundColor: "#F8F8F8",
        padding: "2px",
        height: "170px",
      }}
    >
      <Spacer y={1} />
      <Card.Image
        objectFit="contain"
        src={`${image}`}
        width="100%"
        height={50}
        alt="logo"
      />

      <Spacer y={-0.7} />
      <Card.Body css={{ textAlign: "center" }}>
        <Text
          color="#535971"
          weight={"bold"}
          size={16}
          css={{
            fontFamily: "comfortaa",
            overflow: "hidden",
          }}
        >
          {title}
        </Text>
      </Card.Body>
      <Card.Footer
        css={{
          padding: "0",
          position: "absolute",
          textAlign: "center",
          bottom: "3px",
        }}
      >
        <Grid.Container justify="center">
          <Col>
            <Spacer y={-0.5} />
            <Text b size="70%">
              {text1}
            </Text>{" "}
            <br />
            <Spacer y={-0.5} />
            <Text b size="70%">
              {text2}
            </Text>
            <br />
            <Spacer y={-0.5} />
            <Text b size="70%">
              {text3}
            </Text>
            <br />
            <Spacer y={-0.5} />
            <Text b size="70%">
              {text4}
            </Text>
          </Col>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
}
