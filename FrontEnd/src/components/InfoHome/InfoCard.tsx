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
        boxShadow: "0px 2px 6px 0px #ACACAC",
      }}
    >
      <Spacer y={0.5} />
      <Card.Image
        objectFit="contain"
        src={`${image}`}
        width="100%"
        height={60}
        alt="logo"
      />

      <Spacer y={-0.8} />
      <Card.Body css={{ textAlign: "center" }}>
        <Text
          color="#535971"
          weight={"bold"}
          size={16}
          css={{
            fontFamily: "comfortaa",
            overflow: "hidden",
            fontWeight: "700",
            textShadow: "0.8px 0px 0px #535971",
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
        <Grid.Container
          justify="center"
          css={{ marginBottom: "2px", padding: "2px" }}
        >
          <Col>
            <Text b size="66%">
              {text1}
            </Text>{" "}
            <br />
            <Spacer y={-0.5} />
            <Text b size="66%">
              {text2}
            </Text>
            <br />
            <Spacer y={-0.5} />
            <Text b size="66%">
              {text3}
            </Text>
            <br />
            <Spacer y={-0.5} />
            <Text b size="66%">
              {text4}
            </Text>
          </Col>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
}
