import React from 'react'
import Head from 'next/head';
import ExperiencePage from '../src/Presenters/ExperiencePage/ExperiencePage'
export default function Experience() {
   
  return (
      <>
        <Head>
        <title>Rohit Jain | Experience</title>
        <meta name="description" content="Rohit Jain portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <ExperiencePage/>
    </>
  )
}
