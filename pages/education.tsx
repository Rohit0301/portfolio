import React from 'react'
import Head from 'next/head';
import EducationPage from '../src/Presenters/EducationPage/EducationPage';

export default function Education() {
   
  return (
      <>
        <Head>
        <title>Rohit Jain | Education</title>
        <meta name="description" content="Rohit Jain portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EducationPage/>
    </>
  )
}
