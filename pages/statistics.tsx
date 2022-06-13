import Head from 'next/head'
import React from 'react'
import StatisticsPage from '../src/Presenters/StatisticsPage/StatisticsPage'

export default function Statistics() {
  return (
    <>
        <Head>
        <title>Rohit Jain | Statistics</title>
        <meta name="description" content="Rohit Jain portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StatisticsPage/>
    </>
  )
}
