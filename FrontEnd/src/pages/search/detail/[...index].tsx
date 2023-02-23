import SearchBar from '@/components/Search/SearchBar'
import { useGlobalContext } from '@/hooks/useGlobalContext'
import React, { useState } from 'react'

const Index = () => {
    const { comerceSelected } = useGlobalContext()

    return (
        <>tu seleccionaste el comercio {comerceSelected.title}</>
    )
}
export default Index
