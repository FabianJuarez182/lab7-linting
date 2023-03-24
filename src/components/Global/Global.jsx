import React from 'react'
import InstallTo from '../InstallTo/InstallTo'
import SearchBar from '../SearchBar/SearchBar'
import Header from '../Header/Header'
import Cards from '../Cards/Cards'

function Global() {
  return (
    <div>
      <Header />
      <SearchBar />
      <InstallTo />
      <Cards />
    </div>
  )
}

export default Global
