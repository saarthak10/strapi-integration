import React from 'react'
import Header from '../../components/header/Header'
import MainSection from '../../components/main/MainSection'
import { useGetBlogsListQuery, useGetProgramsListQuery } from '../../app/service'

const Home = () => {
  const {data, error, isLoading } = useGetProgramsListQuery()
  const {data:blogs={}, error:isError, isLoading:loading} = useGetBlogsListQuery()
  return (
    <div>
        <Header />
        <MainSection programs={data} blogs={blogs}/>
    </div>
  )
}

export default Home