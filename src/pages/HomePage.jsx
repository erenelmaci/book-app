import React from "react"
import CardContainer from "../components/CardContainer"
import Header from "../components/Header"
import NewBookAdd from "../components/NewBookAdd"

const HomePage = () => {
  return (
    <>
      <NewBookAdd />
      <Header />
      <CardContainer />
    </>
  )
}

export default HomePage
