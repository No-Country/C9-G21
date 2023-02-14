import { useState, useEffect } from "react";
import { Card, Grid } from "@nextui-org/react";

function SlideShow() {
  const [index, setIndex] = useState<number>(0);
  const [load, setLoad] = useState<boolean>(true);

  const textImge: string[] = [
    "SlideshowText-1.png",
    "SlideshowText-2.png",
    "SlideshowText-3.png",
  ];
  const images: string[] = [
    "SlideShow-1.jpg",
    "SlideShow-2.jpg",
    "SlideShow-3.jpg",
  ];

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
          height: "30%",
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
            top: "55%",
            left: index == 0 ? "10%" : index == 1 ? "-10%" : "10%",
          }}
        >
          <Card.Image src={`${textImge[index]}`} width="70%" />
        </Card.Footer>
      </Card>
    </Grid.Container>
  );
}

export default SlideShow;
