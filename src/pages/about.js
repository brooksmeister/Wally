import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Brooksy"/>
      <hr></hr>
      <Header headerText="It's a Brooksy thing"/>
      <p>Such wow. Very React.</p>
    </div>
  )
}