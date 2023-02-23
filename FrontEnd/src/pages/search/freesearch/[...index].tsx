import SearchBar from '@/components/Search/SearchBar'
import Rectangle from '@/components/svg/rectangle';
import { useGlobalContext } from '@/hooks/useGlobalContext';
import { Card, Grid, PressEvent, Row, Spacer, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const comercios: comercioT[] = [
  {
    id: "1",
    title: "Peluquería Flores",
    img: "imagen de prueba",
    description: "Acá iría resumida en 2 o 3 renglones la descripción del comercio",
    distancia: "0.7 km"
  },
  {
    id: "2",
    title: "Mecanico Mi papa",
    img: "imagen de prueba",
    description: "Acá iría resumida en 2 o 3 renglones la descripción del comercio",
    distancia: "0.9 km"
  }
]
export type comercioT = {
  id: string
  title: string
  img: string
  description: string
  distancia: string
}

const Index = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();
  const { setComerceSelected } = useGlobalContext()
  const handleCardClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, comercio: comercioT) => {
    setComerceSelected(comercio)
    router.push("/search/detail/" + comercio.id)
  }
  return (
    <>
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
      <Grid.Container justify='center' css={{ padding: 10, rowGap: 10 }}>
        {comercios.map((comercio) =>
          <div key={comercio.id} onClick={(ev) => handleCardClick(ev, comercio)}>
            <Card css={{ padding: 10 }} >
              <Row css={{ flexDirection: "column", padding: 10 }}  >
                <Text size={25} >
                  {comercio.title}
                </Text>
                <Text size={10} >
                  {comercio.distancia}
                </Text>
              </Row>
              <Row justify='space-between' css={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 5 }}>
                <Text css={{ paddingRight: 5, width: "50%" }}>
                  {comercio.description}
                </Text>
                <Rectangle />
              </Row>
            </Card>
          </div>

        )}

      </Grid.Container>
    </>
  )
}
export default Index
