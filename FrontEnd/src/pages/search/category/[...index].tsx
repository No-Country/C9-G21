import SearchBar from '@/components/Search/SearchBar'
import React, { useState } from 'react'

const Index = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
  )
}
export default  Index
