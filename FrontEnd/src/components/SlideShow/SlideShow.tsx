import { useState, useEffect } from "react";
import { Card, Grid, Text, Col, Spacer } from "@nextui-org/react";

function SlideShow() {
  const [index, setIndex] = useState<number>(0);
  const [load, setLoad] = useState<boolean>(true);

  const textImge = [
    {
      1: "Organiza tu",
      2: "disponibilidad",
    },
    {
      1: "Maneja tus",
      2: "turnos fácilmente",
    },
    {
      1: "Explora comercios",
      2: "cercanos",
    },
  ];

  const images = ["SlideShow-1.jpg", "SlideShow-2.jpg", "SlideShow-3.jpg"];

  const selecNewPag = () => {
    if (index < 2) {
      setIndex(index + 1);
    } else if (index == 2) {
      setIndex(0);
    }
  };

  useEffect(() => {
    if (load === true) {
      const interval = setInterval(() => {
        selecNewPag();
      }, 5000);
      return () => {
        clearInterval(interval);
      };
    }
  });

  return (
    <Grid.Container justify="center">
      <Card
        borderWeight="extrabold"
        css={{
          mw: "1400px",
          mh: "600px",
          margin: "10px",
          width: "100%",
          height: "250px",
          borderRadius: "30px",
        }}
      >
        <Card.Body css={{ p: "0" }}>
          <Card.Image
            onChange={() => {
              setLoad(false);
            }}
            src={`${images[index]}`}
            objectFit="cover"
            width="100%"
            height="100%"
            alt="SlideShow"
            css={{ opacity: "0.85" }}
            onLoad={() => {
              setLoad(true);
            }}
          />
        </Card.Body>
        <Card.Footer
          css={{
            position: "absolute",
            zIndex: 1,
            bottom: "0",
            marginBottom: "1rem",
          }}
        >
          <Col
            css={{
              textAlign: index == 1 ? "left" : "right",
            }}
          >
            <Text
              h1
              size={24}
              weight="bold"
              css={{ color: "White", fontFamily: "Comfortaa" }}
            >
              {`${textImge[index][1]}`}
            </Text>
            <Spacer y={-1} />
            <Text
              h1
              size={24}
              weight="bold"
              css={{ color: "White", fontFamily: "Comfortaa" }}
            >
              {`${textImge[index][2]}`}
            </Text>
          </Col>
        </Card.Footer>
      </Card>
    </Grid.Container>
  );
}

export default SlideShow;
