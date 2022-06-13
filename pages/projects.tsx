import React from 'react'
import Head from 'next/head';
import ProjectsPage from '../src/Presenters/ProjectsPage/ProjectsPage';

export default function Projects() {   
  return (
      <>
        <Head>
        <title>Rohit Jain | Projects</title>
        <meta name="description" content="Rohit Jain portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectsPage/>
    </>
  )
}
