import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/header/Header'
import MainSection from '../../components/main/MainSection'
import { useGetBlogsListQuery, useGetMainContentQuery, useGetProgramsListQuery } from '../../app/service'
import Footer from '../../components/footer/Footer'
import { io } from "socket.io-client";


const Home = () => {
  const socketRef = useRef(null);
  const [locale, setLocale] = useState("en")
  const {data, error, isLoading, refetch } = useGetProgramsListQuery(locale)
  const {data:blogs={}, error:isError, isLoading:loading} = useGetBlogsListQuery(locale)
  const {data: mainContent} = useGetMainContentQuery(locale)
  
  const handleLanguageChangeClick = () =>{
    setLocale((prev) => (prev === "en" ? "fr" : "en"));
    
  }
  
  useEffect(() => {
    const socket = io("http://localhost:1337"); // Your Strapi backend

    socketRef.current = socket;

    // Log socket connection
    socket.on("connection", () => {
      console.log("Connected to Strapi socket:", socket.id);
    });

    // Listen for webhook events
    socket.on("webhook_event", (data) => {
      console.log("Webhook Event Received:", data);

      refetch()
    });

    // Cleanup socket listener on unmount
     return () => {
      if (socket.connected) {
        socket.disconnect(); // only on real unmount
      }
    };
  
    
  }, [])
  
  return (
    <div>
        <Header mainContent={mainContent?.data || ""} handleLanguageClick={handleLanguageChangeClick} />
        <MainSection programs={data} blogs={blogs}/>
        <Footer />
    </div>
  )
}

export default Home