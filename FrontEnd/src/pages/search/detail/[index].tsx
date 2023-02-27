import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import SearchBar from '@/components/Search/SearchBar'
import { useGlobalContext } from '@/hooks/useGlobalContext'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { endpoints } from '@/const/endpoints'
import { Detail } from '@/types/comerce'
import { Card, Container, Row, Text } from '@nextui-org/react'
import Rectangle from '@/components/svg/rectangle'
import { useLocation } from '@/hooks/useLocation'

const Index = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { comerceSelected } = useGlobalContext();

  const { lat, lng, status } = useLocation();
  let availability 
  if (typeof data !== "string") {
    data.availability.filter((day)=>{
      console.log(day)
      return day
    })
  }
  return (
    typeof data === "string"
      ? <></>
      : <Container>
        <Card >
          <Card.Body>
            <Row justify='space-between'>
              <Text size={20}>{data.registeredName}</Text>
              <Text size={10}>0.7 km</Text>
            </Row>
            <Rectangle width={300} height={300}></Rectangle>
            <Text>
              {data.descripcion}
            </Text>
            <Row>
              <Text weight={"bold"} css={{paddingRight: 5}}>Dirección: </Text>
              <Text>
              {data.city + " " + data.address} 
              </Text>
            </Row>
            <Row>
              <Text weight={"bold"} css={{paddingRight: 5}}>Horario de atención: </Text>
              <Text>
             
              
              </Text>
            </Row>
          </Card.Body>
        </Card>

      </Container>
  )

}


export const getServerSideProps: GetServerSideProps<{ data: Detail | string }> = async (context) => {
  if (context.query.index === "logo.svg") {
    return {
      props: {
        data: "se renderiza en el servidor"
      },
    }
  }
  const res = await axios.get(`${endpoints.base}/api${endpoints.detail}/${context.query.index}`);
  const data: Detail = res.data

  return {
    props: {
      data,
      query: context.query.index
    },
  }
}
export default Index
