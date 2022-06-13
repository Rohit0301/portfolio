import Head from 'next/head'
import React from 'react'
import TechStackPage from '../src/Presenters/TechStackPage/TechStackPage'

export default function TechStack() {
  return (
    <>
      <Head>
        <title>Rohit Jain | Statistics</title>
        <meta name="description" content="Rohit Jain portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <TechStackPage/>
    </>
  )
}
