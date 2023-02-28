import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import SearchBar from '@/components/Search/SearchBar'
import { useGlobalContext } from '@/hooks/useGlobalContext'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { endpoints } from '@/const/endpoints'
import { Detail } from '@/types/comerce'

import { useLocation } from '@/hooks/useLocation'
import { AssingTurn } from '@/components/comerceDetail/AssingTurn'
import { useRouter } from 'next/router'

const Index = () => {
  const [detail, setDetail] = useState<Detail | undefined>()
  const { comerceSelected } = useGlobalContext();

  const { lat, lng, status } = useLocation();
  const router = useRouter()

  useEffect(() => {
    const fetchFn = async () => {

      const res = await axios.get(`${endpoints.base}/api${endpoints.detail}/${router.query.index}`);
      const data: Detail = res.data
      setDetail(data)

    }
    if (router.query.index) {
      fetchFn()
    }

  }, [router.query.index])


  return (detail ? <AssingTurn data={detail} /> : <></>

  )

}


export default Index
