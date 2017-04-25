import React from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router"
import NavBar from './NavBar'

export default React.createClass({
  componentDidUpdate() {
     window.scrollTo(0, 0)
  },
  render(){
  return (
    <div>
      <NavBar/>
      <section className="page2_left_area">
        <h1 className="page2_name_title" style={{marginTop: "2em"}}>Johnny Ramirez</h1>
        <h2 className="title_army">MAJOR, US ARMY RETIRED</h2>
        <p className="page2_text">I am very proud of my service in the US Marine Corps and US Army. As a successful Real Estate Entrepreneur-my #1 objective is to help families achieve their real estate goals in selling or buying their home. </p>
        <p className="page2_text">With that said, not all real estate agents are created equal.</p>
        <p className="page2_text">I have aligned myself with some of the most successful experts in the real estate industry in San Antonio to help me to provide the best resources for my clients. I am a no nonsense business professional who will always put the needs of my clients first and foremost.</p>
      </section>
      <img className="johnny_portait" src="/styles/Johnny_Portrait.jpg"/>
    </div>
    )
  }
})
