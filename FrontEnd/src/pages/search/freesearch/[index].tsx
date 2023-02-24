import SearchBar from '@/components/Search/SearchBar'
import Rectangle from '@/components/svg/rectangle';
import { endpoints } from '@/const/endpoints';
import { useGlobalContext } from '@/hooks/useGlobalContext';
import { Card, Grid, PressEvent, Row, Spacer, Text } from '@nextui-org/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export interface comercioT {
  _id: string;
  password: string;
  email: string;
  phone: string;
  token: null;
  confirmacion: boolean;
  __v: number;
  address: string;
  city: string;
  name: string;
  registeredName: string;
  descripcion: string;
  descripcion2: string;
  rubro: string;
}



const Index = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();
  const { setComerceSelected } = useGlobalContext()
  const handleCardClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, comercio: comercioT) => {
    setComerceSelected(comercio)
    router.push("/search/detail/" + comercio._id)
  }
  const [comercios, setComercios] = useState<comercioT[]>()
  useEffect(() => {
    const fetchData = async () => {
      // const axiosResult =await axios.get(`${endpoints.base}/api${endpoints.searchByCategory}?rubro=mecanica`)
      const axiosResult = await axios.get(`${endpoints.base}/api${endpoints.searchByCategory}?rubro=${router.query.index}`)

      setComercios(axiosResult.data)
    }
    if (router.query.index) {
      fetchData();
    }
  }, [router.query])
  
  return (
    <>
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
      <Grid.Container justify='center' css={{ padding: 10, rowGap: 10 }}>
        {comercios && comercios.map((comercio) =>
          <div key={comercio._id} onClick={(ev) => handleCardClick(ev, comercio)}>
            <Card css={{ padding: 10, width: "100%"}} >
              <Row css={{ flexDirection: "column", padding: 10 }}  >
                <Text size={25} >
                  {comercio.registeredName}
                </Text>
                <Text size={10} >
                  {/* {comercio.distancia} */}
                </Text>
              </Row>
              <Row justify='space-between' css={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 5 }}>
                <Text css={{ paddingRight: 5, width: "50%" }}>
                  {comercio.descripcion}
                </Text>
                <Rectangle />
              </Row>
            </Card>
          </div>
        )}
        {comercios && comercios.length === 0 && <Text>No hay Comercios para esta busqueda, porfavor intenta algo distinto</Text>}
      </Grid.Container>
    </>
  )
}
export default Index
