import React, { useState } from 'react'
import Header from '../../components/header/Header'
import MainSection from '../../components/main/MainSection'
import { useGetBlogsListQuery, useGetMainContentQuery, useGetProgramsListQuery } from '../../app/service'
import Footer from '../../components/footer/Footer'

const Home = () => {
  const [locale, setLocale] = useState("en")
  const {data, error, isLoading } = useGetProgramsListQuery(locale)
  const {data:blogs={}, error:isError, isLoading:loading} = useGetBlogsListQuery(locale)
  const {data: mainContent} = useGetMainContentQuery(locale)

  const handleLanguageChangeClick = () =>{
    setLocale((prev) => (prev === "en" ? "fr" : "en"));

  }
  return (
    <div>
        <Header mainContent={mainContent?.data || ""} handleLanguageClick={handleLanguageChangeClick} />
        <MainSection programs={data} blogs={blogs}/>
        <Footer />
    </div>
  )
}

export default Home