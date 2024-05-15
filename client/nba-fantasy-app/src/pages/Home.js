import React from 'react'
import DisplayPlayers from '../components/DisplayPlayers'

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <p>
       Welcome to NBA Fantasy Analyzer. This website aims to provide a better way to analyze your fantasy NBA team. 
       Leverage our search and filtering features to find players that match your stile
    </p>
    <DisplayPlayers/>
    </>
  )
}
