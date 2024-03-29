import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../../components/Shared/Header'
import Hero from '../../components/Main/Hero'
import Work from '../../components/Main/Work'
import Features from '../../components/Main/Features'
import Support from '../../components/Main/Support'
import Footer from '../../components/Shared/Footer'
import EndPage from '../../components/Main/EndPage'
import React, { useState, useEffect } from 'react';


export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
 <div id='animate-area'>
<div   className="cursor "
      style={{ left: position.x, top: position.y }} ></div>
 <div  className=" lg:mx-16 z-50">
  <Header />
  <Hero />
  <Work />
  <Features />
  <Support />
  <EndPage />
  <Footer />
 </div>
 </div>
    </>
  )
}
