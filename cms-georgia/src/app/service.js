// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const strapiApi = createApi({
  reducerPath: 'strapiApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api/' }),
  endpoints: (builder) => ({
    getProgramsList: builder.query({
      query: (locale) => `programs-plural?populate=*&locale=${locale}`,
    }),
    getBlogsList: builder.query({
      query: (locale) => `blogs-list?populate=*&locale=${locale}`,
    }),
    getMainContent: builder.query({
      query: (locale) => `main-contents?populate=*&locale=${locale}`
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProgramsListQuery, useGetBlogsListQuery, useGetMainContentQuery } = strapiApi